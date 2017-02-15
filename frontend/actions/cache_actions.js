export const CACHE_LIKE = "CACHE_LIKE";
export const CACHE_COMMENT = "CACHE_COMMENT";
export const CACHE_TRACK = "CACHE_TRACK";

export const cacheLike = like => ({
  type: "CACHE_LIKE",
  like
});

export const cacheComment = comment => ({
  type: "CACHE_COMMENT",
  comment
});

export const cacheTrack = track => ({
  type: "CACHE_TRACK",
  track
});
