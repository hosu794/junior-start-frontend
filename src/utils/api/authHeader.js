let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : localStorage.getItem("oauthtoken");

export function authHeader(authenticatedUser = user) {
  if (authenticatedUser) {
    return {
      Authorization: `Bearer ${user}`,
      "Content-Type": "application/json",
    };
  } else {
    return {};
  }
}

