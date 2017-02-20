export const createSong = (song) => {
  $.ajax({
    url: 'api/songs',
    type: 'post',
    data: {song},
  });
};

export const getSong = (songId, success, error) => {
  $.ajax({
    url: `api/songs/${songId}`,
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
