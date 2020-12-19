import { handleResponse } from "../utils/api";
import { authenticationService } from "../services";
import { history } from "../utils";
import { authenticationConstants } from "../constants";
import { alertActions } from "./";

export const authenticationActions = {
  logout,
  signUp,
  signIn,
  clearError,
  logoutAuth02token,
};

function signIn({ email, password }, service = authenticationService.signIn) {
  return (dispatch) => {
    dispatch(request({ email, password }));

    return service({ email, password }).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.error));
        dispatch(alertActions.error(error.response.data.error));
      }
    );
  };

  function request(user) {
    return { type: authenticationConstants.SIGNIN_REQUEST, user };
  }

  function success(user) {
    return { type: authenticationConstants.SIGNIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: authenticationConstants.SIGNIN_FAILURE, error };
  }
}

function logout(service = authenticationService.singOut) {
  service();
  return {
    type: authenticationConstants.SIGN_OUT,
  };
}

function logoutAuth02token(service = authenticationService.logoutAuth02token) {
  service();
  return {
    type: authenticationConstants.SIGN_OUT,
  };
}

function signUp(user, service = authenticationService.signUp) {
  return (dispatch) => {
    dispatch(request(user));

    return service(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        window.location.reload(true);
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(user) {
    return { type: authenticationConstants.SIGNUP_REQUEST, user };
  }

  function success(user) {
    return { type: authenticationConstants.SIGNUP_SUCCESS, user };
  }

  function failure(error) {
    return { type: authenticationConstants.SIGNUP_FAILURE, error };
  }
}

function clearError() {
  return { type: authenticationConstants.CLEAR_ERROR };
}
