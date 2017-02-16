import { GET_LIKES,
         GET_RECENT_LIKES,
         receiveLikes} from '../actions/liked_tracks_actions';
import { getLikes, recentLikes } from '../util/liked_tracks_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = likes => {
    dispatch(receiveLikes(likes));
  };
  const errorCallback = error => console.log(error);

  switch(action.type) {
    case GET_LIKES:
      getLikes(successCallback);
      return next(action);
    case GET_RECENT_LIKES:
      recentLikes(successCallback);
      return next(action);
    default:
      return next(action);
  }
};
