import defaultState from './app-state';
const appReducer = (state, action) => {
  switch (action.type) {
    case appReducerActions.userLoading:
      return {
        ...state,
        user: { ...state.user, isLoading: true, error: null },
      };
    case appReducerActions.userLoaded:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          isLoading: false,
          error: null,
        },
      };
    case appReducerActions.userError:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
          user: null,
          error: action.payload,
        },
      };
    case appReducerActions.notify:
      return { ...state, notification: action.payload };
    case appReducerActions.signOut:
      return { ...state, user: { ...defaultState.user, isLoading: false } };
  }
};

export const appReducerActions = {
  userLoading: 'USER_LOADING',
  userLoaded: 'USER_LOADED',
  userError: 'USER_ERROR',
  notify: 'NEW_NOTIFICATION',
  signOut: 'SIGNOUT',
};

export default appReducer;
