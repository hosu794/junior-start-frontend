import {authHeader} from '../utils/api'
import {apiConstants} from  '../constants'

import axios from 'axios'

export const authenticationService = {
    login, register, logout
}


function login({email , password}) {
    const body = JSON.stringify({email, password})

    return axios
    .post(`${apiConstants.API_ENDOINT}/auth/signin`, body, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((user) => {
        localStorage.setItem("user", JSON.stringify(user.data.accessToken));

        return user;
    });
}

function register(user) {
    const body = JSON.stringify(user);

    return axios.post(
        `${apiConstants.API_ENDOINT}/auth/signup`, body, {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}

function logout() {
    localStorage.removeItem("user");
}