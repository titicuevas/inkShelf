<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Obtener el usuario autenticado
        $user = auth()->user();

        // Obtener los libros del usuario, asumiendo que ya tienes la relación definida en el modelo User
        $books = $user ? $user->books()->withPivot('status')->get() : [];

        return Inertia::render('Dashboard', [
            'books' => $books,
            'user' => $user, // Asegúrate de pasar el usuario al componente
        ]);
    }
}
