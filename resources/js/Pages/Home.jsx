// resources/js/Pages/Home.jsx

import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=5&key=AIzaSyDBykcI7DUcx-PIq-YvCi3cst0Sle6FpWU");
                const data = await response.json();
                setBooks(data.items || []);
            } catch (error) {
                console.error("Error fetching books:", error);
                setBooks([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main className="py-10 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold mb-5">Bienvenido a InkShelf</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {loading ? (
                            <p>Cargando libros...</p>
                        ) : books.length > 0 ? (
                            books.map((book) => (
                                <div key={book.id} className="bg-white p-4 rounded-lg shadow">
                                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-full h-40 object-cover mb-2 rounded" />
                                    <h2 className="font-bold text-lg">{book.volumeInfo.title}</h2>
                                    <p className="text-sm text-gray-600">{book.volumeInfo.authors?.join(", ")}</p>
                                </div>
                            ))
                        ) : (
                            <p>No hay libros disponibles.</p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
