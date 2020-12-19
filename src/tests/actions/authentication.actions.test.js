import { authenticationActions } from "../../actions";
import { mockError } from "../../utils/tests";
import { mockServiceCreator } from "../../utils/tests/mockCreateorService";
import { store } from "../../utils/tests/mockStore";

describe("Test for the authentication actions", () => {
  const loginCredentials = {
    email: "example@example.com",
    password: "password",
  };

  const tokenResponse = {
    token: "d8s&DAShds80d7sAD*)SAHJDISA&D*SADSAD&AS*DASJDA)Isd9dsaD*A)S(d8",
  };

  const signUpCredentials = {
    username: "username",
    password: "password",
  };

  const signUpResponse = {
    message: "success",
  };

  beforeEach(() => {
    store.clearActions();
  });

  test("should create an action to signIn, which be success", async () => {
    await store
      .dispatch(
        authenticationActions.signIn(
          loginCredentials,
          mockServiceCreator(tokenResponse)
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEqual(
          {
            type: "SIGNIN_REQUEST",
            user: loginCredentials,
          },
          {
            type: "SIGNIN_SUCCESS",
            user: tokenResponse,
          }
        )
      );
  });

  test("should create an action to login, which be failure", async () => {
    await store
      .dispatch(
        authenticationActions.signIn(
          loginCredentials,
          mockServiceCreator(mockError, false)
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEqual(
          {
            type: "SIGNIN_REQUEST",
            user: { email: "example@example.com", password: "password" },
          },
          { error: "mockError", type: "SIGNIN_FAILURE" },
          { message: "mockError", type: "ERROR" }
        )
      );
  });

  test("should create an action to register, which be success", async () => {
    await store
      .dispatch(
        authenticationActions.signUp(
          signUpCredentials,
          mockServiceCreator(signUpResponse)
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEqual(
          {
            type: "SIGNUP_REQUEST",
            user: signUpCredentials,
          },
          {
            type: "SIGNUP_SUCCESS",
            user: signUpResponse,
          }
        )
      );
  });

  test("should create an action to register, which be failure", async () => {
    await store
      .dispatch(
        authenticationActions.signUp(
          signUpCredentials,
          mockServiceCreator(mockError, false)
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEqual(
          {
            type: "SIGNUP_REQUEST",
            user: { username: "username", password: "password" },
          },
          { type: "SIGNUP_FAILURE", error: "err" },
          { type: "ERROR", message: "err" }
        )
      );
  });

  test("should create an action to SIGN_OUT", async () => {
    const expectedAction = {
      type: "SIGN_OUT",
    };
    expect(authenticationActions.logout()).toEqual(expectedAction);
  });

  test("should create an action to clear error", async () => {
    const expectedAction = {
      type: "CLEAR_ERROR",
    };
    expect(authenticationActions.clearError()).toEqual(expectedAction);
  });
});
