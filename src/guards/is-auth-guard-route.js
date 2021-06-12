import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../contexts/app-context';

const IsAuthGuardRoute = ({ component: Component, ...rest }) => {
  const user = useUserContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        user.token ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default IsAuthGuardRoute;
