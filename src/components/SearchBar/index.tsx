import React from "react";
import style from "./styles.module.scss";

const SearchBar = () => {
  return (
    <input
      className={style.searchBar}
      placeholder=" What do you want to watch?"
    />
  );
};

export default SearchBar;
