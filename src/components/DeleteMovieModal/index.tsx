import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Movie } from "../../constants";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteMovieService } from "../../services";
import { deleteMovie } from "../../store/moviesSlice";
import style from "./style.module.scss";

interface DeleteModalProps {
  movie: Movie;
}

const DeleteMovieModal: React.FC<DeleteModalProps> = ({ movie }) => {
  const [snackbar, setSnackbar] = useState({
    error: false,
    message: "",
  });
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    const response = await deleteMovieService(movie.id);
    if (response === 204) {
      setSnackbar({ error: false, message: "Deleted!" });
      dispatch(deleteMovie(movie.id));
    } else {
      setSnackbar({ error: true, message: "Sonething went wrong! Try again!" });
    }
  };

  return (
    <Box className={style.container}>
      <Typography id="edit-movie-modal-title" variant="h3">
        Delete Movie
      </Typography>
      <Box id="edit-movie-modal-description">
        <Typography sx={{ marginTop: "10px" }}>
          Are you sure you want to delete this movie?
        </Typography>
        {snackbar.message && (
          <Typography
            sx={{ marginTop: "10px", color: snackbar.error ? "red" : "green" }}
          >
            {snackbar.message}
          </Typography>
        )}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={handleClick}
            sx={{ margin: "10px" }}
            size="large"
            variant="contained"
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DeleteMovieModal;
