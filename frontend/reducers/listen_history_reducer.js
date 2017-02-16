// Uses array as state to maintain query order from database
import { RECEIVE_PLAYS } from '../actions/listen_history_actions';
import { RECEIVE_PLAY } from '../actions/playing_actions';
import merge from 'lodash/merge';
import { findTrackIdx } from './selectors';

const ListenHistoryReducer = (state = [], action) => {
  let newState = [].concat(state);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYS:
      return action.tracks;
    case RECEIVE_PLAY:
      return [action.track].concat(newState);
    default:
      return state;
  }
};

export default ListenHistoryReducer;
