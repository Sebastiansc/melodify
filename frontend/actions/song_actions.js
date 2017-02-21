export const CREATE_SONG = "CREATE_SONG";
export const GET_SONG = "GET_SONG";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const CLEAR_SONG = "CLEAR_SONG";

export const createSong = song => ({
  type: CREATE_SONG,
  song
});

export const getSong = songId => ({
  type: GET_SONG,
  songId,
});

export const clearSong = () => ({
  type: CLEAR_SONG,
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});
