import AppStateContext from '../contexts/app-context';
import useThunkReducer from '../store/app-thunk-reducer';
import appReducer from '../store/app-reducer';
import defaultAppState from '../store/app-state';

export default function ({ children }) {
  const contextValue = useThunkReducer(appReducer, defaultAppState);

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
}
