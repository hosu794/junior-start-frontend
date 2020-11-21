import { authHeader, handleResponse } from '../utils/api'
import { authenticationService } from '../services'
import { history } from '../utils'
import { authenticationConstants } from '../constants'
import { alertActions } from './'

export const authenticationActions = {
    logout,
    register,
    login,
    clearError,
    logoutAuth02token
};

function login({ email, password }, service = authenticationService.login) {



    return (dispatch) => {
        dispatch(request({ email, password }));

        return service({ email, password }).then(
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
        return { type: authenticationConstants.SIGNIN_REQUEST, user };
    }

    function success(user) {
        return { type: authenticationConstants.SIGNIN_SUCCESS, user };
    }

    function failure(error) {
        return { type: authenticationConstants.SIGNIN_FAILURE, error };
    }
}

function logout(service = authenticationService.logout) {

    service();
    window.location.reload(true);
    return {
        type: authenticationConstants.LOGOUT,
    };
}

function logoutAuth02token(service = authenticationService.logoutAuth02token) {
    service();
    window.location.reload(true)
    return {
        type: authenticationConstants.LOGOUT
    }
}

function register(user, service = authenticationService.register) {

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
