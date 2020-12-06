import { userActions } from '../../actions'
import { mockServiceCreator } from '../../utils/tests/mockCreateorService';
import { store } from '../../utils/tests/mockStore';

describe('Test for the user actions', () => {

    const response = {
        data: {
            available: true
        }
    }

    const emailRequest = 'email@example.com'

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

    const userResponse = {
        username: 'username'
    }

    beforeEach(() => {
        store.clearActions();
    })


    test("should create an action to getCurrentUser, wchich be success", async () => {

        await store.dispatch(userActions.getCurrentUser(mockServiceCreator(userResponse)))
            .then(() => expect(store.getActions()).toContainEqual(
                {
                    type: "GET_CURRENT_USER_REQUEST"
                },
                {
                    type: "GET_CURRENT_USER_SUCCESS", user: userResponse
                }
            ));

    })

    test("should create an action to getCurrentUser, wchich be failure", async () => {


        await store.dispatch(userActions.getCurrentUser(mockServiceCreator(mockError, false)))
            .then(() => expect(store.getActions()).toContainEqual(
                {
                    type: "GET_CURRENT_USER_REQUEST"
                },
                {
                    type: "GET_CURRENT_USER_SUCCESS", error: mockError
                }
            ));

    })

    test("should create an action to checkUsernameAvailability, wchich be success", async () => {

        await store.dispatch(userActions.checkUsernameAvailability(userResponse, mockServiceCreator(response)))
            .then(() => expect(store.getActions()).toContainEqual(
                {
                    type: "CHECK_USER_AVAIBILITY_REQUEST", username: userResponse
                },
                {
                    type: "CHECK_USER_AVAIBILITY_SUCCESS", response: true
                }
            ));

    })

    test("should create an action to checkUsernameAvailability, wchich be failure", async () => {

        await store.dispatch(userActions.checkUsernameAvailability(userResponse, mockServiceCreator(mockError, false)))
            .then(() => expect(store.getActions()).toContainEqual(
                {
                    type: "CHECK_USER_AVAIBILITY_REQUEST", username: userResponse
                },
                {
                    type: "CHECK_USER_AVAIBILITY_FAILURE", error: mockError
                }
            ));

    })

    test("should create an action to checkEmailAvailability, wchich be success", async () => {



        await store.dispatch(userActions.checkEmailAvailability(emailRequest, mockServiceCreator(response)))
            .then(() => expect(store.getActions()).toContainEqual(
                {
                    type: "CHECK_EMAIL_AVAIBILITY_REQUEST", email: emailRequest
                },
                {
                    type: "CHECK_EMAIL_AVAIBILITY_SUCCESS", response: true

                }
            ));



    })

})