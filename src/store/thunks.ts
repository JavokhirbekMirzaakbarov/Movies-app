import { getMoviesService } from "../services";
import { setMovies } from "./moviesSlice";
import { AppThunk } from ".";

export const getMovies =
  (offset = 0, genre = "", sortBy: string, search = ""): AppThunk =>
  async (dispatch) => {
    const movies = await getMoviesService({
      offset,
      filter: genre,
      sortBy,
      search,
    });
    if (movies) dispatch(setMovies(movies));
  };
