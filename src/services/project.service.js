import axios from "axios";
import { apiConstants } from "../constants";
import { authHeader } from "../utils/api/authHeader";

import request from "../utils/api/request";

export const projectService = {
  findById,
  findAll,
  saveProject,
  updateProject,
  deleteProject,
  findByTitle,
  findByName,
};

function findAll(page) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/project?page=${page}`,
    method: "GET",
  });
}

function saveProject(project) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/project`,
    body: JSON.stringify(project),
    method: "POST",
  });
}

function updateProject(updateRequest, id) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/project/${id}`,
    method: "PUT",
    body: JSON.stringify(updateRequest),
  });
}

function deleteProject(id) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/project/${id}`,
    method: "DELETE",
  });
}

function findByTitle(title) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/project/title/${title}`,
    method: "GET",
  });
}

function findById(id) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/project/${id}`,
    method: "GET",
  });
}

function findByName(name) {
  return request({
    url: `${apiConstants.API_ENDOINT}/api/project/name/${name}`,
    method: "GET",
  });
}
