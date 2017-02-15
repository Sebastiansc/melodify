export const createSong = (song) => {
  $.ajax({
    url: 'api/songs',
    type: 'post',
    data: {song},
  });
};

export const getSong = (username, title, success, error) => {
  $.ajax({
    url: `api/songs/${username}/${title}`,
    success,
    error
  });
};

export const recordPlay = (songId, success) => {
  $.ajax({
    url: `api/songs/played/${songId}`,
    type: 'post'
  });
};
