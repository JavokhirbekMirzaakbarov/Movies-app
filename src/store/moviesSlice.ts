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
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    filterByGenre: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((movie) =>
        movie.genres
          .join(",")
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
    },
    sortByRating: (state) => {
      state.movies = state.movies.sort(
        (a, b) => b.vote_average - a.vote_average
      );
    },
    sortByDuration: (state) => {
      state.movies = state.movies.sort((a, b) => b.runtime - a.runtime);
    },
    sortByDate: (state) => {
      state.movies = state.movies.sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      );
    },
  },
});

export default moviesSlice.reducer;
export const {
  setMovies,
  filterByGenre,
  sortByRating,
  sortByDate,
  sortByDuration,
} = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.movies;
