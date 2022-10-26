/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Movie } from "../constants";
import { movies } from "../mockData";

const useMovies = () => {
  const [movie, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // API call to get all movies
    setMovies(movies);
  }, []);

  return movies;
};

export default useMovies;
