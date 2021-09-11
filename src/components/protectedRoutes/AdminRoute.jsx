import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated, userInfo } from '../authentication/authUtilities';

const AdminRoute = ({ children, ...rest }) => {
  const { role } = userInfo();
    return (
        <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated() && role === 'admin' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;