import { CREATE_SONG } from '../actions/song_actions';
import { RECORD_PLAY, receivePlay } from '../actions/playing_actions';
import { GET_SONG, receiveSong } from '../actions/song_actions';
import { createSong,
         recordPlay,
         getSong} from '../util/song_api_util';

export default ({ getState, dispatch }) => next => action => {
  const errorCallback = error => console.log(error);
  const playSuccess = track => {
    if (track.success) {
      dispatch(receivePlay(track));
    }
  };

  switch(action.type) {
    case CREATE_SONG:
      createSong(action.song);
      return next(action);
    case RECORD_PLAY:
      recordPlay(action.songId, playSuccess);
      return next(action);
    case GET_SONG:
      getSong(action.songId, song => dispatch(receiveSong(song)));
      return next(action);
    default:
      return next(action);
  }
};
