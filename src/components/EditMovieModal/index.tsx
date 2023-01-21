import React from "react";
import { editMovieService } from "../../services";
import { Movie } from "../../constants";
import MovieForm from "../MovieForm";
interface EditMovieProps {
  movie: Movie;
}

const EditMovieModal: React.FC<EditMovieProps> = ({ movie }) => {
  return <MovieForm initialValues={movie} onSubmit={editMovieService} />;
};

export default EditMovieModal;
