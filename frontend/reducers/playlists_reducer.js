import { RECEIVE_PLAYLISTS,
         TOGGLE_PLAYLIST_MODAL } from '../actions/playlist_actions';
import merge from 'lodash/merge';

const _null = {
  modal: false,
  track: {},
  lists: {}
};

const PlaylistsReducer = (state = _null, action) => {
  let newState = merge({}, state);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return merge(newState, {lists: action.playlists });
    case TOGGLE_PLAYLIST_MODAL:
      newState.modal = !newState.modal;
      newState.track = action.track;
      return newState;
    default:
      return state;
  }
};

export default PlaylistsReducer;
