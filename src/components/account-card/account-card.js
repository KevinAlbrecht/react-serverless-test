import React from 'react';
import { signOutAsync } from '../../http/google-signin';
import { useAppDispatch, useUserContext } from '../../contexts/app-context';
import { appReducerActions } from '../../store/app-reducer';
import { useHistory } from 'react-router-dom';

import './account-card.css';

export default function () {
  const userInfos = useUserContext();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const callback = () => history.push('/');

  const handleSelectChange = (e) => {
    e.preventDefault();
    dispatch({
      type: appReducerActions.currentOrganizationSet,
      payload: e.target.value,
    });
  };
  const handleSignOut = (dispatch, callback) => {
    dispatch({ type: appReducerActions.userLoading });
    signOutAsync()
      .then(() => {
        dispatch({
          type: appReducerActions.signOut,
          payload: null,
        });
        localStorage.removeItem('user');
        callback();
      })
      .catch((error) =>
        dispatch({ type: appReducerActions.userError, payload: error })
      );
  };
  const renderLoading = () => {
    return (
      <React.Fragment>
        <div className='rotating-loader'>😴</div>
        <p>Loading ...</p>
      </React.Fragment>
    );
  };
  const renderAccount = () => {
    return (
      <React.Fragment>
        <img src={userInfos.picture} alt='user picture' />
        <div className='account-card__sub'>
          <p>Bonjour {userInfos.fullName}</p>
          {/* <p>Token: {userInfos.token}</p> */}
          <select name='org' onChange={handleSelectChange}>
            {userInfos.organizations.map((o) => (
              <option value={o.id} key={o.id}>
                {o.name}
              </option>
            ))}
          </select>
          <button onClick={() => handleSignOut(dispatch, callback)}>
            Sign Out
          </button>
        </div>
      </React.Fragment>
    );
  };
  const renderSignedOut = () => {
    return <p>Non connecté</p>;
  };

  return (
    <div className='account-card__container'>
      {userInfos.isLoading
        ? renderLoading()
        : userInfos.fullName
        ? renderAccount()
        : renderSignedOut()}
    </div>
  );
}
