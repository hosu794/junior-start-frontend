import { userConstants } from '../constants'

export function user(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_CURRENT_USER_REQUEST:
            return {
                loadingUser: true,
            };
        case userConstants.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loadingUser: false,
                loadedUser: true,
                user: action.user,
            };
        case userConstants.GET_CURRENT_USER_FAILURE:
            return {
                ...state,
                error: action.error,
                loadingUser: false,
                loadedUser: false,
            };
        case userConstants.CHECK_USER_AVAIBILITY_REQUEST:
            return {
                ...state,
                checkingUsername: true,
            };
        case userConstants.CHECK_USER_AVAIBILITY_SUCCESS:
            return {
                ...state,
                checkingUsername: false,
                checkedUsername: true,
                isUsernameAvailable: action.response,
            };
        case userConstants.CHECK_USER_AVAIBILITY_FAILURE:
            return {
                ...state,
                checkingUsername: false,
            };
        case userConstants.CHECK_EMAIL_AVAIBILITY_FAILURE:
            return {
                ...state,
                checkingEmail: false,
                error: action.error
            };
        case userConstants.CHECK_EMAIL_AVAIBILTY_REQUEST:
            return {
                ...state,
                checkingEmail: true,
            };
        case userConstants.CHECK_EMAIL_AVAIBILITY_SUCCESS:
            return {
                ...state,
                checkingEmail: false,
                checkedEmail: true,
                isEmailAvailable: action.response,
            };
        default:
            return state;
    }
}