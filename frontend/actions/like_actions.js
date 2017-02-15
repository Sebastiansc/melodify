export const LIKE = "LIKE";
export const UNLIKE = "UNLIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const like = songId => ({
  type: "LIKE",
  songId
});

export const unlike = songId => ({
  type: "UNLIKE",
  songId
});

export const receiveLike = likeData => ({
  type: RECEIVE_LIKE,
  likeData
});
