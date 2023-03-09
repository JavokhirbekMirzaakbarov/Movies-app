import React, { useState } from "react";
import { Movie } from "../../constants";
import MovieCard from "../MovieCard";
import { Modal, Box } from "@mui/material";
import EditMovieModal from "../EditMovieModal";
import DeleteMovieModal from "../DeleteMovieModal";
import { useAppSelector } from "../../hooks/hooks";
import { selectMovies } from "../../store/moviesSlice";
import style from "./styles.module.scss";

interface MoviesListProps {
  onMovieClick: (id: string) => void;
}

const MoviesList: React.FC<MoviesListProps> = ({ onMovieClick }) => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [movie, setMovie] = useState({} as Movie);
  const movies = useAppSelector(selectMovies);

  const onEdit = (id: string) => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      setEditOpen(true);
      setMovie(movie);
    }
  };

  const onDelete = (id: string) => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      setMovie(movie);
      setDeleteOpen(true);
    }
  };

  const handleClose = (type: string) => {
    if (type === "edit") setEditOpen(false);
    else setDeleteOpen(false);
  };

  return (
    <>
      <div data-testid="movie-list" className={style.movies}>
        {movies.map((movie) => (
          <MovieCard
            onDelete={onDelete}
            onEdit={onEdit}
            onClick={onMovieClick}
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
      <Modal
        open={isEditOpen}
        onClose={() => handleClose("edit")}
        aria-labelledby="edit-movie-modal-title"
        aria-describedby="edit-movie-modal-description"
      >
        <Box className={style.modal}>
          <EditMovieModal movie={movie} />
        </Box>
      </Modal>
      <Modal
        open={isDeleteOpen}
        onClose={() => handleClose("delete")}
        aria-labelledby="delete-movie-modal-title"
        aria-describedby="delete-movie-modal-description"
      >
        <Box className={style.deleteModal}>
          <DeleteMovieModal movie={movie} />
        </Box>
      </Modal>
    </>
  );
};

export default MoviesList;
