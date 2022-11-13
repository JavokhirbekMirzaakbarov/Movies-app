import { getAllMoviesService } from "../../services";
import { SET_INITIAL_MOVIES } from "./types";

export const getAllMovies = () => {
  return async (dispatch: Function) => {
    const movies: any = await getAllMoviesService();
    if (!movies) dispatch({ type: SET_INITIAL_MOVIES });
  };
};
