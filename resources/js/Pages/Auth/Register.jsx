import GuestLayout from '@/Layouts/GuestLayout';
import React, { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
            const csrfToken = csrfTokenElement ? csrfTokenElement.content : '';

            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en el registro. Verifica los datos ingresados.');
            }

            // Redirigir al login o dashboard
            window.location.href = '/login';
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    return (
        <GuestLayout>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-bold mb-5">Registrarse</h2>
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                {/* ... input fields ... */}
            </form>
        </GuestLayout>
    );
};

export default Register;
