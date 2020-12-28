import { authenticationConstants } from "../constants";

export function registering(state = {}, action) {
  switch (action.type) {
    case authenticationConstants.SIGNUP_REQUEST:
      return {
        ...state,
        registering: true,
      };
    case authenticationConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        registering: false,
      };
    case authenticationConstants.SIGNUP_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.error,
      };
    default:
      return state;
  }
}
