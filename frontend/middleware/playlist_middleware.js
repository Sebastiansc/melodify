import { CREATE_PLAYLIST,
         UPDATE_PLAYLIST,
         DELETE_PLAYLIST } from '../actions/playlist_actions';
import { createPlaylist,
         updatePlaylist,
         deletePlaylist } from '../util/playlist_api_util';

export default ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case CREATE_PLAYLIST:
      createPlaylist(action.playlist, action.tracks);
      return next(action);
    case UPDATE_PLAYLIST:
      updatePlaylist(action.playlist);
      return next(action);
    case DELETE_PLAYLIST:
      deletePlaylist(action.playlistId);
      return next(action);
    default:
      return next(action);
  }
};
