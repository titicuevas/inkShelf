import React from 'react';
import { Link } from '@inertiajs/react';

const UserMenu = ({ user }) => {
    return (
        <div className="relative inline-block text-left">
            <div>
                <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    {user ? user.username : 'Usuario'} {/* Muestra el nombre del usuario o "Usuario" */}
                </button>
            </div>

            <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                    {user ? (
                        <>
                            <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Ir al Dashboard
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Login
                            </Link>
                            <Link href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Registrarse
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserMenu;
