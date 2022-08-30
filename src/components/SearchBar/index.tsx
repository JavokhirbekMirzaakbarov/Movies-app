import { Input } from "@mui/material";
import React from "react";
import style from "./styles.module.scss";

class SearchBar extends React.Component {
  render() {
    return (
      <Input
        className={style.searchBar}
        placeholder="What do you want to watch?"
        margin="dense"
        autoFocus
        disableUnderline
        fullWidth
      />
    );
  }
}

export default SearchBar;
