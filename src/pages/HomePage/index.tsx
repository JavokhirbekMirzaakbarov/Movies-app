/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import FiltersTab from "../../components/FiltersTab";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MoviesList from "../../components/MoviesList";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
import AddMovieModal from "../../components/AddMovieModal";
import { Movie } from "../../constants";
import Header from "../../components/Header";
import MovieDetails from "../../components/MovieDetails";
import style from "./styles.module.scss";
import { getAllMoviesService } from "../../services";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [movies, setMovies] = useState<Movie[]>();
  const [sortByOption, setSortByOption] = useState("");
  const [toggle, setToggle] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({} as Movie);

  useEffect(() => {
    // sortByGenre();
    getAllMoviesService();
  }, [activeTab, sortByOption]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  // const isMovieGenreActive = (movie: Movie) =>
  //   movie.genre.toLowerCase().includes(activeTab.toLowerCase());

  // const sortByGenre = () => {
  //   const sortedMovies = allMovies.filter((movie) => isMovieGenreActive(movie));
  //   if (sortByOption === "release date") sortByDate(sortedMovies);
  //   else if (sortByOption === "duration") sortByDuration(sortedMovies);
  //   else sortByRating(sortedMovies);
  // };

  // const sortByRating = useCallback(
  //   (movies: Movie[]) =>
  //     setMovies(movies.sort((a, b) => +b.imdbRating - +a.imdbRating)),
  //   [sortByOption]
  // );

  // const sortByDuration = useCallback(
  //   (movies: Movie[]) =>
  //     setMovies(
  //       movies.sort((a, b) => parseInt(b.runtime) - parseInt(a.runtime))
  //     ),
  //   [sortByOption]
  // );

  // const sortByDate = useCallback(
  //   (movies: Movie[]) =>
  //     setMovies(
  //       movies.sort((a, b) => +new Date(b.released) - +new Date(a.released))
  //     ),
  //   [sortByOption]
  // );

  // const onClick = (id: string) => {
  //   const movie = movies.find((movie: Movie) => movie.imdbID === id);
  //   if (movie) {
  //     setSelectedMovie(movie);
  //     setToggle(true);
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   }
  // };

  return (
    <div className={style.home}>
      <Navbar toggle={setToggle} openModal={handleOpen} />
      <div className={style.container}>
        <div className={style.blur}>
          {!toggle ? <Header /> : <MovieDetails movie={selectedMovie} />}
        </div>
      </div>

      <Box className={style.main}>
        {
          <FiltersTab
            setActiveTab={setActiveTab}
            setSortByOption={setSortByOption}
            value={activeTab}
          />
        }
      </Box>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="add-movie-modal-title"
        aria-describedby="add-movie-modal-description"
      >
        <Box className={style.modal}>
          <AddMovieModal />
        </Box>
      </Modal>
      <ErrorBoundary>
        <MoviesList />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Home;
