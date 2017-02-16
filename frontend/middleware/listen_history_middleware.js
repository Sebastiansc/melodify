import { GET_RECENT_PLAYS,
         GET_PLAYS,
         receivePlays } from '../actions/listen_history_actions';
import { recentPlays, getPlays } from '../util/listen_history_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = tracks => dispatch(receivePlays(tracks));
  const errorCallback = error => console.log(error);

  switch(action.type) {
    case GET_RECENT_PLAYS:
      recentPlays(successCallback);
      return next(action);
    case GET_PLAYS:
      getPlays(successCallback);
      return next(action);
    default:
      return next(action);
  }
};
