import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { genres } from "../../constants";
import { useAppDispatch } from "../../hooks/hooks";
import style from "./styles.module.scss";
import { filterMoviesByGenre } from "../../store/moviesSlice";

const sortByOptions = ["imdb rating", "release date", "duration"];

const FiltersTab: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const dispatch = useAppDispatch();

  const handleGenreChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedGenre(newValue);
    dispatch(filterMoviesByGenre(newValue));
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // setSortByOption(event.target.value);
  };

  return (
    <Box className={style.filters}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedGenre} onChange={handleGenreChange}>
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
