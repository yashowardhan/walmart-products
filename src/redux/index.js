import { applyMiddleware, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import initialState from "./reducer";
import productsReducer from "./reducer";

const middlewares = [thunk];

export default configureStore(
  {
    reducer: {
      productsReducer,
    },
  },
  initialState,
  applyMiddleware(...middlewares)
);
