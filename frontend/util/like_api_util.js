export const like = songId => {
  $.ajax({
    url: `api/likes/${songId}`,
    type: 'post',
  });
};

export const unlike = songId => {
  $.ajax({
    url:  `api/likes/${songId}`,
    type: 'delete',
  });
};
