import { SET_INITIAL_MOVIES } from "./types";

export const setInitialMovies = (movies: any) => {
  return {
    type: SET_INITIAL_MOVIES,
    payload: {
      movies,
    },
  };
};
