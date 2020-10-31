import { autnenticationConstants } from '../constants'

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function authentication(state = initialState, action) {
    switch (action.type) {
        case autnenticationConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user,
                loading: true,
            };
        case autnenticationConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
                loading: false,
            };
        case autnenticationConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: action.error,
            };
        case autnenticationConstants.LOGOUT:
            return {
                ...state,
                loading: false,
                loggedIn: false,
            };
        case autnenticationConstants.CLEAR_ERROR:
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