// Handles operations on the current viewed and playing songs
import { RECEIVE_SONG, CLEAR_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const _null = {
  likes: [],
  author: {}
};

const SongsReducer = (state = _null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG:
      return action.song;
    case CLEAR_SONG:
      return {};
    default:
      return state;
  }
};

export default SongsReducer;
