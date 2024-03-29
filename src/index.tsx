import { Layout } from 'components';
import Creating from 'pages/Creating/Creating';
import Login from 'pages/Login/Login';
import Open from 'pages/Open/Open';
import Registration from 'pages/Registration/Registration';
import Root from 'pages/Root/Root';
import Shop from 'pages/Shop/Shop';
import User from 'pages/User/User';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './index.scss'

// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./mocks/browser')
//     worker.start()
// }

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/creating',
        element: <Creating />
    },
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/user/:id',
        element: <User />
    },
    {
        path: '/shop',
        element: <Shop />
    },
    {
        path: '/open',
        element: <Open />
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

