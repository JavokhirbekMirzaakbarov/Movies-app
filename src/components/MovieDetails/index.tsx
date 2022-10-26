import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Movie } from "../../constants";
import style from "./style.scss";

const MovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <Stack className={style.container} direction="row">
      <Box>
        <img className={style.poster} src={movie.poster} />
      </Box>
      <Box padding="10px">
        <Box padding="10px">
          <Typography className={style.title} variant="h2">
            {movie.title}{" "}
            <span className={style.circle}>{movie.imdbRating}</span>
          </Typography>
          <Typography className={style.description} variant="subtitle1">
            {movie.genre}
          </Typography>
        </Box>
        <Box padding="10px">
          <Typography variant="caption" className={style.duration}>
            {movie.year}
            <span style={{ marginLeft: "15px" }}> {movie.runtime}</span>
          </Typography>
        </Box>
        <Box className={style.description} padding="10px">
          Director(s): {movie.director}
          Actors: {movie.actors}
          Language: {movie.language}
        </Box>
      </Box>
    </Stack>
  );
};

export default MovieDetails;
