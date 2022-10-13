/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Movie } from "../constants";
import { movies } from "../mockData";

const useMovies = () => {
  const [movie, setMovies] = useState<Movie[]>(movies);

  return movies;
};

export default useMovies;
