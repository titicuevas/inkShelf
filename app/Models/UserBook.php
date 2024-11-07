<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class UserBook extends Pivot
{
    use HasFactory;

    protected $table = 'user_books';

    protected $fillable = [
        'user_id',
        'book_id',
        'status',
        'rating',
    ];
}
