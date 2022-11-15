import { Box, Button, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.scss";

const DeleteMovieModal = () => {
  return (
    <Box className={style.container}>
      <Typography id="edit-movie-modal-title" variant="h2">
        Delete Movie
      </Typography>
      <Box id="edit-movie-modal-description">
        <Typography sx={{ marginTop: "10px" }}>
          Are you sure you want to delete this movie?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button sx={{ margin: "10px" }} size="large" variant="contained">
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DeleteMovieModal;
