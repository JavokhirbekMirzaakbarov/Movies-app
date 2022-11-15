import axios from "axios";

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
