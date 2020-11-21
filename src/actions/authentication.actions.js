import { authHeader, handleResponse } from '../utils/api'
import { authenticationService } from '../services'
import { history } from '../utils'
import { authenticationConstants } from '../constants'
import { alertActions } from './'

export const authenticationActions = {
    logout,
    register,
    login,
    clearError
};

function login({ usernameOrEmail, password }, service = authenticationService.login) {
    return (dispatch) => {
        dispatch(request({ usernameOrEmail, password }));

        return service({ usernameOrEmail, password }).then(
            (user) => {
                dispatch(success(user));
                history.push("/");
                window.location.reload(true);
            },
            (error) => {
                handleResponse(error);
                dispatch(failure(error.response.data.error));
                dispatch(alertActions.error(error.response.data.error));
            }
        );
    };

    function request(user) {
        return { type: authenticationConstants.LOGIN_REQUEST, user };
    }

    function success(user) {
        return { type: authenticationConstants.LOGIN_SUCCESS, user };
    }

    function failure(error) {
        return { type: authenticationConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    authenticationService.logout();

    return {
        type: authenticationConstants.LOGOUT,
    };
}

function register(user, service = authenticationService.register) {
    return (dispatch) => {
        dispatch(request(user));

        console.log("Some");
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
        return { type: authenticationConstants.REGISTER_REQUEST, user };
    }

    function success(user) {
        return { type: authenticationConstants.REGISTER_SUCCESS, user };
    }

    function failure(error) {
        return { type: authenticationConstants.REGISTER_FAILURE, error };
    }
}


function clearError() {
    return { type: authenticationConstants.CLEAR_ERROR };
}
