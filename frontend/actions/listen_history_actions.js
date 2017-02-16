export const GET_RECENT_PLAYS = "GET_RECENT_PLAYS";
export const GET_PLAYS = "GET_PLAYS";
export const RECEIVE_PLAYS = "RECEIVE_PLAYS";

export const getRecentPlays = () => ({
  type: GET_RECENT_PLAYS
});

export const getPlays = () => ({
  type: GET_PLAYS
});

export const receivePlays = () => ({
  type: RECEIVE_PLAYS
});
