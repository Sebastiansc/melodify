export const createSong = (song, success, error) => {
  $.ajax({
    url: 'api/songs',
    type: 'post',
    data: {song},
    success,
    error
  });
};

export const getSongs = (success, error) => {
  $.ajax({
    url: `api/songs/`,
    success,
    error
  });
};

export const getSong = (username, title, success, error) => {
  $.ajax({
    url: `api/songs/${username}/${title}`,
    success,
    error
  });
};
