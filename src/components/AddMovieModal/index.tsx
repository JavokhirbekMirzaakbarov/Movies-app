import {
  Box,
  Button,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { genres } from "../../mockData";

class AddMovieModal extends React.Component {
  render() {
    return (
      <Box>
        <Typography id="add-movie-modal-title" variant="h2">
          Add Movie
        </Typography>
        <Box id="add-movie-modal-description">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <TextField fullWidth label="Title" variant="outlined" />
            </Grid>
            <Grid item xs={6} md={4}>
              <InputLabel htmlFor="date">Release Date</InputLabel>
              <Input id="date" type="date" fullWidth />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField fullWidth label="Movie URL" variant="outlined" />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField fullWidth label="Rating" variant="outlined" />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                placeholder="genre"
                fullWidth
                select
                label="Genre"
                variant="outlined"
              >
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre.toUpperCase()}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField fullWidth label="Runtime" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Overview"
                variant="outlined"
                placeholder="Movie Description"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button sx={{ margin: "10px" }} size="large" variant="contained">
              SUBMIT
            </Button>
            <Button sx={{ margin: "10px" }} size="large" variant="outlined">
              RESET
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default AddMovieModal;
