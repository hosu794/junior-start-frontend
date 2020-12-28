import ProjectComponent from "../../../components/project/ProjectComponent";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mockProjects } from "../../../utils/tests/mockProjects";
import React from "react";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
// import { screen } from "@testing-library/dom";

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
  it("render title correctly", () => {
    const { getByTestId } = render(<TestingComponent />);

    expect(getByTestId("project-title").textContent).toMatch(
      /Title: random title/
    );
  });

  it("render name correctly", () => {
    const { getByTestId } = render(<TestingComponent />);

    expect(getByTestId("project-name").textContent).toMatch(
      /Name: random name/
    );
  });

  it("render body correctly", () => {
    const { getByTestId } = render(<TestingComponent />);

    expect(getByTestId("project-body").textContent).toMatch(/Random name/);
  });

  it("render number of seats correctly", () => {
    const { getByTestId } = render(<TestingComponent />);

    expect(getByTestId("project-number-of-seats").textContent).toMatch(
      /Number of Seats: 10/
    );
  });

  it("render project's recruting correctly", () => {
    const { getByTestId } = render(<TestingComponent />);

    expect(getByTestId("project-recruting").textContent).toMatch(
      /Recruting: No/
    );
  });

  it("render project's members correctly", () => {
    const { getByTestId } = render(<TestingComponent />);

    expect(getByTestId("project-members").textContent).toMatch(
      /Team's membersNobody/
    );
  });

  it("render project's mentor correctly", () => {
    const { getByTestId } = render(<TestingComponent />);

    expect(getByTestId("project-mentor").textContent).toMatch(
      /Project's Mentors/
    );
  });

  it("render back button correctly", () => {
    const { getByTestId, debug } = render(<TestingComponent />);

    debug();
    expect(getByTestId("project-open-button").textContent).toMatch(
      /Back to projects/
    );
  });

  it("render back button correctly", () => {
    const { getByTestId, debug } = render(<TestingComponent />);

    debug();
    expect(getByTestId("project-delete-button").textContent).toMatch(/Delete/);
  });
});
