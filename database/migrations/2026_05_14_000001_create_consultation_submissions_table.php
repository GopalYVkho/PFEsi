<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('consultation_submissions', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone', 30);
            $table->string('talking_about');
            $table->date('preferred_date');
            $table->string('time_slot', 60);
            $table->string('language', 60);
            $table->string('status')->default('Step 1 Completed');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('consultation_submissions');
    }
};
