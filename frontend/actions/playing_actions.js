export const NOW_PLAYING = "NOW_PLAYING";
export const PAUSE = "PAUSE";

export const nowPlaying = (songId, tracks) => ({
  type: NOW_PLAYING,
  songId,
  tracks,
});

export const pause = () => ({
  type: PAUSE,
});
