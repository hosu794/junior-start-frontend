import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store";

export const Root = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World</h1>
        <p>First Application</p>
      </div>
    </Provider>
  );
};
