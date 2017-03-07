export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const ADD_TRACK = "ADD_TRACK";
export const TOGGLE_PLAYLIST_MODAL = "TOGGLE_PlAYLIST_MODAL";
export const GET_USER_PLAYLISTS = "GET_USER_PLAYLISTS";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";

export const createPlaylist = (playlist, tracks) => ({
  type: CREATE_PLAYLIST,
  playlist,
  tracks
});

export const updatePlaylist = playlist => ({
  type: UPDATE_PLAYLIST,
  playlist,
});

export const deletePlaylist = playlistId => ({
  type: DELETE_PLAYLIST,
  playlistId
});

export const addTrack = (playlistId, trackId) => ({
  type: ADD_TRACK,
  playlistId,
  trackId
});

export const toggleModal = track => ({
  type: TOGGLE_PLAYLIST_MODAL,
  track
});

export const getUserPlaylists = () => ({
  type: GET_USER_PLAYLISTS,
});

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});
