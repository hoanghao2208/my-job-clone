// import React from 'react'
import { useRoutes } from "react-router-dom";
import Login from "../views/Login";

export default function RouteComponent() {
    const routeElements = useRoutes([
        {
            path: "/login",
            element: <Login />,
        },
    ]);
    return routeElements;
}
