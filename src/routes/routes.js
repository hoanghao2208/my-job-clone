// import React from 'react'
import { useRoutes } from 'react-router-dom';
import FindJobLayout from '../layouts/FindJobLayout';
import RegisterLayout from '../layouts/RegisterLayout';
import FindJob from '../views/FindJob';
import ForgotPassword from '../views/ForgotPassword';
import Login from '../views/Login';
import Register from '../views/Register';
import ResetPassword from '../views/ResetPassword';
import JobDetails from '../views/JobDetails';

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
        {
            path: '/reset-password',
            element: (
                <>
                    <ResetPassword />,
                </>
            ),
        },
        {
            path: '/find-job',
            element: (
                <FindJobLayout>
                    <FindJob />
                </FindJobLayout>
            ),
        },
        {
            path: '/job-details',
            element: (
                <FindJobLayout>
                    <JobDetails />
                </FindJobLayout>
            ),
        },
    ]);
    return routeElements;
}
