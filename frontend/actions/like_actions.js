export const LIKE = "LIKE";
export const UNLIKE = "UNLIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const like = songId => ({
  type: "LIKE",
  songId
});

export const unlike = songId => ({
  type: "UNLIKE",
  songId
});

export const receiveLike = track => ({
  type: RECEIVE_LIKE,
  track
});

export const removeLike = track => ({
  type: REMOVE_LIKE,
  track
});
