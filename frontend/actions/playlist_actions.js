export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const ADD_TRACK = "ADD_TRACK";

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

export const addTrack = (playlistId, track) => ({
  type: DELETE_PLAYLIST,
  playlistId,
  track
});
