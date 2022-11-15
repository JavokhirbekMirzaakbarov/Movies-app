import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { genres } from "../../constants";
import style from "./styles.module.scss";

const sortByOptions = ["IMDB rating", "release date", "duration"];

interface FiltersTabProps {
  setSelectedGenre: (genre: string) => void;
  setSortByOption: (option: string) => void;
}

const FiltersTab: React.FC<FiltersTabProps> = ({
  setSelectedGenre,
  setSortByOption,
}) => {
  const [genre, setGenre] = useState("");

  const handleGenreChange = (event: React.SyntheticEvent, newGenre: string) => {
    setSelectedGenre(newGenre);
    setGenre(newGenre);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "release date") setSortByOption("release_date");
    else if (event.target.value === "duration") setSortByOption("runtime");
    else setSortByOption("vote_average");
  };

  return (
    <Box className={style.filters}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={genre} onChange={handleGenreChange}>
          {["all", ...genres].map((genre: string) => (
            <Tab
              value={genre === "all" ? "" : genre}
              key={genre}
              className={style.tab}
              label={genre}
            />
          ))}
        </Tabs>
      </Box>
      <Box className={style.sortBy}>
        <Typography className={style.sortByText}>SORT BY</Typography>
        <select onChange={handleSortByChange} className={style.sortByOption}>
          {sortByOptions.map((option: string) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </Box>
    </Box>
  );
};

export default FiltersTab;
