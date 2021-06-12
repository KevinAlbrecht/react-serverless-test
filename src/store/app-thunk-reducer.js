import { useReducer } from 'react';
import isFunction from '../helpers/is-function';

export default function (reducer, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // oh geez ... what is happening here ...
  const enhancedDispatch = (action) => {
    if (isFunction(action)) action(dispatch);
    else dispatch(action);
  };

  return [state, enhancedDispatch];
}
