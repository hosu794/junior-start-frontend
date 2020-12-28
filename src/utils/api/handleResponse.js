import { authenticationService } from "../../services";

export function handleResponse(error, service = authenticationService) {
  if (error.response.status === 401) {
    service.singOut();
  }

  return error;
}
