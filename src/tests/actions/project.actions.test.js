import { projectActions } from "../../actions/project.actions";
import {
  mockError,
  mockProject,
  mockServiceCreator,
  store,
} from "../../utils/tests";
import { mockProjects } from "../../utils/tests/mockProjects";

describe("Test for the project actions", () => {
  const mockResponse = {
    data: {
      message: "success",
    },
  };

  beforeEach(() => {
    store.clearActions();
  });

  test("should create an action to fetch paged projects, which be success", async () => {
    await store
      .dispatch(projectActions.findAll(0, mockServiceCreator(mockProjects)))

      .then(() => {
        expect(store.getActions()).toContainEqual(
          {
            type: "GET_ALL_PROJECT_REQUEST",
          },
          {
            type: "GET_ALL_PROJECT_SUCCESS",
            payload: mockProjects.data,
          }
        );
      });
  });

  test("should create an action to fetch paged projects, which be failure", async () => {
    await store
      .dispatch(projectActions.findAll(0, mockServiceCreator(mockError, false)))

      .then(() => {
        console.log(store.getActions());
        expect(store.getActions()).toContainEqual(
          {
            type: "GET_ALL_PROJECT_REQUEST",
          },
          {
            type: "GET_ALL_PROJECT_FAILURE",
            error: mockError,
          },
          {
            type: "ERROR",
            message: "err",
          }
        );
      });
  });

  test("should create an action to save project, which be success", async () => {
    await store
      .dispatch(
        projectActions.saveProject(
          mockProject.data,
          mockServiceCreator(mockProject)
        )
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          {
            type: "CREATE_PROJECT_REQUEST",
          },
          {
            type: "CREATE_PROJECT_SUCCESS",
            payload: mockProject.data,
          }
        );
      });
  });

  test("should create an action to save project, which be failure", async () => {
    await store
      .dispatch(
        projectActions.saveProject(
          mockProject.data,
          mockServiceCreator(mockError, false)
        )
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          {
            type: "CREATE_PROJECT_REQUEST",
          },
          {
            type: "CREATE_PROJECT_FAILURE",
            error: mockError,
          }
        );
      });
  });

  test("should create an action to update project, which be failure", async () => {
    await store
      .dispatch(
        projectActions.updateProject(
          mockProject.data,
          12,
          mockServiceCreator(mockError, false)
        )
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          {
            type: "UPDATE_PROJECT_REQUEST",
          },
          {
            type: "UPDATE_PROJECT_FAILURE",
            error: mockError,
          }
        );
      });
  });

  test("should create an action to update project, which be success", async () => {
    await store
      .dispatch(
        projectActions.updateProject(
          mockProject.data,
          12,
          mockServiceCreator(mockProject)
        )
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          {
            type: "UPDATE_PROJECT_REQUEST",
          },
          {
            type: "UPDATE_PROJECT_SUCCESS",
            payload: mockProject.data,
          }
        );
      });
  });

  test("should create an action to delete project, which be success", async () => {
    await store
      .dispatch(
        projectActions.deleteProject(12, mockServiceCreator(mockResponse))
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          { type: "DELETE_PROJECT_REQUEST", payload: 12 },
          { type: "DELETE_PROJECT_SUCCESS", response: { message: "success" } }
        );
      });
  });

  test("should create an action to delete project, which be failure", async () => {
    await store
      .dispatch(
        projectActions.deleteProject(12, mockServiceCreator(mockError, false))
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          { type: "DELETE_PROJECT_REQUEST", payload: 12 },
          { type: "DELETE_PROJECT_FAILURE", error: mockError }
        );
      });
  });

  test("should create an action to get a  project by title, which be success", async () => {
    await store
      .dispatch(
        projectActions.getByTitle("title", mockServiceCreator(mockProject))
      )
      .then(() => {
        console.log(store.getActions());
        expect(store.getActions()).toContainEqual(
          { type: "GET_BY_TITLE_REQUEST" },
          { type: "GET_BY_TITLE_SUCCESS", payload: mockProject.data }
        );
      });
  });

  test("should create an action to get a  project by title, which be failure", async () => {
    await store
      .dispatch(
        projectActions.getByTitle("title", mockServiceCreator(mockError, false))
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          { type: "GET_BY_TITLE_REQUEST" },
          { type: "GET_BY_TITLE_FAILURE", error: mockError }
        );
      });
  });

  test("should create an action to get a  project by name, which be success", async () => {
    await store
      .dispatch(
        projectActions.getByName("name", mockServiceCreator(mockProject))
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          { type: "GET_BY_NAME_REQUEST" },
          { type: "GET_BY_NAME_SUCCESS", payload: mockProject.data }
        );
      });
  });

  test("should create an action to get a  project by name, which be failure", async () => {
    await store
      .dispatch(
        projectActions.getByName("name", mockServiceCreator(mockError, false))
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          { type: "GET_BY_NAME_REQUEST" },
          { type: "GET_BY_NAME_FAILURE", error: mockError }
        );
      });
  });

  test("should create an action to get a  project by id, which be failure", async () => {
    await store
      .dispatch(
        projectActions.findById(12, mockServiceCreator(mockError, false))
      )
      .then(() => {
        expect(store.getActions()).toContainEqual(
          { type: "GET_BY_ID_REQUEST" },
          { type: "GET_BY_ID_FAILURE", error: mockError }
        );
      });
  });

  test("should create an action to get a  project by id, which be success", async () => {
    await store
      .dispatch(projectActions.findById(12, mockServiceCreator(mockProject)))
      .then(() => {
        expect(store.getActions()).toContainEqual(
          { type: "GET_BY_ID_REQUEST" },
          { type: "GET_BY_ID_SUCCESS", payload: mockProject.data }
        );
      });
  });
});
