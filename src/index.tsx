import Login from 'pages/Login/Login';
import Root from 'pages/Root/Root';
import User from 'pages/User/User';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
}

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
    },
    {
        path: '/user/:id',
        element: <User />
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

