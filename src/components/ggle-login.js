import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  signInWithPopupAsync,
  signInWithRedirect,
} from '../http/google-signin';
import { getUserOrganizations } from '../http/api';
import { useAppDispatch } from '../contexts/app-context';
import { appReducerActions } from '../store/app-reducer';
import userProjection from '../http/projections/user-projection';

const useGoogleSignInByPopup = (dispatch, callback) => {
  dispatch({ type: appReducerActions.userLoading });
  (async () => {
    try {
      const userInfos = await signInWithPopupAsync();
      const user = userProjection(userInfos);
      localStorage.setItem('user', JSON.stringify(user));
      const organizations = await getUserOrganizations();
      dispatch({
        type: appReducerActions.userAndOrganizationsLoaded,
        payload: { user: user, organizations },
      });
      callback();
    } catch (exception) {
      dispatch({ type: appReducerActions.userError, payload: exception });
      console.log('ERRORgglesigninpopup', exception);
    }
  })();
};

const useGoogleSignInByRedirect = (dispatch) => {
  dispatch({ type: appReducerActions.userLoading });
  signInWithRedirect();
};

export default function () {
  const appDispatch = useAppDispatch();
    const history = useHistory();
    const callback = () => history.push('/home');

  return (
    <div>
      <h3>Sign in, uesh</h3>
      <div>
        <button onClick={() => useGoogleSignInByPopup(appDispatch, callback)}>
          Via Popup
        </button>
        <button
          onClick={() => useGoogleSignInByRedirect(appDispatch, callback)}
        >
          Via Redirect
        </button>
      </div>
    </div>
  );
}
