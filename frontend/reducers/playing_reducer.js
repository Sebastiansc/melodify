// Handles collection of songs being played by the sites Player
import { PLAYING } from '../actions/song_actions';
import merge from 'lodash/merge';

const _null = {
  tracks: []
};

const SongsReducer = (state = _null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PLAYING:
      return {
        songId: action.songId,
        tracks: action.tracks
      };
    default:
      return state;
  }
};

export default SongsReducer;
