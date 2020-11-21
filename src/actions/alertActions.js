import { alertContants } from '../constants'

export const alertActions = {
    success, error, clear, set
}


function success(message) {
    return { type: alertContants.SUCCESS, message }
}

function error(message) {
    return { type: alertContants.ERROR, message }
}

function clear() {
    return { type: alertContants.CLEAR }
}

function set(alert) {
    return { type: alertContants.SET, alert }
}