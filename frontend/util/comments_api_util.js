export const postComment = (comment, success) => {
  $.ajax({
    type: 'post',
    url: '/api/comments',
    data: {comment},
    success
  });
};

export const deleteComment = (id, success) => {
  $.ajax({
    type: 'delete',
    url: `/api/comments/${id}`,
    success
  });
};

export const patchComment = (comment, success) => {
  $.ajax({
    type: 'patch',
    url: `/api/comments/${comment.id}`,
    data: {comment},
    success
  });
};

export const getComments = (ownerUrl, songUrl, success) => {
  $.ajax({
    url: `/api/comments/${ownerUrl}/${songUrl}`,
    success
  });
};
