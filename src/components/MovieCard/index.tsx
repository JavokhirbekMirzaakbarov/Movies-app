import React from "react";
import { Movie } from "../../constants";
import Button from "../Button";
import style from "./styles.module.scss";

const MovieCard = (props: { movie: Movie }) => {
  return (
    <div className={style.movieCard}>
      <img src={props.movie.Poster} alt="Movie" />
      <div className={style.info}>
        <div>
          <div>{props.movie.Title}</div>
          <div>{props.movie.imdbID}</div>
        </div>
        <div>
          <Button text={props.movie.Year} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
