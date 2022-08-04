import React from "react";
import { Movie } from "../../constants";
import MovieCard from "../MovieCard";
import style from "./styles.module.scss";

const MoviesList = (props: { movies: Movie[] }) => {
  return (
    <div className={style.movies}>
      {props.movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
