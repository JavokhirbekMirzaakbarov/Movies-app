import React from "react";
import style from "./styles.module.scss";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        className={style.searchBar}
        placeholder="What do you want to watch?"
      />
    );
  }
}

export default SearchBar;
