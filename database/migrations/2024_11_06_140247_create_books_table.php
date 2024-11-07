<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('genre')->nullable();
            $table->integer('pages')->nullable();
            $table->string('author')->nullable();
            $table->decimal('average_rating', 2, 1)->nullable(); // Valor promedio de las puntuaciones de usuarios
            $table->timestamps();
            
            // Índices para mejorar la búsqueda
            $table->index('genre');
            $table->index('author');
            $table->index('average_rating');
        });
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
