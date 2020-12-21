import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import ProjectBackButton from "../../../components/project/ProjectBackButton";

const mockStore = configureStore([]);

let store = mockStore({
  authentication: {
    loading: false,
    error: true,
  },
});

const mockTitle = "Some title";

const mockFunc = jest.fn();

const TestingComponent = () => (
  <MemoryRouter>
    <Provider store={store}>
      <ProjectBackButton onClick={mockFunc} title={mockTitle} />
    </Provider>
  </MemoryRouter>
);

describe("ProjectBackButton", () => {
  let page;
  beforeEach(() => {
    page = render(<TestingComponent />);
  });

  it("should click the button", async () => {
    const button = page.getByText(mockTitle);

    await wait(() => {
      fireEvent.click(button);
    });

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
