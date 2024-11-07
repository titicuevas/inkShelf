import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=react'); // Cambia la consulta según sea necesario
            const data = await response.json();
            setBooks(data.items);
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Libros</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <h2>{book.volumeInfo.title}</h2>
                        <p>{book.volumeInfo.authors.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
