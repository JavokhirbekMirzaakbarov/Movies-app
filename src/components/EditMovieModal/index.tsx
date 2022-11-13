import {
  Box,
  Button,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Select,
  SelectChangeEvent,
  Checkbox,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Movie } from "../../constants";

interface MovieProps {
  movie: Movie;
}

const EditMovieModal: React.FC<MovieProps> = ({ movie }) => {
  const [selectedGenres, setGenres] = useState<string[]>(
    movie.genres.map((genre) => genre.toLowerCase())
  );

  const handleChange = (event: SelectChangeEvent<typeof selectedGenres>) => {
    const {
      target: { value },
    } = event;

    setGenres(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box>
      <Typography id="edit-movie-modal-title" variant="h2">
        Edit Movie
      </Typography>
      <Box id="edit-movie-modal-description">
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <TextField
              value={movie.title}
              fullWidth
              label="Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <InputLabel htmlFor="date">Release Date</InputLabel>
            <Input value={movie.release_date} id="date" type="date" fullWidth />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              value={movie.overview}
              fullWidth
              label="Movie URL"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              value={movie.vote_average}
              fullWidth
              label="Rating"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <Select
              multiple
              fullWidth
              value={selectedGenres}
              onChange={handleChange}
              renderValue={(selectedGenres) => selectedGenres.join(", ")}
            >
              <MenuItem disabled key={"edit-movie-genres"} value="">
                <em>Genres</em>
              </MenuItem>
              {/* {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  <Checkbox checked={selectedGenres.indexOf(genre) > -1} />
                  <ListItemText primary={genre} />
                </MenuItem>
              ))} */}
            </Select>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              value={movie.runtime}
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
              value={movie.budget}
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
};

export default EditMovieModal;
