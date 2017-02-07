// Handles collection of songs being played by the sites Player
import { NOW_PLAYING, PAUSE } from '../actions/playing_actions';
import merge from 'lodash/merge';

const _null = {
  state: false,
  tracks: []
};

const PlayingReducer = (state = _null, action) => {
  let newState = merge(state, {});
  Object.freeze(state);
  switch (action.type) {
    case NOW_PLAYING:
      return {
        state: true,
        songId: action.songId,
        tracks: action.tracks
      };
    case PAUSE:
      newState.state = false;
      return newState;
    default:
      return state;
  }
};

export default PlayingReducer;
