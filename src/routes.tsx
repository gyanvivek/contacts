import React from "react";
import Login from "./pages/login";
import Home from "./pages/home";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Login /> },
  {
    path: "/home",
    key: "APP",
    component: () => <Home />,
  },
];

export default ROUTES;
