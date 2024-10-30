<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    // Establece la conexión con MongoDB
    protected $connection = 'mongodb';

    // Especifica los atributos que se pueden asignar masivamente
    protected $fillable = [
        'title',
        'author',
        'status',
    ];
}
