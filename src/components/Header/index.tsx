import { Box, Button } from "@mui/material";
import React from "react";
import SearchBar from "../SearchBar";
import style from "./styles.scss";

const Header = () => {
  return (
    <>
      <h1 className={style.title}>FIND YOUR FAVOURITE MOVIE</h1>
      <div className={style.searchArea}>
        <Box sx={{ minWidth: "60%" }}>
          <SearchBar />
        </Box>
        <Button className={style.searchButton}>SEARCH</Button>
      </div>
    </>
  );
};

export default Header;
