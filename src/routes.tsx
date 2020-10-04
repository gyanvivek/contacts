import React from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import ProtectedRoutes from "./ProtectedRoutes";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Login /> },
  {
    path: "/home",
    key: "APP",
    component: () => <ProtectedRoutes component={Home} />,
  },
];

export default ROUTES;
