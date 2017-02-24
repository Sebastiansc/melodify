export const NOW_PLAYING = "NOW_PLAYING";
export const PAUSE = "PAUSE";
export const PLAY = "PLAY";
export const NEXT = "NEXT";
export const RECORD_PLAY = "RECORD_PLAY";
export const RECEIVE_PLAY = "RECEIVE_PLAY";
export const RECORD_PROGRESS = "RECORD_PROGRESS";
export const GET_PROGRESS = "GET_PROGRESS";
export const CLEAR_PROGRESS = "CLEAR_PROGRESS";

export const nowPlaying = (songUrl, tracks) => ({
  type: NOW_PLAYING,
  songUrl,
  tracks,
});

export const pause = () => ({
  type: PAUSE,
});

export const play = () => ({
  type: PLAY,
});

export const next = idx => ({
  type: NEXT,
  idx
});

export const recordPlay = songId => ({
  type: RECORD_PLAY,
  songId
});


export const receivePlay = track => ({
  type: RECEIVE_PLAY,
  track
});

export const recordProgress = (position, updater) => ({
  type: RECORD_PROGRESS,
  position,
  updater
});

export const getProgress = () => ({
  type: GET_PROGRESS,
});

export const clearProgress = () => ({
  type: CLEAR_PROGRESS,
});
