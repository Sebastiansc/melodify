export const NOW_PLAYING = "NOW_PLAYING";
export const PAUSE = "PAUSE";
export const PLAY = "PLAY";
export const NEXT = "NEXT";
export const RECORD_PLAY = "RECORD_PLAY";
export const RECEIVE_PLAY = "RECEIVE_PLAY";

export const nowPlaying = (songId, tracks) => ({
  type: NOW_PLAYING,
  songId,
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


export const receivePlay = songId => ({
  type: RECEIVE_PLAY,
  songId
});
