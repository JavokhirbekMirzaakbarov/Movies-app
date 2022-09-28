import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
          image={this.props.movie.poster}
        />
        <CardContent>
          <Typography sx={{ color: "#f65261" }} gutterBottom variant="h5">
            {this.props.movie.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2">{this.props.movie.released}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {this.props.movie.language.slice(0, 3).toLocaleUpperCase()}
            </Typography>
            <Typography>{this.props.movie.imdbRating}</Typography>
            <Typography>{this.props.movie.runtime}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">
            <EditIcon />
          </Button>
          <Button size="small">
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default MovieCard;
