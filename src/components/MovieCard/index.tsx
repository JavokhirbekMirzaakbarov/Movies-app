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
import image from "./../../asset/images/no-image.png";
import style from "./styles.module.scss";

interface MovieProps {
  movie: Movie;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onClick: (id: string) => void;
}

const MovieCard: React.FC<MovieProps> = ({
  movie,
  onEdit,
  onDelete,
  onClick,
}) => {
  const onError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = image;
  };

  return (
    <Card className={style.card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        onError={onError}
        image={movie.poster_path}
      />
      <CardContent onClick={() => onClick(movie.id)}>
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
          <Typography>
            {movie.vote_average !== 0 && movie.vote_average}
          </Typography>
          <Typography>{movie.runtime}</Typography>
        </Box>
        <Box>
          <Typography>
            {movie.genres.map((genre) => genre.toLowerCase()).join(",")}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button onClick={() => onEdit(movie.id)} size="small">
          <EditIcon />
        </Button>
        <Button onClick={() => onDelete(movie.id)} size="small">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
