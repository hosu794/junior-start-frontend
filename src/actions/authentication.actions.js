import { authenticationService } from "../services";
import { authenticationConstants } from "../constants";
import { alertActions } from "./";
import { handleError } from "../utils/api/handleError";

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
        handleError(dispatch, error, failure);
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
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        handleError(dispatch, error, failure);
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
