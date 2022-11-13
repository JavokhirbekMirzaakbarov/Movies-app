import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "./movies/reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
});
