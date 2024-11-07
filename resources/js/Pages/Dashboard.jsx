import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ books = [], user }) { // Asegúrate de recibir user aquí
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white bg-green-600 p-4">
                    Perfil de {user?.username || user?.name} {/* Muestra el nombre del usuario */}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold">Tus libros</h3>
                            {books.length > 0 ? (
                                <ul className="mt-4">
                                    {books.map((book) => (
                                        <li key={book.id} className="flex justify-between p-2 border-b">
                                            <span>{book.title}</span>
                                            <span>{book.pivot.status}</span> {/* Usa pivot para acceder al estado */}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No tienes libros registrados.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
