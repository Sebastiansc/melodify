export const login = (user, success, error) => {
  $.ajax({
    url: 'auth/identity/callback',
    type: 'post',
    data: {user},
    success,
    error
  });
};

export const signup = (user, success, error) => {
  $.ajax({
    url: 'auth/identity/register',
    type: 'post',
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    url: 'api/session',
    type: 'delete',
    success,
    error
  });
};
