import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';
import { like } from '../actions/like_actions';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user =>{
    const state = getState();
    if (state.cache.like) {
      dispatch(like(state.cache.like));
    }
    dispatch(receiveCurrentUser(user));

  };

  const errorCallback = error => dispatch(receiveErrors(error.responseJSON));

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => action.redirect());
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
