import { getMoviesService } from "../services";
import { setMovies } from "./moviesSlice";
import { AppThunk } from ".";

export const getMovies =
  (offset = 0): AppThunk =>
  async (dispatch) => {
    const movies = await getMoviesService({ offset });
    if (movies) dispatch(setMovies(movies));
  };
