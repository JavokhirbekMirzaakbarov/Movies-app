import axios from "axios";

export const getAllMoviesService = async () => {
  const movies = await axios.get("/movies?limit=30");
  return movies.data.data;
};
