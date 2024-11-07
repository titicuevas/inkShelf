import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios'; // Asegúrate de tener axios instalado

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/auth/books'); // Cambia esto por la URL de tu API
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Books List</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
