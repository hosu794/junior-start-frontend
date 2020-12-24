import ProjectComponent from "../../../components/project/ProjectComponent";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mockProjects } from "../../../utils/tests/mockProjects";
import React from "react";
import { cleanup, render } from "@testing-library/react";

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
      <ProjectComponent id={12} />
    </Provider>
  </MemoryRouter>
);

store.dispatch = jest.fn();

afterEach(cleanup);

describe("Test a ProjectComponent", () => {
  const { container, debug } = render(<TestingComponent />);

  debug();
  it("should render title correctly", () => {
    expect(container.querySelector("h1").textContent).toMatch(
      /title: random title/
    );
  });

  it("should render title correctly", () => {
    expect(container.querySelector("h2").textContent).toMatch(
      /title: random title/
    );
  });
});
