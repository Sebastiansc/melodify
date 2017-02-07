export const PLAYING = "PLAYING";

export const playing = (songId, tracks) => ({
  type: PLAYING,
  songId,
  tracks
});
