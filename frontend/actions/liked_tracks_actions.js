export const GET_RECENT_LIKES = "GET_RECENT_LIKES";
export const RECEIVE_RECENT_LIKES = "RECEIVE_RECENT_LIKES";
export const GET_LIKES = "GET_LIKES";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const getRecentLikes = () => ({
  type: GET_RECENT_LIKES
});

export const getLikes = () => ({
  type: GET_LIKES
});

export const receiveRecentLikes = tracks => ({
  type: RECEIVE_RECENT_LIKES,
  tracks
});

export const receiveLikes = tracks => ({
  type: RECEIVE_LIKES,
  tracks
});
