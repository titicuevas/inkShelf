<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\MustVerifyEmail; // Agrega esta línea

class User extends Authenticatable implements MustVerifyEmail // Implementa la interfaz
{
    use HasFactory, Notifiable;

    /**
     * Atributos que se pueden asignar masivamente.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    /**
     * Atributos ocultos para la serialización.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Conversión de atributos a tipos nativos.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    

    /**
     * Relación con el modelo Book.
     */
    public function books()
    {
        return $this->belongsToMany(Book::class, 'user_books')
                    ->withPivot('status', 'rating')
                    ->withTimestamps();
    }
}
