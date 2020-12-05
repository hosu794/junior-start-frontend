export const API_BASE_URL = "https://junior-start-backend.herokuapp.com";


export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

export const GOOGLE_AUTH_URL =
    API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL =
    API_BASE_URL +
    "/oauth2/authorize/facebook?redirect_uri=" +
    OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL =
    API_BASE_URL + "/oauth2/authorize/github?redirect_uri=" + OAUTH2_REDIRECT_URI;

export const oauth2Constants = {
    REGISTER: "REGISTER",
    LOGIN_OAUTH_REQUEST: "LOGIN_OAUTH_REQUEST",
    LOGIN_OAUTH_SUCCESS: "LOGIN_OAUTH_SUCCESS",
    LOGIN_OAUTH_FAILURE: "LOGIN_OAUTH_FAILURE",
    SIGN_OUT: "SIGN_OUT"
}