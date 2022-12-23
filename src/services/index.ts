import axios from "axios";
import { Movie } from "../constants";

export const getMoviesService = async ({
  filter = "",
  sortBy = "vote_average",
  search = "",
  searchBy = "title",
  offset = 0,
}) => {
  const movies = await axios.get(
    `/movies?sortBy=${sortBy}&sortOrder=desc&search=${search}&searchBy=${searchBy}&filter=${filter}&offset=${offset}&limit=12`
  );
  return movies.data.data;
};

export const addMovieService = async (movie: Omit<Movie, "id">) => {
  const response = await axios.post("/movies", movie);

  return response.status;
};

export const editMovieService = async (movie: Movie) => {
  const response = await axios.put("/movies", movie);

  return response.status;
};

export const deleteMovieService = async (id: string) => {
  const response = await axios.delete(`/movies/${id}`);

  return response.status;
};
