import React from "react";

import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import ProjectCreate from "../../../components/project/ProjectCreate";
import { cleanup, render } from "@testing-library/react";
import { mockProjects } from "../../../utils/tests/mockProjects";

const mockStore = configureStore([]);

let store = mockStore({
  project: {
    projects: mockProjects,
    loading: false,
    saved: false,
    size: 10,
    totalElement: 5,
    last: true,
    page: 1,
    created: false,
    currentItem: {
      id: 12,
      title: "random title",
      name: "random name",
      body: "<p>Random name </p>",
      numberOfSeats: 10,
      description: "some random description",
      teamMembers: 0,
      mentor: null,
      creator: {
        username: "username",
        email: "email@email.com",
        id: 123434,
      },
    },
  },
  user: {
    user: {
      username: "username",
      email: "email@email.com",
      id: 123434,
    },
  },
});
const TestingComponent = () => (
  <MemoryRouter>
    <Provider store={store}>
      <ProjectCreate />
    </Provider>
  </MemoryRouter>
);

afterAll(cleanup);

describe("ProjectBackButton", () => {
  it("render h1 correctly", () => {
    const { getByText, debug } = render(<TestingComponent />);

    const element = getByText(/Create a new project/);

    expect(element).toBeTruthy();
  });

  it("render paragraph correctly", () => {
    const { getByText } = render(<TestingComponent />);

    const element = getByText(/This is subsite for creating projects/);

    expect(element).toBeTruthy();
  });
});
