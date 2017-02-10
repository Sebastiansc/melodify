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
