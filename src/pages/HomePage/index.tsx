import React from "react";
import { flushSync } from "react-dom";
import FiltersTab from "../../components/FiltersTab";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MoviesList from "../../components/MoviesList";
import SearchBar from "../../components/SearchBar";
import { movies } from "../../mockData";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import AddMovieModal from "../../components/AddMovieModal";
import { Movie } from "../../constants";
import style from "./styles.module.scss";

class Home extends React.Component<
  any,
  { isOpen: boolean; activeTab: string; movies: Movie[]; sortOption: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      activeTab: "",
      movies: movies,
      sortOption: "",
    };
  }

  componentDidMount(): void {
    this.sortByGenre();
  }

  handleOpen = () => this.setState({ isOpen: true });

  handleClose = () => this.setState({ isOpen: false });

  setActiveTab = (activeTab: string) => {
    flushSync(() => {
      this.setState({ activeTab });
    });

    this.sortByGenre();
  };

  setSortByOption = (option: string) => {
    flushSync(() => {
      this.setState({ sortOption: option });
    });

    this.sortByGenre();
  };

  sortByGenre = () => {
    const sortedMovies = movies.filter((movie) =>
      movie.genre.toLowerCase().includes(this.state.activeTab.toLowerCase())
    );
    if (this.state.sortOption === "release date") this.sortByDate(sortedMovies);
    else if (this.state.sortOption === "duration")
      this.sortByDuration(sortedMovies);
    else this.sortByRating(sortedMovies);
  };

  sortByRating = (movies: Movie[]) => {
    this.setState({
      movies: movies.sort((a, b) => +b.imdbRating - Number(a.imdbRating)),
    });
  };

  sortByDuration = (movies: Movie[]) => {
    this.setState({
      movies: movies.sort((a, b) => parseInt(b.runtime) - parseInt(a.runtime)),
    });
  };

  sortByDate = (movies: Movie[]) => {
    this.setState({
      movies: movies.sort(
        (a, b) => +new Date(b.released) - +new Date(a.released)
      ),
    });
  };

  render() {
    return (
      <div className={style.home}>
        <Navbar openModal={this.handleOpen} />
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
              setActiveTab={this.setActiveTab}
              setSortByOption={this.setSortByOption}
              value={this.state.activeTab}
            />
          }
        </Box>
        <Modal
          open={this.state.isOpen}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={style.modal}>
            <AddMovieModal />
          </Box>
        </Modal>
        <ErrorBoundary>
          <MoviesList movies={this.state.movies} />
        </ErrorBoundary>
        <Footer />
      </div>
    );
  }
}

export default Home;
