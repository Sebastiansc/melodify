export const like = (songId, success) => {
  $.ajax({
    url: `api/likes/${songId}`,
    type: 'post',
    success
  });
};

export const unlike = (songId, success) => {
  $.ajax({
    url:  `api/likes/${songId}`,
    type: 'delete',
    success
  });
};
