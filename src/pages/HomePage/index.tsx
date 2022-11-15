/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import FiltersTab from "../../components/FiltersTab";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MoviesList from "../../components/MoviesList";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Box } from "@mui/system";
import { Modal, Button } from "@mui/material";
import AddMovieModal from "../../components/AddMovieModal";
import { Movie } from "../../constants";
import Header from "../../components/Header";
import MovieDetails from "../../components/MovieDetails";
import { getMovies } from "../../store/thunks";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectMovies } from "../../store/moviesSlice";
import style from "./styles.module.scss";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const [sortByOption, setSortByOption] = useState("vote_average");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [toggle, setToggle] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({} as Movie);
  const [offset, setOffset] = useState(0);
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);

  useEffect(() => {
    dispatch(getMovies(offset, selectedGenre, sortByOption));
  }, [offset, selectedGenre, sortByOption]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleBack = () => {
    setOffset(offset - 1);
  };

  const handleNext = () => {
    setOffset(offset + 1);
  };

  const onMovieClick = (id: string) => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      setSelectedMovie(movie);
      setToggle(true);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={style.home}>
      <Navbar toggle={setToggle} openModal={handleOpen} />
      <div className={style.container}>
        <div className={style.blur}>
          {!toggle ? <Header /> : <MovieDetails movie={selectedMovie} />}
        </div>
      </div>

      <Box className={style.main}>
        <FiltersTab
          setSelectedGenre={setSelectedGenre}
          setSortByOption={setSortByOption}
        />
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
        <MoviesList onMovieClick={onMovieClick} />
      </ErrorBoundary>
      <Box sx={{ textAlign: "center" }}>
        <Button
          disabled={offset === 0}
          onClick={handleBack}
          sx={{ fontSize: "2em", fontWeight: "bold" }}
        >
          &lt;
        </Button>
        <Button
          onClick={handleNext}
          sx={{ fontSize: "2em", fontWeight: "bold" }}
        >
          &gt;
        </Button>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
