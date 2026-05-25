<?php

namespace App\Http\Controllers;

use App\Models\ContactSubmission;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactSubmissionController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:120'],
            'subject' => ['required', 'string', 'max:120'],
            'phone' => ['required', 'string', 'max:30'],
            'email' => ['required', 'email', 'max:160'],
            'message' => ['nullable', 'string', 'max:1000'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Please check the form details.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $submission = ContactSubmission::create($validator->validated());

        return response()->json([
            'message' => 'Thanks. We will get back to you within 2 hours.',
            'submission' => $submission,
        ], 201);
    }

    public function index(Request $request): JsonResponse
    {
        if (! $request->session()->get('admin_logged_in')) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        return response()->json([
            'submissions' => ContactSubmission::latest()->get(),
        ]);
    }

    public function update(Request $request, ContactSubmission $contactSubmission): JsonResponse
    {
        if (! $request->session()->get('admin_logged_in')) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:120'],
            'subject' => ['required', 'string', 'max:120'],
            'phone' => ['required', 'string', 'max:30'],
            'email' => ['required', 'email', 'max:160'],
            'message' => ['nullable', 'string', 'max:1000'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Please check the form details.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $contactSubmission->update($validator->validated());

        return response()->json([
            'message' => 'Contact submission updated.',
            'submission' => $contactSubmission->fresh(),
        ]);
    }

    public function destroy(Request $request, ContactSubmission $contactSubmission): JsonResponse
    {
        if (! $request->session()->get('admin_logged_in')) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        $contactSubmission->delete();

        return response()->json(['message' => 'Contact submission deleted.']);
    }
}
