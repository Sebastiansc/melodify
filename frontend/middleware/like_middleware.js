import { LIKE, UNLIKE, receiveLike } from '../actions/like_actions';
import { like, unlike } from '../util/like_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = likeData => dispatch(receiveLike(likeData));
  const errorCallback = error => console.log(error);

  switch(action.type) {
    case LIKE:
      like(action.songId);
      return next(action);
    case UNLIKE:
      unlike(action.songId);
      return next(action);
    default:
      return next(action);
  }
};
