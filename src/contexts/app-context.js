import React, { useContext } from 'react';
import appReducer from '../store/app-reducer';
import useThunkReducer from '../store/app-thunk-reducer';
import defaultAppState from '../store/app-state';

//Context Provider
const AppStateContext = React.createContext(defaultAppState);
//

// Custom hook pour acceder à toutes les propriétées globales
const useAppStateContext = () => useContext(AppStateContext);

// custom hook pour acceder seulement au user du context global
const useUserContext = () => {
  const [context] = useAppStateContext();
  return context.user;
};

// custom hook pour acceder au dispatcher lié au context;
const useAppDispatch = () => {
  const [value, dispatch] = useAppStateContext();
  return dispatch;
};

// Component wrapper -> pas forcément utile de rajouter un noeud mais bon ...
const AppContext = ({ children }) => {
  const contextValue = useThunkReducer(appReducer, defaultAppState);

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};
//

export default AppContext;
export { useUserContext, useAppDispatch };
