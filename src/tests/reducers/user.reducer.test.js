import { user } from "../../reducers/user.reducer";
import { userConstants } from "../../constants";

describe("user reducer", () => {
  const mockError = new Error();
  const mockResponse = {
    message: "success",
  };

  it("should return the initial state", () => {
    expect(user(undefined, {})).toEqual({
      checkingEmail: true,
    });
  });

  it("should return the state after GET_CURRENT_USER_REQUEST", () => {
    expect(
      user(
        {},
        {
          type: userConstants.GET_CURRENT_USER_REQUEST,
        }
      )
    ).toEqual({
      loadingUser: true,
    });
  });

  it("should return the state after GET_CURRENT_USER_SUCCESS", () => {
    expect(
      user(undefined, {
        type: userConstants.GET_CURRENT_USER_SUCCESS,
        user: { username: "username" },
      })
    ).toEqual({
      user: { username: "username" },
      loadedUser: true,
      loadingUser: false,
    });
  });

  it("should return the state after GET_CURRENT_USER_FAILURE", () => {
    expect(
      user(
        {
          loadedUser: true,
          loadingUser: false,
        },
        {
          type: userConstants.GET_CURRENT_USER_FAILURE,
          error: mockError,
        }
      )
    ).toEqual({
      error: mockError,
      loadingUser: false,
      loadedUser: false,
    });
  });

  it("should return the state after CHECK_USER_AVAIBILITY_REQUEST", () => {
    expect(
      user(undefined, {
        type: userConstants.CHECK_USER_AVAIBILITY_REQUEST,
      })
    ).toEqual({
      checkingUsername: true,
    });
  });

  it("should return the state after CHECK_USER_AVAIBILITY_SUCCESS", () => {
    expect(
      user(undefined, {
        type: userConstants.CHECK_USER_AVAIBILITY_SUCCESS,
        response: mockResponse,
      })
    ).toEqual({
      checkingUsername: false,
      checkedUsername: true,
      isUsernameAvailable: mockResponse,
    });
  });

  it("should return the state after CHECK_USER_AVAIBILITY_FAILURE", () => {
    expect(
      user(undefined, {
        type: userConstants.CHECK_EMAIL_AVAIBILITY_FAILURE,
        error: mockError,
      })
    ).toEqual({
      checkingEmail: false,
      error: mockError,
    });
  });

  it("should return the state after CHECK_EMAIL_AVAIBILTY_REQUEST", () => {
    expect(
      user(undefined, {
        type: userConstants.CHECK_EMAIL_AVAIBILTY_REQUEST,
      })
    ).toEqual({
      checkingEmail: true,
    });
  });

  it("should return the state after CHECK_EMAIL_AVAIBILITY_SUCCESS", () => {
    expect(
      user(undefined, {
        type: userConstants.CHECK_EMAIL_AVAIBILITY_SUCCESS,
        response: mockResponse,
      })
    ).toEqual({
      checkingEmail: false,
      checkedEmail: true,
      isEmailAvailable: mockResponse,
    });
  });

  it("should return the state after CHECK_EMAIL_AVAIBILITY_FAILURE", () => {
    expect(
      user(undefined, {
        type: userConstants.CHECK_EMAIL_AVAIBILITY_FAILURE,
        error: mockError,
      })
    ).toEqual({
      checkingEmail: false,
      error: mockError,
    });
  });
});
