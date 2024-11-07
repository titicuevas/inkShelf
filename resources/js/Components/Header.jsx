// resources/js/Components/Header.jsx

import React from "react";
import { Link } from "@inertiajs/react";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-lg font-bold">InkShelf</h1>
                <nav className="flex space-x-4">
    <Link href="/" className="hover:text-blue-300">Inicio</Link>
    <Link href="/books" className="hover:text-blue-300">Libros</Link>
    <Link href="/login" className="hover:text-blue-300">Login</Link>
    <Link href="/register" className="hover:text-blue-300">Registrar</Link>
</nav>
            </div>
        </header>
    );
};

export default Header;
