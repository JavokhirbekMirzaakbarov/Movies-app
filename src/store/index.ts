import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

export const initialState: any = {
  movies: [],
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
