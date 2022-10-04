import React from "react";
import { Movie } from "../../constants";
import MovieCard from "../MovieCard";
import { Modal, Box } from "@mui/material";
import EditMovieModal from "../EditMovieModal";
import style from "./styles.module.scss";
import DeleteMovieModal from "../DeleteMovieModal";

class MoviesList extends React.Component<
  {
    movies: Movie[];
  },
  { isEditOpen: boolean; isDeleteOpen: boolean; movie: Movie }
> {
  constructor(props: never) {
    super(props);
    this.state = {
      isEditOpen: false,
      isDeleteOpen: false,
      movie: {} as Movie,
    };
  }

  onEdit = (id: string) => {
    const movie = this.props.movies.find((movie) => movie.imdbID === id);
    if (movie)
      this.setState({
        movie,
        isEditOpen: true,
      });
  };

  onDelete = (id: string) => {
    const movie = this.props.movies.find((movie) => movie.imdbID === id);
    if (movie)
      this.setState({
        isDeleteOpen: true,
      });
  };

  handleOpen = (type: string) => {
    if (type === "edit") this.setState({ isEditOpen: true });
    else this.setState({ isDeleteOpen: true });
  };

  handleClose = (type: string) => {
    if (type === "edit") this.setState({ isEditOpen: false });
    else this.setState({ isDeleteOpen: false });
  };

  render() {
    return (
      <>
        <div className={style.movies}>
          {this.props.movies.map((movie) => (
            <MovieCard
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </div>
        <Modal
          open={this.state.isEditOpen}
          onClose={() => this.handleClose("edit")}
          aria-labelledby="edit-movie-modal-title"
          aria-describedby="edit-movie-modal-description"
        >
          <Box className={style.modal}>
            <EditMovieModal movie={this.state.movie} />
          </Box>
        </Modal>
        <Modal
          open={this.state.isDeleteOpen}
          onClose={() => this.handleClose("delete")}
          aria-labelledby="delete-movie-modal-title"
          aria-describedby="delete-movie-modal-description"
        >
          <Box className={style.deleteModal}>
            <DeleteMovieModal />
          </Box>
        </Modal>
      </>
    );
  }
}

export default MoviesList;
