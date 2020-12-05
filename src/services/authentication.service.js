import { authHeader } from '../utils/api'
import { apiConstants } from '../constants'

import axios from 'axios'

export const authenticationService = {
    signIn, signUp, singOut, logoutAuth02token
}


function signIn({ email, password }) {
    const body = JSON.stringify({ email, password })

    return axios
        .post(`${apiConstants.API_ENDOINT}/api/auth/signin`, body, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((user) => {

            localStorage.setItem("user", JSON.stringify(user.data.accessToken));

            return user;
        });
}

function signUp(user) {


    const body = JSON.stringify(user);

    return axios.post(
        `${apiConstants.API_ENDOINT}/api/auth/signup`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    }
    )
}

function singOut() {

    localStorage.removeItem("user");


}

function logoutAuth02token() {
    localStorage.removeItem("oauthtoken")
}