import { alertActions } from "../../actions/alert.actions";
import { handleResponse } from "./handleResponse";

export function handleError(dispatch, error, failure) {
  const isCorrectValues =
    typeof dispatch === "function" && typeof failure === "function";

  if (isCorrectValues) {
    handleResponse(error);
    dispatch(failure(error.response.data.message));
    dispatch(alertActions.error(error.response.data.message));
  }
}
