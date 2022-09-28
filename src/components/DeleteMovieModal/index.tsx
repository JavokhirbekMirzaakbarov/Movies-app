import { Box, Button, Typography } from "@mui/material";
import React from "react";

class DeleteMovieModal extends React.Component {
  render() {
    return (
      <Box>
        <Typography id="edit-movie-modal-title" variant="h2">
          Delete Movie
        </Typography>
        <Box id="edit-movie-modal-description">
          <Typography sx={{ marginTop: "10px" }}>
            Are you sure you want to delete this movie?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button sx={{ margin: "10px" }} size="large" variant="contained">
              CONFIRM
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default DeleteMovieModal;
