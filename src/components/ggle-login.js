import React from 'react';
import { useHistory } from 'react-router-dom';

import { signInWithPopupAsync, signInWithRedirect } from '../http/google-signin';
import { useAppDispatch } from '../contexts/app-context';
import { appReducerActions } from '../store/app-reducer';
import userProjection from '../http/projections/user-projection';

const useGoogleSignInByPopup = (dispatch, callback) => {
  dispatch({ type: appReducerActions.userLoading });
  signInWithPopupAsync()
    .then((result) => {
      dispatch({
        type: appReducerActions.userLoaded,
        payload: userProjection(result),
      });
      callback();
    })
    .catch((error) =>
      dispatch({ type: appReducerActions.userError, payload: error })
    );
};

const useGoogleSignInByRedirect = (dispatch) => {
  dispatch({ type: appReducerActions.userLoading });
  signInWithRedirect()
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
        <button onClick={() => useGoogleSignInByRedirect(appDispatch, callback)}>Via Redirect</button>
      </div>
    </div>
  );
}
