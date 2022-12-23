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
  Checkbox,
  ListItemText,
} from "@mui/material";
import { genres } from "../../constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addMovieService } from "../../services";

const AddMovieModal = () => {
  const [snackbar, setSnackbar] = useState({
    error: false,
    message: "",
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      tagline: "",
      vote_average: 0,
      vote_count: 0,
      release_date: "",
      poster_path: "",
      overview: "",
      budget: 0,
      revenue: 0,
      runtime: 0,
      genres: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please enter title"),
      tagline: Yup.string().required("Please enter tagline"),
      release_date: Yup.date().required("Please enter release date"),
      poster_path: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter image URL"),
      overview: Yup.string()
        .max(30, "Must be 30 characters or less!")
        .required("Please enter overview!"),
      vote_average: Yup.number()
        .min(0, "Minimum rating is 0")
        .max(100, "Maximum rating is 100"),
      genres: Yup.lazy((val) =>
        Array.isArray(val)
          ? Yup.array().of(Yup.string()).required("Select genres")
          : Yup.string().required("Select genres")
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await addMovieService(values);
      response === 201
        ? setSnackbar({
            error: false,
            message: "Movie added successfully!",
          })
        : setSnackbar({
            error: true,
            message: "Something went wrong! Try again!",
          });
      resetForm();
    },
  });

  const renderGenresValue = (selectedGenres: string[]) =>
    !selectedGenres.length ? "Genres" : selectedGenres.join(", ");

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography id="add-movie-modal-title" variant="h3">
        Add Movie
      </Typography>
      <Box id="add-movie-modal-description">
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <TextField
              {...formik.getFieldProps("title")}
              fullWidth
              label="Title"
              variant="outlined"
            />
            {formik.touched.title && formik.errors.title && (
              <Typography sx={{ color: "red" }}>
                {formik.errors.title}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6} md={4}>
            <InputLabel htmlFor="date">Release Date</InputLabel>
            <Input
              {...formik.getFieldProps("release_date")}
              id="date"
              type="date"
              fullWidth
            />
            {formik.touched.release_date && formik.errors.release_date && (
              <Typography sx={{ color: "red" }}>
                {formik.errors.release_date}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              {...formik.getFieldProps("poster_path")}
              fullWidth
              label="Poster Path"
              variant="outlined"
            />
            {formik.touched.poster_path && formik.errors.poster_path && (
              <Typography sx={{ color: "red" }}>
                {formik.errors.poster_path}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              {...formik.getFieldProps("vote_average")}
              fullWidth
              type="number"
              label="Rating"
              variant="outlined"
            />
            {formik.touched.vote_average && formik.errors.vote_average && (
              <Typography sx={{ color: "red" }}>
                {formik.errors.vote_average}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6} md={8}>
            <Select
              renderValue={renderGenresValue}
              displayEmpty
              multiple
              fullWidth
              {...formik.getFieldProps("genres")}
            >
              <MenuItem disabled key={"genres"} value="">
                <em>Genres</em>
              </MenuItem>
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  <Checkbox
                    checked={formik.values.genres.includes(genre as never)}
                  />
                  <ListItemText primary={genre} />
                </MenuItem>
              ))}
            </Select>
            {formik.touched.genres && formik.errors.genres && (
              <Typography sx={{ color: "red" }}>
                {formik.errors.genres}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              {...formik.getFieldProps("runtime")}
              fullWidth
              type="number"
              label="Runtime"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              {...formik.getFieldProps("tagline")}
              fullWidth
              label="Tagline"
              variant="outlined"
            />
            {formik.touched.tagline && formik.errors.tagline && (
              <Typography sx={{ color: "red" }}>
                {formik.errors.tagline}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              {...formik.getFieldProps("revenue")}
              fullWidth
              type="number"
              label="Revenue"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              multiline
              minRows={3}
              {...formik.getFieldProps("overview")}
              label="Overview"
              variant="outlined"
              placeholder="Movie Description"
            />
            {formik.touched.overview && formik.errors.overview && (
              <Typography sx={{ color: "red" }}>
                {formik.errors.overview}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            {snackbar.message && (
              <Typography sx={{ color: snackbar.error ? "red" : "green" }}>
                {snackbar.message}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            sx={{ margin: "10px" }}
            size="large"
            variant="contained"
          >
            Submit
          </Button>
          <Button
            onClick={formik.handleReset}
            sx={{ margin: "10px" }}
            size="large"
            variant="outlined"
          >
            Reset
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddMovieModal;
