import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducers } from "./reducers/operations";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todoReducers,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
