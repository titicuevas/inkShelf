<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use MongoDB\Client as MongoDB; // Verifica que este uso sea correcto

class BooksTableSeeder extends Seeder
{
    public function run()
    {
        // Conectar a MongoDB usando el URI
        $mongo = new MongoDB(env('DB_URI'));
        $collection = $mongo->selectDatabase(env('DB_DATABASE'))->books; // Asegúrate de que la colección se llama "books"

        // Datos de prueba
        $data = [
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'status' => 'leído',
            ],
            [
                'title' => 'Brave New World',
                'author' => 'Aldous Huxley',
                'status' => 'pendiente',
            ],
            [
                'title' => 'The Catcher in the Rye',
                'author' => 'J.D. Salinger',
                'status' => 'lo quiero',
            ],
        ];

        // Insertar datos en la colección
        foreach ($data as $book) {
            $collection->insertOne($book);
        }

        echo "Datos de prueba insertados correctamente.\n";
    }
}
