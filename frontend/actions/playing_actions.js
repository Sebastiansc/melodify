export const NOW_PLAYING = "NOW_PLAYING";
export const PAUSE = "PAUSE";
export const PLAY = "PLAY";

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
