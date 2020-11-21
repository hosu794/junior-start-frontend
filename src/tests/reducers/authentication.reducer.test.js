import { authentication } from '../../reducers/authentication.reducer'
import { authenticationConstants } from '../../constants'

describe('authentication reducer', () => {

    const mockUser = {
        username: 'username'
    }

    const mockError = new Error;

    it('should return the initial state', () => {
        expect(authentication(undefined, {})).toEqual({
            loggedIn: false
        })
    })

    it('should return state after dispatch SIGNIN_REQUEST', () => {

        expect(authentication(undefined, {
            type: authenticationConstants.SIGNIN_REQUEST,
            user: mockUser
        })).toEqual({
            loading: true,
            loggingIn: true,
            user: mockUser
        })

    })

    it('should return state after SIGNIN_SUCCESS', () => {
        expect(authentication(undefined, {
            type: authenticationConstants.SIGNIN_SUCCESS,
            user: mockUser
        })).toEqual({
            loggedIn: true,
            user: mockUser,
            loading: false,
        })
    })

    it('should return state after SIGNIN_FAILURE', () => {
        expect(authentication(undefined, {
            type: authenticationConstants.SIGNIN_FAILURE,
            error: mockError
        })).toEqual({
            loggedIn: false,
            error: mockError,
            loading: false,
        })
    })

    it('should return state after LOGOUT', () => {
        expect(authentication(undefined, {
            type: authenticationConstants.LOGOUT,
        })).toEqual({
            loading: false,
            loggedIn: false,
        })
    })

    it('should return state after CLEAN_ERROR', () => {
        expect(authentication({
            error: mockError,
            loading: false,
            user: mockUser
        }, {
            type: authenticationConstants.CLEAR_ERROR,
        })).toEqual({
            error: null,
            loading: false,
            user: mockUser
        })
    })

})