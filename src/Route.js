import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/Dashbaord";
import Reports from "./components/Reports";
import Details from "./components/Details";

const AppRoute = () =>{
    let routes = useRoutes([
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/reports',
        element: <Reports/>,
      },
      {
        path:'/details',
        element: <Details/>
      }
    ])
    return routes;
};

export default AppRoute