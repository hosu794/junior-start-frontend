import { authenticationActions } from '../actions';
import { authenticationConstants } from '../constants'

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function authentication(state = initialState, action) {
    switch (action.type) {
        case authenticationConstants.SIGNIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user,
                loading: true,
            };
        case authenticationConstants.SIGNIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
                loading: false,
            };
        case authenticationConstants.SIGNIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: action.error,
            };
        case authenticationConstants.SIGN_OUT:
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