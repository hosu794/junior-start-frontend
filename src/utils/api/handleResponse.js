import { authenticationService } from "../../services";

export function handleResponse(error, service = authenticationService) {
  console.log(error);
  if (error.status === 401) {
    service.singOut();
  }

  return error;
}
