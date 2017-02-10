import { CREATE_SONG } from '../actions/tracks_actions';
import { createSong } from '../util/song_api_util';

export default ({ getState, dispatch }) => next => action => {
  const errorCallback = error => console.log(error);

  switch(action.type) {
    case CREATE_SONG:
      createSong(action.song);
      return next(action);
    default:
      return next(action);
  }
};
