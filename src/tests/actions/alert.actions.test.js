import { alertActions } from '../../actions'
import { alertConstants } from '../../constants'

describe('alert actions', () => {

    it('should create an action to success', () => {
        const message = 'Some success message'
        const expectedAction = {
            type: alertConstants.SUCCESS,
            message
        }
        expect(alertActions.success(message)).toEqual(expectedAction)
    })

    it('should create an action to error', () => {
        const message = 'error message'
        const expectedAction = {
            type: alertConstants.ERROR,
            message
        }
        expect(alertActions.error(message)).toEqual(expectedAction)
    })

    it('should create an action to clear', () => {

        const expectedAction = {
            type: alertConstants.CLEAR,

        }
        expect(alertActions.clear()).toEqual(expectedAction)
    })

    it('should create an action to set', () => {

        const alert = 'alert message'

        const expectedAction = {
            type: alertConstants.SET,
            alert
        }
        expect(alertActions.set(alert)).toEqual(expectedAction)
    })

})