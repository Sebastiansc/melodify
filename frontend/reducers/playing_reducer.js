// Handles collection of songs being played by the sites Player
import { NOW_PLAYING, PAUSE, PLAY, NEXT } from '../actions/playing_actions';
import merge from 'lodash/merge';

const _null = {
  state: false,
  tracks: []
};

const PlayingReducer = (state = _null, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case NOW_PLAYING:
      return {tracks: action.tracks, songId: action.songId, state: true };
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
    default:
      return state;
  }
};

export default PlayingReducer;
