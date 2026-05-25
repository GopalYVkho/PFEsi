<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('consultation_submissions', function (Blueprint $table): void {
            $table->string('service_plan')->nullable()->after('language');
            $table->unsignedInteger('amount')->nullable()->after('service_plan');
            $table->string('payment_status')->default('Not Started')->after('amount');
            $table->uuid('booking_token')->nullable()->unique()->after('payment_status');
        });
    }

    public function down(): void
    {
        Schema::table('consultation_submissions', function (Blueprint $table): void {
            $table->dropUnique(['booking_token']);
            $table->dropColumn(['service_plan', 'amount', 'payment_status', 'booking_token']);
        });
    }
};
