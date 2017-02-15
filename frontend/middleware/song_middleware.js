import { CREATE_SONG } from '../actions/tracks_actions';
import { RECORD_PLAY } from '../actions/playing_actions';
import { createSong, recordPlay } from '../util/song_api_util';

export default ({ getState, dispatch }) => next => action => {
  const errorCallback = error => console.log(error);

  switch(action.type) {
    case CREATE_SONG:
      createSong(action.song);
      return next(action);
    case RECORD_PLAY:
      recordPlay(action.songId);
      return next(action);
    default:
      return next(action);
  }
};
