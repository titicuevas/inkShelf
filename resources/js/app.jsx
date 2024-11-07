import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InertiaProgress } from "@inertiajs/progress";

// Importa tus componentes
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard"; // Asegúrate de que la ruta es correcta

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />, // Asegúrate de que estás importando correctamente el componente Dashboard
    },
]);

const root = createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// Inicializa Inertia Progress
InertiaProgress.init();
