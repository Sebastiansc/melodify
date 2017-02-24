// Handles collection of songs being played by the sites Player
import { NOW_PLAYING,
         PAUSE,
         PLAY,
         NEXT,
         RECORD_PROGRESS,
         GET_PROGRESS,
         CLEAR_PROGRESS} from '../actions/playing_actions';
import merge from 'lodash/merge';

// state - boolean. Playing or paused.
// tracks - array. current track collection being played.
// position - integer. Seconds into the track.
// fetchProgress - boolean. Should player dispatch recordProgress or not.
const _null = {
  state: false,
  tracks: [],
  position: 0,
  updater: '',
  fetchProgress: false
};

const PlayingReducer = (state = _null, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case NOW_PLAYING:
      return merge(
        newState,
        {tracks: action.tracks, songUrl: action.songUrl, state: true }
      );
    case PAUSE:
      newState.state = false;
      return newState;
    case PLAY:
      newState.state = true;
      return newState;
    case NEXT:
      const nextIdx = action.idx + 1;
      if (nextIdx >= state.tracks.length) {
        return _null;
      } else {
        newState.songId = state.tracks[nextIdx].id;
        return newState;
      }
    case RECORD_PROGRESS:
      return merge(
        newState,
        { position: action.position,
          fetchProgress: false,
          updater: action.updater }
      );
    case GET_PROGRESS:
      return merge(newState, { fetchProgress: true });
    case CLEAR_PROGRESS:
      return merge(newState, { position: 0, updater: ''});
    default:
      return state;
  }
};

export default PlayingReducer;
