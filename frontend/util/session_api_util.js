export const signup = user => {
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: user
  });
};

export const login = user => {
  $.ajax({
    url: "/api/sessions",
    method: "POST",
    data: user
  });
};

export const logout = () => {
  $.ajax({
    url: "/api/sessions",
    method: "DELETE"
  });
};
