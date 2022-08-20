import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../auth/authUtilities';

const PrivateRoute = ({ children, ...rest }) => {
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated() ? (
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

export default PrivateRoute;