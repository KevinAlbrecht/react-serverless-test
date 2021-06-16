import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { appReducerActions } from './store/app-reducer';
import IsAuthGuardRoute from './guards/is-auth-guard-route';
import { Login, Home } from './pages';
import { useAppDispatch } from './contexts/app-context';
import { getUserOrganizations } from './http/api';

const initIfUserStored = async (dispatch, callback) => {
  let storedUser = localStorage.getItem('user');
  if (storedUser) {
    storedUser = JSON.parse(storedUser);
    const organizations = await getUserOrganizations();
    dispatch({
      type: appReducerActions.userAndOrganizationsLoaded,
      payload: { user: storedUser, organizations },
    });
    callback();
  }
};

export function Routes() {
  const history = useHistory();
  const callback = () => history.push('/home');
  const dispatch = useAppDispatch();

  useEffect(() => {
    initIfUserStored(dispatch, callback);
  }, []);

  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <IsAuthGuardRoute path='/home' exact component={Home} />
    </Switch>
  );
}
