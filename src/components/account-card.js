import React from 'react';
import { useUserContext } from '../contexts/app-context';
import './account-card.css';

export default function () {
  const userInfos = useUserContext();

  const renderLoading = () => {
    return (
      <React.Fragment>
        <div class='rotating-loader'>😴</div>
        <p>Loading ...</p>
      </React.Fragment>
    );
  };
  const renderAccount = () => {
    return (
      <React.Fragment>
        <img src={userInfos.picture} />
        <div className='account-card__sub'>
          <p>Bonjour {userInfos.fullName}</p>
          <p>Token: {userInfos.token}</p>
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
