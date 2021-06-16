import React, { useEffect } from 'react';
import { appReducerActions } from '../store/app-reducer';
import { useAppDispatch } from '../contexts/app-context';
import { getRedirectResultAsync } from '../http/google-signin';
import { getUserOrganizations } from '../http/api';

import userProjection from '../http/projections/user-projection';
import GoogleLogin from '../components/ggle-login';

export function Login() {
  const callback = () => {};
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const userInfos = await getRedirectResultAsync();
        if (userInfos.user) {
          const user = userProjection(userInfos);
          localStorage.setItem('user', JSON.stringify(user));
          const organizations = await getUserOrganizations();
          dispatch({
            type: appReducerActions.userAndOrganizationsLoaded,
            payload: { user: user, organizations },
          });
          callback();
        }
      } catch (exception) {
        console.log('exception SignInAndGetUserInfos', exception);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLogin></GoogleLogin>
    </div>
  );
}
