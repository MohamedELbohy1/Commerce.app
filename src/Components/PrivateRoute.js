import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, getCurrentUser } from "./auth";

const PrivateRoute = ({ component: Component, allowedRoles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthenticated()) {
        return <Redirect to="/Login" />;
      }

      const currentUser = getCurrentUser();
      if (allowedRoles.includes(currentUser.role)) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/" />;
      }
    }}
  />
);

export default PrivateRoute;
