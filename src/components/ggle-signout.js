import React from 'react';
import { useHistory } from 'react-router-dom';

import { signOutAsync } from '../http/google-signin';
import { useAppDispatch } from '../contexts/app-context';
import { appReducerActions } from '../store/app-reducer';

const useGoogleSignOut = (dispatch, callback) => {
  dispatch({ type: appReducerActions.userLoading });
  signOutAsync()
    .then(() => {
      dispatch({
        type: appReducerActions.signOut,
        payload: null,
      });
      callback();
    })
    .catch((error) =>
      dispatch({ type: appReducerActions.userError, payload: error })
    );
};

export default function () {
  const appDispatch = useAppDispatch();
  const history = useHistory();
  const callback = () => history.push('/');

  return (
    <button onClick={() => useGoogleSignOut(appDispatch, callback)}>
      Sign Out
    </button>
  );
}
