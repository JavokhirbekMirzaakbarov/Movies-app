import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import thunk, { ThunkDispatch } from "redux-thunk";

export const initialState: any = {
  movies: [],
};

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootState, any, AppAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
