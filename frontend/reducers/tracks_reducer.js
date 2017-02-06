// Handles collection of songs (trending, charts, etc)
import { RECEIVE_TRACKS } from '../actions/tracks_actions';
import merge from 'lodash/merge';

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default TracksReducer;
