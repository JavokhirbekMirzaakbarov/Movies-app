import React from "react";
import { addMovieService } from "../../services";
import MovieForm from "../MovieForm";

const AddMovieModal = () => {
  const initialValues = {
    id: "",
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
  };

  return <MovieForm initialValues={initialValues} onSubmit={addMovieService} />;
};

export default AddMovieModal;
