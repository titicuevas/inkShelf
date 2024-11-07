<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        $client = new Client();
        $apiKey = env('GOOGLE_BOOKS_API_KEY'); // Obtén la clave de API desde el archivo .env
        $url = 'https://www.googleapis.com/books/v1/volumes?q=programming&key=' . $apiKey; // Cambia la consulta según tus necesidades

        try {
            $response = $client->request('GET', $url);
            $books = json_decode($response->getBody()->getContents(), true);

            return Inertia::render('Books', ['books' => $books['items'] ?? []]); // Asegúrate de que 'items' exista
        } catch (\Exception $e) {
            return Inertia::render('Books', ['books' => [], 'error' => $e->getMessage()]);
        }
    }
}
