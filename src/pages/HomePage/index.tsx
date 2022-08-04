import React from "react";
import Button from "../../components/Button";
import FiltersTab from "../../components/FiltersTab";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MoviesList from "../../components/MoviesList";
import SearchBar from "../../components/SearchBar";
import style from "./styles.module.scss";
import { movies } from "../../mockData";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.blur}>
        <Header />
        <h1 className={style.title}>FIND YOUR MOVIE</h1>
        <div className={style.searchArea}>
          <SearchBar />
          <Button className={style.searchButton} text="SEARCH" />
        </div>
      </div>
      <div className={style.main}>
        <FiltersTab />
      </div>
      <MoviesList movies={movies} />
      <Footer />
    </div>
  );
};

export default Home;
