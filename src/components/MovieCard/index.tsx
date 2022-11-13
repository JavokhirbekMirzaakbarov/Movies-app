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
  const formatMovieLanguage = (language: string) =>
    language.slice(0, 3).toLocaleUpperCase();

  return (
    <Card className={style.card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={movie.poster_path}
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
          <Typography variant="body2">{movie.release_date}</Typography>
          <Typography sx={{ fontWeight: "bold" }}>{movie.overview}</Typography>
          <Typography>{movie.vote_average}</Typography>
          <Typography>{movie.runtime}</Typography>
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
};

export default MovieCard;
