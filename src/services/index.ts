import axios from "axios";

export const getMoviesService = async ({
  filter = "",
  sortBy = "",
  search = "",
  searchBy = "title",
  offset = 0,
}) => {
  const movies = await axios.get(
    `/movies?sortBy=${sortBy}&sortOrder=asc&search=${search}&searchBy=${searchBy}&filter=${filter}&offset=${offset}&limit=12`
  );
  return movies.data.data;
};

// export const getMoviesByGenreService = async (genre: string) => {
//   const movies = await axios.get(`/movies?filter=${genre}`);
// };
