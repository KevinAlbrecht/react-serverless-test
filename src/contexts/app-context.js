import React, { useContext } from 'react';
import defaultAppState from '../store/app-state';

// Objet context
const AppStateContext = React.createContext(defaultAppState);
//

// Accesseur pour le state global
const useAppStateContext = () => useContext(AppStateContext);

// Accesseur pour la methode dispatch du context;
const useAppDispatch = () => {
  //originally written like following, but waring "value" never used popped out
  // const [value, dispatch] = useAppStateContext();
  const ctx = useAppStateContext();
  return ctx[1];
};

// Accesseur pour la propriété user du context
const useUserContext = () => {
  const [context] = useAppStateContext();
  return context.user;
};

// Accesseur pour l'organization courante;
const useCurrentOrgContext = () => {
  const [state] = useAppStateContext();
  return state.currentOrganization;
};

export default AppStateContext;
export { useUserContext, useAppDispatch, useCurrentOrgContext };
