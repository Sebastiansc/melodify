import { LIKE, UNLIKE, receiveLike, removeLike} from '../actions/like_actions';
import { like, unlike } from '../util/like_api_util';

export default ({ getState, dispatch }) => next => action => {
  const likeCallback = track => dispatch(receiveLike(track));
  const unlikeCallback = track => dispatch(removeLike(track));
  const errorCallback = error => console.log(error);

  switch(action.type) {
    case LIKE:
      like(action.songId, likeCallback);
      return next(action);
    case UNLIKE:
      unlike(action.songId, unlikeCallback);
      return next(action);
    default:
      return next(action);
  }
};
