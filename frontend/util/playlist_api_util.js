// tracks: array of track ids to add to playlist
export const createPlaylist = (playlist, tracks) => {
  $.ajax({
    url: 'api/playlists',
    data: {playlist, tracks},
    type: 'post'
  });
};

export const updatePlaylist = playlist => {
  $.ajax({
    url: `api/playlists/${playlist.id}`,
    data: {playlist},
    type: 'patch'
  });
};

export const deletePlaylist = playlistId => {
  $.ajax({
    url: `api/playlists/${playlistId}`,
    type: 'delete'
  });
};

export const addTrack = (playlistId, trackId) => {
  $.ajax({
    url: `api/playlists/${playlistId}/${trackId}`,
    type: 'post'
  });
};
