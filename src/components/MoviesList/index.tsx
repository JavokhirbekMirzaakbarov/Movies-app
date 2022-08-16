import React from "react";
import { Movie } from "../../constants";
import MovieCard from "../MovieCard";
import style from "./styles.module.scss";

class MoviesList extends React.Component<{ movies: Movie[] }> {
  render() {
    return (
      <div className={style.movies}>
        {this.props.movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MoviesList;
