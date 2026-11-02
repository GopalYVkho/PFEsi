<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('consultation_submissions', function (Blueprint $table) {
            $table->id();
            $table->uuid('booking_token')->unique();
            $table->string('name', 120);
            $table->string('email', 160);
            $table->string('phone', 30);
            $table->string('talking_about', 120);
            $table->date('preferred_date');
            $table->string('time_slot', 60);
            $table->string('language', 60);
            $table->string('service_plan', 160)->nullable();
            $table->unsignedInteger('amount')->nullable();
            $table->string('payment_status', 80)->nullable();
            $table->string('status', 80)->nullable();
            $table->timestamps();
        });
    }
};