import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../SearchBar";
import style from "./styles.scss";

const Header = () => {
  const { searchQuery } = useParams();
  const [searchValue, setSearchValue] = useState(searchQuery || "");
  const navigate = useNavigate();

  const onFormSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`../search/${searchValue}`);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <h1 className={style.title}>Find your favourite movie</h1>
        <div data-testid="search-form" className={style.searchArea}>
          <Box sx={{ minWidth: "60%" }}>
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Box>
          <Button
            onClick={onFormSubmit}
            type="submit"
            className={style.searchButton}
          >
            SEARCH
          </Button>
        </div>
      </form>
    </>
  );
};

export default Header;
