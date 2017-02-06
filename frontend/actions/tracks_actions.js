export const GET_TRACKS = "GET_TRACKS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

export const getTracks = () => ({
  type: GET_TRACKS
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});
