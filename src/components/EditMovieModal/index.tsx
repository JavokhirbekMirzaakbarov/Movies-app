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
import { Movie } from "../../constants";
import { genres } from "../../mockData";

class EditMovieModal extends React.Component<{ movie: Movie }> {
  render() {
    return (
      <Box>
        <Typography id="edit-movie-modal-title" variant="h2">
          Edit Movie
        </Typography>
        <Box id="edit-movie-modal-description">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <TextField
                value={this.props.movie.title}
                fullWidth
                label="Title"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <InputLabel htmlFor="date">Release Date</InputLabel>
              <Input
                value={this.props.movie.released}
                id="date"
                type="date"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                value={this.props.movie.website}
                fullWidth
                label="Movie URL"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                value={this.props.movie.imdbRating}
                fullWidth
                label="Rating"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                placeholder="genre"
                fullWidth
                select
                label="Genre"
                variant="outlined"
                value={this.props.movie.genre}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre.toUpperCase()}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                value={this.props.movie.runtime}
                fullWidth
                label="Runtime"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                value={this.props.movie.actors}
                label="Overview"
                variant="outlined"
                placeholder="Movie Description"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button sx={{ margin: "10px" }} size="large" variant="contained">
              Submit
            </Button>
            <Button sx={{ margin: "10px" }} size="large" variant="outlined">
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default EditMovieModal;
