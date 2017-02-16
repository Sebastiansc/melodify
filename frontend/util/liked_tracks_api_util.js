export const recentLikes = success => {
  $.ajax({
    url:  `api/likes/recent`,
    success
  });
};

export const getLikes = success => {
  $.ajax({
    url:  `api/likes`,
    success
  });
};
