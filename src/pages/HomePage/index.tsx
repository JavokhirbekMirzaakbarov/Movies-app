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
import { useAppDispatch, useAppSelector, useQuery } from "../../hooks/hooks";
import { selectMovies } from "../../store/moviesSlice";
import style from "./styles.module.scss";
import { useParams } from "react-router";
import { getMovieById } from "../../services";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const sortByQuery = useQuery().get("sortBy") || "";
  const genreQuery = useQuery().get("genre") || "";
  const movieQuery = useQuery().get("movie") || "";
  const [isOpen, setOpen] = useState(false);
  const [sortByOption, setSortByOption] = useState(sortByQuery);
  const [selectedGenre, setSelectedGenre] = useState(genreQuery);
  const [toggle, setToggle] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({} as Movie);
  const [offset, setOffset] = useState(0);
  const movies = useAppSelector(selectMovies);
  const { searchQuery } = useParams();
  const dispatch = useAppDispatch();
  const [searchParams, setParams] = useSearchParams();

  useEffect(() => {
    dispatch(getMovies(offset, selectedGenre, sortByOption, searchQuery));
  }, [offset, selectedGenre, sortByOption, searchQuery]);

  useEffect(() => {
    const fetchMovie = async (id: string) => {
      const response = await getMovieById(id);

      if (response.status === 200) {
        setToggle(true);
        setSelectedMovie(response.data);
      } else {
        alert("Movie Not found!");
        setToggle(false);
      }
    };

    if (movieQuery) {
      fetchMovie(movieQuery);
    }
  }, [movieQuery]);

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
      searchParams.set("movie", movie.id);
      setParams(searchParams);
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
          sortByOption={sortByOption}
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
