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
    case appReducerActions.organizationLoaded:
      const newState = { ...state };
      Object.assign(newState.user.organizations, action.payload);
      return newState;
    case appReducerActions.currentOrganizationSet:
      return { ...state, currentOrganization: action.payload };
    case appReducerActions.userAndOrganizationsLoaded:
      const user = {
        isLoading: false,
        error: null,
        ...action.payload.user,
        organizations: action.payload.organizations,
      };
      let currentOrganization = state.currentOrganization;
      if (action.payload.organizations.length > 0)
        currentOrganization = action.payload.organizations[0].id;
      return { ...state, user, currentOrganization };
  }
};

export const appReducerActions = {
  userLoading: 'USER_LOADING',
  userLoaded: 'USER_LOADED',
  userError: 'USER_ERROR',
  notify: 'NEW_NOTIFICATION',
  signOut: 'SIGNOUT',
  organizationLoaded: 'ORG_LOADED',
  userAndOrganizationsLoaded: 'ORG_USR_LOADED',
  //   setCurrentOrganization: 'ORG_SET',
};

export default appReducer;
