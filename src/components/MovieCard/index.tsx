import React from "react";
import { Movie } from "../../constants";
import Button from "../Button";
import style from "./styles.module.scss";

class MovieCard extends React.Component<{ movie: Movie }> {
  render() {
    return (
      <div className={style.movieCard}>
        <img src={this.props.movie.Poster} alt="Movie" />
        <div className={style.info}>
          <div>
            <div>{this.props.movie.Title}</div>
            <div>{this.props.movie.imdbID}</div>
          </div>
          <div>
            <Button text={this.props.movie.Year} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
