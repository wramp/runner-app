//Protected Route checks if user is autentificated, if not redirects to "/"

import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const authUser = auth.isAuthenticated();
        if (authUser) {
          const { user } = authUser;
          return <Component {...props} loggedUser={user} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
