import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
                {children}
            </div>
        </div>
    );
}
