import { apiConstants } from "../constants";

import axios from "axios";

import request from "../utils/api/request";

export const authenticationService = {
  signIn,
  signUp,
  singOut,
  logoutAuth02token,
};

function signIn({ email, password }) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/auth/signin`,
    method: "POST",
    body: JSON.stringify({ email, password }),
  }).then((user) => {
    localStorage.setItem("user", JSON.stringify(user.accessToken));

    return user;
  });
}

function signUp(user) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/auth/signup`,
    method: "POST",
    body: JSON.stringify(user),
  });
}

function singOut() {
  localStorage.removeItem("user");
}

function logoutAuth02token() {
  localStorage.removeItem("oauthtoken");
}
