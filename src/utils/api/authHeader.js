let user = JSON.parse(localStorage.getItem("user"));

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

