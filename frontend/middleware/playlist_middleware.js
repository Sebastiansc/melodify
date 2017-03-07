import { CREATE_PLAYLIST,
         UPDATE_PLAYLIST,
         DELETE_PLAYLIST,
         GET_USER_PLAYLISTS,
         ADD_TRACK,
         receivePlaylists } from '../actions/playlist_actions';
import { createPlaylist,
         updatePlaylist,
         deletePlaylist,
         getUserPlaylists,
         addTrack } from '../util/playlist_api_util';

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
    case ADD_TRACK:
      addTrack(action.playlistId, action.trackId);
      return next(action);
    case GET_USER_PLAYLISTS:
      getUserPlaylists(lists => dispatch(receivePlaylists(lists) ));
      return next(action);
    default:
      return next(action);
  }
};
