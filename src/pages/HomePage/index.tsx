import React from "react";
import FiltersTab from "../../components/FiltersTab";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MoviesList from "../../components/MoviesList";
import SearchBar from "../../components/SearchBar";
import style from "./styles.module.scss";
import { movies } from "../../mockData";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

class Home extends React.Component {
  render() {
    return (
      <div className={style.home}>
        <Navbar />
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
        <Box className={style.main}>{<FiltersTab />}</Box>
        <ErrorBoundary>
          <MoviesList movies={movies} />
        </ErrorBoundary>
        <Footer />
      </div>
    );
  }
}

export default Home;
