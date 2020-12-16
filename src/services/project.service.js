import axios from "axios";
import { apiConstants } from "../constants";
import { authHeader } from "../utils/api/authHeader";

export const projectService = {
  findAll,
  saveProject,
  updateProject,
  deleteProject,
  findByTitle,
  findByName,
};

function findAll(page) {
  return axios.get(`${apiConstants.API_ENDOINT}/api/project?page=${page}`, {});
}

function saveProject(project) {
  return axios.post(`${apiConstants.API_ENDOINT}/api/project`, project, {
    headers: authHeader(),
  });
}

function updateProject(updateRequest) {
  const body = JSON.stringify(updateProject);

  return axios.put(`${apiConstants.API_ENDOINT}/api/project`, body, {
    headers: authHeader(),
  });
}

function deleteProject(id) {
  return axios.delete(`${apiConstants.API_ENDOINT}/api/project/${id}`, {
    headers: authHeader(),
  });
}

function findByTitle(title) {
  return axios.get(`${apiConstants.API_ENDOINT}/api/project/title/${title}`);
}

function findByName(name) {
  return axios.get(`${apiConstants.API_ENDOINT}/api/project/name/${name}`);
}
