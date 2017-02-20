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
      if (newState[0] === "empty") newState = [];
      const trackIdx = findTrackIdx(newState, action.track);
      if (trackIdx > -1) newState.splice(trackIdx, 1);
      return [action.track].concat(newState);
    case REMOVE_LIKE:
      let idx = findTrackIdx(newState, action.track);
      if (idx > -1) newState.splice(idx, 1);
      if (!newState.length) newState.push("empty");
      return newState;
    default:
      return state;
  }
};

export default LikedTracksReducer;
