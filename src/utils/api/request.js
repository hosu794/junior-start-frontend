const isTokenExist =
  JSON.parse(localStorage.getItem("user")) ||
  localStorage.getItem("oauthtoken");

let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : localStorage.getItem("oauthtoken");

const request = (options) => {
  const headers = new Headers();

  if (options.setContentType !== false) {
    headers.append("Content-Type", "application/json");
  }

  if (isTokenExist) {
    headers.append("Authorization", "Bearer " + user);
  }

  const defaults = { headers: headers };

  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    })
  );
};

export default request;
