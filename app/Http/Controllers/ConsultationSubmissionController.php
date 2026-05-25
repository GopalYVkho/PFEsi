<?php

namespace App\Http\Controllers;

use App\Models\ConsultationSubmission;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class ConsultationSubmissionController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = $this->validator($request);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Please check the consultation form details.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $submission = ConsultationSubmission::create([
            ...$validator->validated(),
            'booking_token' => (string) Str::uuid(),
            'payment_status' => 'Not Started',
            'status' => 'Step 1 Completed',
        ]);

        return response()->json([
            'message' => 'Your basic details are saved. Our team will contact you.',
            'submission' => $submission,
        ], 201);
    }

    public function selectPlan(Request $request, ConsultationSubmission $consultationSubmission): JsonResponse
    {
        $validated = $request->validate([
            'booking_token' => ['required', 'uuid'],
            'service_plan' => ['required', 'in:call-before-sharing,screen-sharing-call,expert-query-call'],
        ]);

        if (! hash_equals((string) $consultationSubmission->booking_token, $validated['booking_token'])) {
            return response()->json(['message' => 'Invalid booking session.'], 403);
        }

        $plans = [
            'call-before-sharing' => ['Talk to us on a call before sharing UAN & Password', 349],
            'screen-sharing-call' => ['Sharing Online PC/Laptop Screen with Call', 899],
            'expert-query-call' => ['Speak with Our Expert to Discuss Your Query', 649],
        ];

        [$servicePlan, $amount] = $plans[$validated['service_plan']];

        $consultationSubmission->update([
            'service_plan' => $servicePlan,
            'amount' => $amount,
            'payment_status' => 'Pending Integration',
            'status' => 'Step 2 Completed',
        ]);

        return response()->json([
            'message' => 'Selected service saved successfully.',
            'submission' => $consultationSubmission->fresh(),
        ]);
    }

    public function updateDetails(Request $request, ConsultationSubmission $consultationSubmission): JsonResponse
    {
        $request->validate(['booking_token' => ['required', 'uuid']]);

        if (! hash_equals((string) $consultationSubmission->booking_token, $request->string('booking_token')->toString())) {
            return response()->json(['message' => 'Invalid booking session.'], 403);
        }

        $validator = $this->validator($request);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Please check the consultation form details.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $consultationSubmission->update($validator->validated());

        return response()->json([
            'message' => 'Your basic details are updated.',
            'submission' => $consultationSubmission->fresh(),
        ]);
    }

    public function index(Request $request): JsonResponse
    {
        if (! $this->isAdmin($request)) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        return response()->json([
            'submissions' => ConsultationSubmission::latest()->get(),
        ]);
    }

    public function update(Request $request, ConsultationSubmission $consultationSubmission): JsonResponse
    {
        if (! $this->isAdmin($request)) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        $validator = $this->validator($request);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Please check the consultation details.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $consultationSubmission->update([
            ...$validator->validated(),
            'status' => $request->string('status', $consultationSubmission->status)->toString(),
        ]);

        return response()->json([
            'message' => 'Consultation submission updated.',
            'submission' => $consultationSubmission->fresh(),
        ]);
    }

    public function destroy(Request $request, ConsultationSubmission $consultationSubmission): JsonResponse
    {
        if (! $this->isAdmin($request)) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        $consultationSubmission->delete();

        return response()->json(['message' => 'Consultation submission deleted.']);
    }

    private function validator(Request $request): \Illuminate\Validation\Validator
    {
        return Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:160'],
            'phone' => ['required', 'string', 'max:30'],
            'talking_about' => ['required', 'string', 'max:120'],
            'preferred_date' => ['required', 'date'],
            'time_slot' => ['required', 'string', 'max:60'],
            'language' => ['required', 'string', 'max:60'],
            'service_plan' => ['nullable', 'string', 'max:160'],
            'amount' => ['nullable', 'integer', 'min:0'],
            'payment_status' => ['nullable', 'string', 'max:80'],
            'status' => ['nullable', 'string', 'max:80'],
        ]);
    }

    private function isAdmin(Request $request): bool
    {
        return (bool) $request->session()->get('admin_logged_in');
    }
}
