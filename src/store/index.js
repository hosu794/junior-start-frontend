import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger, { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

let middleware = [sagaMiddleware];

// sagaMiddleware.run();

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, loggerMiddleware];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
