export const recentPlays = success => {
  $.ajax({
    url:  `api/plays/recent`,
    success
  });
};

export const getPlays = success => {
  $.ajax({
    url:  `api/plays`,
    success
  });
};
