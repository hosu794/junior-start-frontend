import { userConstants } from "../constants";
import { userService } from "../services";

import { handleError } from "../utils/api";

export const userActions = {
  getCurrentUser,
  checkUsernameAvailability,
  checkEmailAvailability,
};

function getCurrentUser(service = userService.loadUser) {
  return (dispatch) => {
    dispatch(request());

    return service().then(
      (user) => {
        dispatch(success(user.data));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request() {
    return { type: userConstants.GET_CURRENT_USER_REQUEST };
  }

  function success(user) {
    return { type: userConstants.GET_CURRENT_USER_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.GET_CURRENT_USER_FAILURE, error };
  }
}

function checkUsernameAvailability(
  username,
  service = userService.checkUsernameAvailability
) {
  return (dispatch) => {
    dispatch(request(username));

    return service(username).then(
      (response) => {
        dispatch(success(response.data.available));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request(username) {
    return { type: userConstants.CHECK_USER_AVAIBILITY_REQUEST, username };
  }

  function success(response) {
    return { type: userConstants.CHECK_USER_AVAIBILITY_SUCCESS, response };
  }

  function failure(error) {
    return { type: userConstants.CHECK_USER_AVAIBILITY_FAILURE, error };
  }
}

function checkEmailAvailability(
  email,
  service = userService.checkEmailAvaibility
) {
  return (dispatch) => {
    dispatch(request(email));

    return service(email).then(
      (response) => {
        dispatch(success(response.data.available));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request(email) {
    return { type: userConstants.CHECK_EMAIL_AVAIBILITY_REQUEST, email };
  }

  function success(response) {
    return { type: userConstants.CHECK_EMAIL_AVAIBILITY_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.CHECK_USER_AVAIBILITY_FAILURE, error };
  }
}
