// Liked tracks are sent in an array to main query order from database.
// Object would not ensure order.
import { RECEIVE_LIKES,
         RECEIVE_RECENT_LIKES, } from '../actions/liked_tracks_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';
import { findTrackIdx } from './selectors';


const LikedTracksReducer = (state = [], action) => {
  let newState = [].concat(state);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.tracks;
    case RECEIVE_RECENT_LIKES:
      return action.tracks;
    case RECEIVE_LIKE:
      const trackIdx = findTrackIdx(newState, action.track);
      if (trackIdx) newState.splice(trackIdx, 1);
      return [action.track].concat(newState);
    case REMOVE_LIKE:
      let idx = findTrackIdx(newState, action.track);
      if (idx) newState.splice(trackIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default LikedTracksReducer;
