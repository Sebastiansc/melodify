import { GET_TRACKS, receiveTracks } from '../actions/tracks_actions';
import { getTracks } from '../util/tracks_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = tracks => dispatch(receiveTracks(tracks));
  const errorCallback = error => console.log(error);

  switch(action.type) {
    case GET_TRACKS:
      getTracks(successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
