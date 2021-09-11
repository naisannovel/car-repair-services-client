import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../authentication/authUtilities';

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