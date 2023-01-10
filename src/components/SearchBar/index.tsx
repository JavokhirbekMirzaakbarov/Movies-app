import { Input } from "@mui/material";
import React from "react";
import style from "./styles.module.scss";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (val: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <Input
      className={style.searchBar}
      placeholder="What do you want to watch?"
      margin="dense"
      autoFocus
      disableUnderline
      fullWidth
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBar;
