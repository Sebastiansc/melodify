import { RECEIVE_PLAYLISTS } from '../actions/playlist_actions';
import merge from 'lodash/merge';

const PlaylistsReducer = (state = {}, action) => {
  let newState = merge({}, state);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    default:
      return state;
  }
};

export default PlaylistsReducer;
