import { authHeader } from "../utils/api/authHeader";

import { apiConstants } from "../constants";

import axios from "axios";

export const userService = {
  loadUser,
  checkEmailAvaibility,
  getUserProfile,
  checkUsernameAvailability,
};

function loadUser() {
  return axios.get(`${apiConstants.API_ENDOINT}/api/user/me`, {
    headers: authHeader(),
  });
}

function checkEmailAvaibility(email) {
  const body = JSON.stringify({ email });

  return axios.post(
    `${apiConstants.API_URL}/api/user/checkEmailAvailability`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function checkUsernameAvailability(username) {
  const body = JSON.stringify({ username });

  return axios.post(
    `${apiConstants.API_URL}/api/user/checkUsernameAvailability`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function getUserProfile(username) {
  return axios.get(
    `${apiConstants.API_URL}/api/user/${username}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
