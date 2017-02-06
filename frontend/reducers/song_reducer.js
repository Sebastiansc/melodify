// Handles operations on the current viewed and playing songs
import { RECEIVE_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG:
      return action.song;
    default:
      return state;
  }
};

export default SongsReducer;
