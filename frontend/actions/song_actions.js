export const CREATE_SONG = "CREATE_SONG";
export const GET_SONG = "GET_SONG";

export const createSong = song => ({
  type: CREATE_SONG,
  song
});

export const getSong = (username, title) => ({
  type: CREATE_SONG,
  username,
  title
});
