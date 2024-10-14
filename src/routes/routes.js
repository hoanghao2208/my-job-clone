// import React from 'react'
import { useRoutes } from 'react-router-dom';
import RegisterLayout from '../layouts/RegisterLayout';
import Login from '../views/Login';
import Register from '../views/Register';
import ForgotPassword from '../views/ForgotPassword';

export default function RouteComponent() {
    const routeElements = useRoutes([
        {
            path: '/login',
            element: (
                <RegisterLayout>
                    <Login />,
                </RegisterLayout>
            ),
        },
        {
            path: '/register',
            element: (
                <RegisterLayout>
                    <Register />
                </RegisterLayout>
            ),
        },
        {
            path: '/forgot-password',
            element: (
                <RegisterLayout>
                    <ForgotPassword />
                </RegisterLayout>
            ),
        },
    ]);
    return routeElements;
}
