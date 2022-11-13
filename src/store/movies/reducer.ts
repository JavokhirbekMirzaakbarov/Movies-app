import { SET_INITIAL_MOVIES } from "./types";

export const moviesReducer = (state = [], action: any) => {
  switch (action.type) {
    case SET_INITIAL_MOVIES: {
      return [...action.payload.movies];
    }
    default:
      return state;
  }
};
