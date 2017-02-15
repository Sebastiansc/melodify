export const like = songId => {
  $.ajax({
    url: 'api/likes',
    type: 'post',
    data: {songId}
  });
};

export const unlike = songId => {
  $.ajax({
    url: 'api/likes',
    type: 'delete',
    data: {songId}
  });
};
