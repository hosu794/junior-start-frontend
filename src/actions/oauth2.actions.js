import { FiberPinRounded } from "@material-ui/icons"
import { oauth2Constants } from "../constants"
import { oauth2Service } from '../services'
import { handleResponse } from "../utils/api"
import { alertActions } from "./alert.actions"
import { userActions } from "./user.actions"

export const oauth2Actions = {
    login, logout, register
}

function login(token, service = oauth2Service.setToken) {
    return dispatch => {
        dispatch(request())

        return service(token)
            .then(response => {
                dispatch(success(response))
                window.location.reload(true)

            }
                , (error) => {
                    handleResponse(error);
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));

                })
    }

    function request() {
        return { type: oauth2Constants.LOGIN_OAUTH_REQUEST }
    }

    function success(token) {
        return { type: oauth2Constants.LOGIN_OAUTH_SUCCESS, token }
    }

    function failure(error) {
        return { type: oauth2Constants.LOGIN_OAUTH_FAILURE, error }
    }
}

function register() {
    return { type: oauth2Constants.REGISTER }
}

function logout(service = oauth2Service.logout) {
    return dispatch => {
        return service().then(() => {
            dispatch(success())
        })
    }

    function success() {
        return { type: oauth2Constants.SIGN_OUT }
    }
}

