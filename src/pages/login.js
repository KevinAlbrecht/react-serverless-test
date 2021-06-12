import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { appReducerActions } from '../store/app-reducer';
import { useAppDispatch } from '../contexts/app-context';
import { getRedirectResultAsync } from '../http/google-signin';
import userProjection from '../http/projections/user-projection';
import GoogleLogin from '../components/ggle-login';

export function Login() {
  const history = useHistory();
  const callback = () => history.push('/home');
  const appDispatch = useAppDispatch();

  useEffect(() => {
    getRedirectResultAsync()
      .then((result) => {
        if (result && result.user) {
          appDispatch({
            type: appReducerActions.userLoaded,
            payload: userProjection(result),
          });
          callback();
        }
      })
      .catch((err) => {
        appDispatch({ type: appReducerActions.userError, payload: err });
      });
  }, []);

  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLogin></GoogleLogin>
    </div>
  );
}
