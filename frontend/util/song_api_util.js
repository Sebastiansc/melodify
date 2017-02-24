export const createSong = (song) => {
  $.ajax({
    url: 'api/songs',
    type: 'post',
    data: {song},
  });
};

export const getSong = (ownerUrl, songUrl, success, error) => {
  $.ajax({
    url: `api/songs/${ownerUrl}/${songUrl}`,
    success,
    error
  });
};

export const recordPlay = (songId, success) => {
  $.ajax({
    url: `api/plays/${songId}`,
    type: 'post',
    success
  });
};
