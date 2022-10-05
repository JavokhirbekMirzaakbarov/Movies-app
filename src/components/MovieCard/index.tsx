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

interface MovieProps {
  movie: Movie;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const MovieCard: React.FC<MovieProps> = ({ movie, onEdit, onDelete }) => {
  return (
    <Card className={style.card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={movie.poster}
      />
      <CardContent>
        <Typography sx={{ color: "#f65261" }} gutterBottom variant="h5">
          {movie.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">{movie.released}</Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            {movie.language.slice(0, 3).toLocaleUpperCase()}
          </Typography>
          <Typography>{movie.imdbRating}</Typography>
          <Typography>{movie.runtime}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button onClick={() => onEdit(movie.imdbID)} size="small">
          <EditIcon />
        </Button>
        <Button size="small" onClick={() => onDelete(movie.imdbID)}>
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
