<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'genre',
        'pages',
        'author',
        'average_rating',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_books')
                    ->withPivot('status', 'rating')
                    ->withTimestamps();
    }
}
