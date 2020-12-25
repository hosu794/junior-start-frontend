import { project } from "../../reducers/project.reducer";
import { projectConstants } from "../../constants";
import {
  mockCreatedProjectResponse,
  mockError,
  mockProject,
  mockUpdatedProjectResponse,
  projectContentResponse,
  projectUpdatedContent,
} from "../../utils/tests";

describe("project reducer", () => {
  const projectInitialState = {
    projects: [],
    loading: false,
    saved: false,
    size: 0,
    totalElement: 0,
    last: false,
    page: 0,
    created: false,
  };

  const stateWithProjects = {
    projects: [
      {
        id: 12,
        name: "name",
        title: "title",
      },
      {
        id: 32,
        name: "name",
        title: "title",
      },
      {
        id: 33,
        name: "name",
        title: "title",
      },
    ],
    loading: false,
    saved: false,
    size: 10,
    totalElement: 6,
    last: true,
    page: 1,
    created: false,
  };

  it("should return the initial state", () => {
    expect(project(undefined, {})).toEqual(projectInitialState);
  });

  it("should return the state after GET_ALL_PROJECT_REQUEST action", () => {
    expect(
      project(projectInitialState, {
        type: projectConstants.GET_ALL_PROJECT_REQUEST,
      })
    ).toEqual({
      ...projectInitialState,
      loading: true,
    });
  });

  it("should return the state after GET_ALL_PROJECT_SUCCESS action", () => {
    expect(
      project(projectInitialState, {
        type: projectConstants.GET_ALL_PROJECT_SUCCESS,
        payload: projectContentResponse,
      })
    ).toEqual({
      ...projectInitialState,
      loading: false,
      page: 1,
      projects: projectContentResponse.content,
      size: projectContentResponse.size,
      totalElement: projectContentResponse.totalElement,
      last: !projectContentResponse.last,
    });
  });

  it("should return the state after GET_ALL_PROJECT_FAILURE action", () => {
    expect(
      project(projectInitialState, {
        type: projectConstants.GET_ALL_PROJECT_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...projectInitialState,
      loading: false,
      error: mockError,
    });
  });

  it("should return the state after DELETE_PROJECT_REQUEST action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.DELETE_PROJECT_REQUEST,
        payload: 12,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: true,
      projects: [
        {
          id: 32,
          name: "name",
          title: "title",
        },
        {
          id: 33,
          name: "name",
          title: "title",
        },
      ],
    });
  });

  it("should return the state after DELETE_PROJECT_SUCCESS action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.DELETE_PROJECT_SUCCESS,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: false,
    });
  });

  it("should return the state after DELETE_PROJECT_FAILURE action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.DELETE_PROJECT_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...stateWithProjects,
      error: mockError,
    });
  });

  it("should return the state after GET_BY_TITLE_REQUEST action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.GET_BY_TITLE_REQUEST,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: true,
    });
  });

  it("should return the state after GET_BY_TITLE_SUCCESS action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.GET_BY_TITLE_SUCCESS,
        payload: mockProject,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: false,
      currentItem: mockProject,
    });
  });

  it("should return the state after GET_BY_TITLE_FAILURE action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.GET_BY_TITLE_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: false,
      error: mockError,
    });
  });

  it("should return the state after CREATE_PROJECT_REQUEST action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.CREATE_PROJECT_REQUEST,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: true,
      created: true,
    });
  });

  it("should return the state after CREATE_PROJECT_SUCCESS action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.CREATE_PROJECT_SUCCESS,
        payload: mockCreatedProjectResponse,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: false,
      saved: true,
      projects: [...stateWithProjects.projects, mockCreatedProjectResponse],
    });
  });

  it("should return the state after CREATE_PROJECT_FAILURE action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.CREATE_PROJECT_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...stateWithProjects,
      error: mockError,
      loading: false,
    });
  });

  it("should return the state after UPDATE_PROJECT_REQUEST", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.UPDATE_PROJECT_REQUEST,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: true,
    });
  });

  it("should return the state after UPDATE_PROJECT_SUCCESS", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.UPDATE_PROJECT_SUCCESS,
        payload: mockUpdatedProjectResponse,
      })
    ).toEqual({
      ...stateWithProjects,
      projects: [...projectUpdatedContent.projects],
    });
  });

  it("should return the state after UPDATE_PROJECT_FAILURE", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.UPDATE_PROJECT_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...stateWithProjects,
      error: mockError,
      loading: false,
    });
  });

  it("should return the state after GET_BY_ID_REQUEST action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.GET_BY_ID_REQUEST,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: true,
    });
  });

  it("should return the state after GET_BY_ID_SUCCESS action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.GET_BY_ID_SUCCESS,
        payload: mockProject,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: false,
      currentItem: mockProject,
    });
  });

  it("should return the state after GET_BY_ID_FAILURE action", () => {
    expect(
      project(stateWithProjects, {
        type: projectConstants.GET_BY_ID_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...stateWithProjects,
      loading: false,
      error: mockError,
    });
  });
});
