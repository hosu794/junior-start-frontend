import { projectConstants } from "../constants";
import { projectService } from "../services";
import { handleError } from "../utils/api/handleError";

export const projectActions = {
  findAll,
  saveProject,
  updateProject,
  deleteProject,
  getByTitle,
  getByName,
};

function saveProject(project, service = projectService.saveProject) {
  return (dispatch) => {
    dispatch(request());

    return service(project).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request() {
    return { type: projectConstants.CREATE_PROJECT_REQUEST };
  }

  function success(payload) {
    return { type: projectConstants.CREATE_PROJECT_SUCCESS, payload };
  }

  function failure(error) {
    return { type: projectConstants.CREATE_PROJECT_FAILURE, error };
  }
}

function findAll(page, service = projectService.findAll) {
  return (dispatch) => {
    dispatch(request());

    return service(page).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request() {
    return { type: projectConstants.GET_ALL_PROJECT_REQUEST };
  }

  function success(payload) {
    return { type: projectConstants.GET_ALL_PROJECT_SUCCESS, payload };
  }

  function failure(error) {
    return { type: projectConstants.GET_ALL_PROJECT_FAILURE, error };
  }
}

function updateProject(project, service = projectService.updateProject) {
  return (dispatch) => {
    dispatch(request());

    return service(project).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request() {
    return { type: projectConstants.UPDATE_PROJECT_REQUEST };
  }

  function success(payload) {
    return { type: projectConstants.UPDATE_PROJECT_SUCCESS, payload };
  }

  function failure(error) {
    return { type: projectConstants.UPDATE_PROJECT_FAILURE, error };
  }
}

function deleteProject(id, service = projectService.deleteProject) {
  return (dispatch) => {
    dispatch(request(id));

    return service(id).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request() {
    return { type: projectConstants.DELETE_PROJECT_REQUEST, payload: id };
  }

  function success(response) {
    return { type: projectConstants.DELETE_PROJECT_SUCCESS, response };
  }

  function failure(error) {
    return { type: projectConstants.DELETE_PROJECT_FAILURE, error };
  }
}

function getByTitle(title, service = projectService.findByTitle) {
  return (dispatch) => {
    dispatch(request());

    return service(title).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request() {
    return { type: projectConstants.GET_BY_TITLE_REQUEST };
  }

  function success(payload) {
    return { type: projectConstants.GET_BY_TITLE_SUCCESS, payload };
  }

  function failure(error) {
    return { type: projectConstants.GET_BY_TITLE_FAILURE, error };
  }
}

function getByName(name, service = projectService.findByName) {
  return (dispatch) => {
    dispatch(request());

    return service(name).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleError(dispatch, error, failure);
      }
    );
  };

  function request() {
    return { type: projectConstants.GET_BY_NAME_REQUEST };
  }

  function success(payload) {
    return { type: projectConstants.GET_BY_NAME_SUCCESS, payload };
  }

  function failure(error) {
    return { type: projectConstants.GET_BY_NAME_FAILURE, error };
  }
}
