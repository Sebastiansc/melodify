export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const RENEW_COMMENT = 'RENEW_COMMENT';

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const renewComment = comment => ({
  type: RENEW_COMMENT,
  comment
});


export const fetchComments = (ownerUrl, songUrl) => ({
  type: FETCH_COMMENTS,
  ownerUrl,
  songUrl
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});
