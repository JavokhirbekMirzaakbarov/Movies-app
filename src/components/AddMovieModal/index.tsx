import React, { useState } from "react";
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
import { genres } from "../../mockData";

const AddMovieModal = () => {
  const [selectedGenres, setGenres] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedGenres>) => {
    const {
      target: { value },
    } = event;
    setGenres(typeof value === "string" ? value.split(",") : value);
  };

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
            <Select
              multiple
              fullWidth
              value={selectedGenres}
              onChange={handleChange}
              renderValue={(selectedGenres) =>
                !selectedGenres.length ? "Genres" : selectedGenres.join(", ")
              }
            >
              <MenuItem disabled key={"genres"} value="">
                <em>Genres</em>
              </MenuItem>
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  <Checkbox checked={selectedGenres.includes(genre)} />
                  <ListItemText primary={genre} />
                </MenuItem>
              ))}
            </Select>
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

export default AddMovieModal;
