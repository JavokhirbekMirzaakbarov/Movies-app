import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Movie } from "../../constants";
import style from "./styles.module.scss";

class MovieCard extends React.Component<{ movie: Movie }> {
  render() {
    return (
      <Card className={style.card}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="280"
          image={this.props.movie.Poster}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {this.props.movie.Title}
          </Typography>
          <Typography variant="body2">{this.props.movie.Year}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">EDIT</Button>
          <Button size="small">DELETE</Button>
        </CardActions>
      </Card>
    );
  }
}

export default MovieCard;
