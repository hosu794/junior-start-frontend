import { authenticationActions } from '../actions';
import { authenticationConstants } from '../constants'

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function authentication(state = initialState, action) {
    switch (action.type) {
        case authenticationConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user,
                loading: true,
            };
        case authenticationConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
                loading: false,
            };
        case authenticationConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: action.error,
            };
        case authenticationConstants.LOGOUT:
            return {
                ...state,
                loading: false,
                loggedIn: false,
            };
        case authenticationConstants.CLEAR_ERROR:
            {
                return {
                    ...state,
                    error: null,
                };
            }
        default:
            return state;
    }
}