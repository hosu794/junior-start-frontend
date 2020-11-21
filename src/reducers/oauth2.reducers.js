import { Satellite } from '@material-ui/icons';
import { oauth2Constants } from '../constants'

export function oauth2(state = {}, action) {
    switch (action.type) {
        case oauth2Constants.LOGIN_OAUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case oauth2Constants.LOGIN_OAUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true
            }
        case oauth2Constants.LOGIN_OAUTH_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
            }
        case oauth2Constants.LOGOUT:
            return {
                ...state,
                loggedIn: false
            }
        case oauth2Constants.REGISTER:
            return {
                ...state,
                registered: true
            }
        default:
            return state;
    }
}
