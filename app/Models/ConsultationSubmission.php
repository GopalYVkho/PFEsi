<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ConsultationSubmission extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'talking_about',
        'preferred_date',
        'time_slot',
        'language',
        'service_plan',
        'amount',
        'payment_status',
        'booking_token',
        'status',
    ];
}
