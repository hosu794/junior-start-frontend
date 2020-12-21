import ProjectComponent from "../../../components/project/ProjectComponent";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mockProjects } from "../../../utils/tests/mockProjects";
import React from "react";
import { render, screen } from "@testing-library/react";

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

describe("Test a ProjectComponent", () => {
  let page;

  beforeAll(() => {
    page = render(<TestingComponent />);
  });

  it("should render title correctly", () => {
    const titleValue = "title: random title";
    const title = page.getByText(titleValue);
    expect(title).toHaveTextContent(titleValue);
  });

  //   it("should render description correctly", () => {
  //     const descriptionValue = "Description: some random description";

  //     const description = page.getByText(/Description: some random description/);
  //     expect(description).toHaveTextContent(descriptionValue);
  //   });
});
