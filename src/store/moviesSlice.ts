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
    filterMoviesByGenre: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((movie: Movie) =>
        movie.genres
          .map((genre) => genre.toLowerCase())
          .join("")
          .includes(action.payload.toLowerCase())
      );
      console.log(state.movies);
    },
  },
});

export default moviesSlice.reducer;
export const { setMovies, filterMoviesByGenre } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.movies;
