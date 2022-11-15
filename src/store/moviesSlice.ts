/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Movie } from "../constants";

export interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<any>) => {
      state.movies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { setMovies } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.movies;
