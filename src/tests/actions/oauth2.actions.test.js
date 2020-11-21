import { oauth2Actions } from '../../actions'
import { oauth2Constants } from '../../constants';
import { mockServiceCreator } from '../../utils/tests/mockCreateorService';
import { store } from '../../utils/tests/mockStore';



describe('Test for the oauth2 actions', () => {


    const mockError = {
        message: 'err',
        response: {
            status: 401,
            data: {
                error: 'mockError',
                message: 'err'
            }
        }
    }
    const mockToken = "DSA0DAS80Ds)a*d+ad+)(d*as()+dasud)aid sa*das*d +)as("
    const tokenResponse = "dS(D_AD_)A(D)_ASD)ASD)_AD()AS)_D(AD)SA_"

    beforeEach(() => {
        store.clearActions();
    })

    test('should create an action to login, wchich be success', async () => {

        await store.dispatch(oauth2Actions.login(mockToken, mockServiceCreator(tokenResponse)))
            .then(() => expect(store.getActions()).toContainEqual(
                {
                    type: "LOGIN_OAUTH_REQUEST",
                },
                {
                    type: "LOGIN_OAUTH_SUCCESS", token: tokenResponse
                }
            ));

    })

    test('should create an action to login, which be success', async () => {
        await store.dispatch(oauth2Actions.login(mockToken, mockServiceCreator(mockError, false)))
            .then(() => expect(store.getActions()).toContainEqual(
                {
                    type: "LOGIN_OAUTH_REQUEST",
                },
                {
                    type: "LOGIN_OAUTH_FAILURE", error: mockError.response.data
                },
                {
                    type: 'ERROR', message: mockError.message
                }
            ));

    })

    test('should create an action to register', () => {
        const expectedActions = {
            type: oauth2Constants.REGISTER
        }

        expect(oauth2Actions.register()).toEqual(expectedActions)
    })

    test('should create an action to logout', async () => {
        await store.dispatch(oauth2Actions.logout(mockServiceCreator()))
            .then(() => expect(store.getActions()).toContainEqual(
                {
                    type: oauth2Constants.LOGOUT
                }
            ));

    })

})