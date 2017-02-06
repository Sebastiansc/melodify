export const getTracks = (success, error) => {
  $.ajax({
    url: `api/songs/`,
    success,
    error
  });
};
