import { alert } from "../../reducers/alert.reducer";
import { alertConstants } from "../../constants";

describe("alert reducer", () => {
  it("should return the initial state", () => {
    expect(alert(undefined, {})).toEqual({});
  });

  it("should return the state after dispatch success", () => {
    const message = "success message";

    expect(
      alert(undefined, {
        type: alertConstants.SUCCESS,
        message,
      })
    ).toEqual({
      type: "alert-success",
      message: message,
    });
  });

  it("should return the state after dispatch error", () => {
    const message = "error message";

    expect(
      alert(undefined, {
        type: alertConstants.ERROR,
        message,
      })
    ).toEqual({
      type: "alert-danger",
      message: message,
    });
  });

  it("should return the state after dispatch clear", () => {
    expect(
      alert(
        {
          type: "alert-success",
          message: "simple message",
        },
        {
          type: alertConstants.CLEAR,
        }
      )
    ).toEqual({});
  });

  it("should return the state after dispatch clear", () => {
    expect(
      alert(
        {
          type: "alert-success",
          message: "simple message",
        },
        {
          type: alertConstants.CLEAR,
        }
      )
    ).toEqual({});
  });

  it("should return the state after dispatch set", () => {
    const alertMock = {
      type: "success",
      message: "simple message",
    };

    expect(
      alert(undefined, {
        type: alertConstants.SET,
        alert: alertMock,
      })
    ).toEqual({
      type: alertMock.type,
      message: alertMock.message,
    });
  });
});
