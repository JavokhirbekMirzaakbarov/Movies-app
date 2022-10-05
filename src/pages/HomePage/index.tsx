/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import FiltersTab from "../../components/FiltersTab";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MoviesList from "../../components/MoviesList";
import SearchBar from "../../components/SearchBar";
import { movies as allMovies } from "../../mockData";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import AddMovieModal from "../../components/AddMovieModal";
import { Movie } from "../../constants";
import style from "./styles.module.scss";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [movies, setMovies] = useState<Movie[]>(allMovies);
  const [sortByOption, setSortByOption] = useState("");

  useEffect(() => {
    sortByGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, sortByOption]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const sortByGenre = () => {
    const sortedMovies = allMovies.filter((movie) =>
      movie.genre.toLowerCase().includes(activeTab.toLowerCase())
    );
    if (sortByOption === "release date") sortByDate(sortedMovies);
    else if (sortByOption === "duration") sortByDuration(sortedMovies);
    else sortByRating(sortedMovies);
  };

  const sortByRating = (movies: Movie[]) =>
    setMovies(movies.sort((a, b) => +b.imdbRating - +a.imdbRating));

  const sortByDuration = (movies: Movie[]) =>
    setMovies(movies.sort((a, b) => parseInt(b.runtime) - parseInt(a.runtime)));

  const sortByDate = (movies: Movie[]) =>
    setMovies(
      movies.sort((a, b) => +new Date(b.released) - +new Date(a.released))
    );

  return (
    <div className={style.home}>
      <Navbar openModal={handleOpen} />
      <div className={style.container}>
        <div className={style.blur}>
          <h1 className={style.title}>FIND YOUR FAVOURITE MOVIE</h1>
          <div className={style.searchArea}>
            <Box sx={{ minWidth: "60%" }}>
              <SearchBar />
            </Box>
            <Button className={style.searchButton}>SEARCH</Button>
          </div>
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
        <MoviesList movies={movies} />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Home;
