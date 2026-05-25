<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\ConsultationSubmissionController;
use App\Http\Controllers\ContactSubmissionController;
use Illuminate\Support\Facades\Route;

Route::post('/api/contact-submissions', [ContactSubmissionController::class, 'store']);
Route::post('/api/consultation-submissions', [ConsultationSubmissionController::class, 'store']);
Route::put('/api/consultation-submissions/{consultationSubmission}/details', [ConsultationSubmissionController::class, 'updateDetails']);
Route::put('/api/consultation-submissions/{consultationSubmission}/plan', [ConsultationSubmissionController::class, 'selectPlan']);
Route::get('/api/admin/me', [AdminAuthController::class, 'me']);
Route::post('/api/admin/login', [AdminAuthController::class, 'login']);
Route::post('/api/admin/logout', [AdminAuthController::class, 'logout']);
Route::get('/api/admin/contact-submissions', [ContactSubmissionController::class, 'index']);
Route::put('/api/admin/contact-submissions/{contactSubmission}', [ContactSubmissionController::class, 'update']);
Route::delete('/api/admin/contact-submissions/{contactSubmission}', [ContactSubmissionController::class, 'destroy']);
Route::get('/api/admin/consultation-submissions', [ConsultationSubmissionController::class, 'index']);
Route::put('/api/admin/consultation-submissions/{consultationSubmission}', [ConsultationSubmissionController::class, 'update']);
Route::delete('/api/admin/consultation-submissions/{consultationSubmission}', [ConsultationSubmissionController::class, 'destroy']);

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
