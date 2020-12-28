import { render, fireEvent, wait } from "@testing-library/react";
import React from "react";

import SignUpForm from "../../../components/auth/SignUpForm";

import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

let store = mockStore({
  authentication: {
    loading: false,
    error: true,
  },
});

const TestingComponent = () => (
  <MemoryRouter>
    <Provider store={store}>
      <SignUpForm />
    </Provider>
  </MemoryRouter>
);

store.dispatch = jest.fn();

it("submits correct values", async () => {
  const { container, debug } = render(<TestingComponent />);

  const username = container.querySelector('input[name="username"]');
  const password = container.querySelector('input[name="password"]');
  const passwordConfirm = container.querySelector(
    'input[name="passwordConfirm"]'
  );
  const email = container.querySelector('input[name="email"]');
  const acceptedTerms = container.querySelector('input[name="acceptedTerms"]');
  const submit = container.querySelector('button[type="submit"]');

  await wait(() => {
    fireEvent.change(acceptedTerms, {
      target: {
        value: true,
      },
    });

    fireEvent.change(username, {
      target: {
        value: "username",
      },
    });

    fireEvent.change(password, {
      target: {
        value: "password",
      },
    });

    fireEvent.change(passwordConfirm, {
      target: {
        value: "password",
      },
    });

    fireEvent.change(email, {
      target: {
        value: "email@example.com",
      },
    });
  });

  await wait(() => {
    fireEvent.click(submit);
  });

  wait(() => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
