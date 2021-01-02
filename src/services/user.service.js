import { apiConstants } from "../constants";

import request from "../utils/api/request";

export const userService = {
  loadUser,
  checkEmailAvaibility,
  getUserProfile,
  checkUsernameAvailability,
};

function loadUser() {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/user/me`,
    method: "GET",
  });
}

function checkEmailAvaibility(email) {
  return request({
    url: `${apiConstants.API_URL}/api/user/checkEmailAvailability`,
    body: JSON.stringify({ email }),
    method: "POST",
  });
}

function checkUsernameAvailability(username) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/user/checkUsernameAvailability`,
    method: "POST",
    body: JSON.stringify({ username }),
  });
}

function getUserProfile(username) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/user/${username}`,
    method: "GET",
  });
}
