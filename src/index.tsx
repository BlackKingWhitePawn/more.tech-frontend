import Login from 'pages/Login/Login';
import Root from 'pages/Root/Root';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />
    },
    {
        path: '/login',
        element: <Login />
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

