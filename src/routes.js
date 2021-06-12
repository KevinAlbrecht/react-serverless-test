import React from 'react';
import { Route, Switch } from 'react-router-dom';

import IsAuthGuardRoute from './guards/is-auth-guard-route';

import { Login, Home } from './pages';

export function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact component={Login} />
        <IsAuthGuardRoute path='/home' exact component={Home} />
      </Switch>
    </React.Fragment>
  );
}
