import React from "react";
import { Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelector from "./store/selectors/auth";

export interface Props extends RouteProps {
  component: React.ComponentType;
}
const ProtectedRoute = ({ component }: Props) => {
  const Component = component;
  const isAuthenticated = useSelector(authSelector.isAuthenticated);

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
};

export default ProtectedRoute;
