<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminAuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $adminEmail = config('app.admin_email', 'admin@pfesi.test');
        $adminPassword = config('app.admin_password', 'admin123');

        if ($credentials['email'] !== $adminEmail || $credentials['password'] !== $adminPassword) {
            return response()->json(['message' => 'Invalid login details.'], 422);
        }

        $request->session()->regenerate();
        $request->session()->put('admin_logged_in', true);

        return response()->json(['message' => 'Logged in successfully.']);
    }

    public function me(Request $request): JsonResponse
    {
        return response()->json([
            'authenticated' => (bool) $request->session()->get('admin_logged_in'),
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->session()->forget('admin_logged_in');

        return response()->json(['message' => 'Logged out successfully.']);
    }
}
