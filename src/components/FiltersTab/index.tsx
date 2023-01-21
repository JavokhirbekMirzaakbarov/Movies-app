import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { genres } from "../../constants";
import { useAppDispatch, useQuery } from "../../hooks/hooks";
import {
  filterByGenre,
  sortByDate,
  sortByDuration,
  sortByRating,
} from "../../store/moviesSlice";
import style from "./styles.module.scss";
import { useSearchParams } from "react-router-dom";
import { formatSortOption } from "../../helpers";

const sortByOptions = ["vote_average", "release_date", "runtime"];

interface FiltersTabProps {
  setSelectedGenre: (genre: string) => void;
  setSortByOption: (option: string) => void;
  sortByOption: string;
}

const FiltersTab: React.FC<FiltersTabProps> = ({
  setSelectedGenre,
  setSortByOption,
  sortByOption,
}) => {
  const genreQuery = useQuery().get("genre") || "";
  const [, setParams] = useSearchParams();
  const [genre, setGenre] = useState(genreQuery);
  const dispatch = useAppDispatch();

  const handleGenreChange = (event: React.SyntheticEvent, newGenre: string) => {
    setParams((prev) => ({ ...prev, genre: newGenre }));
    setSelectedGenre(newGenre);
    setGenre(newGenre);
    dispatch(filterByGenre(newGenre));
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setParams((prev) => ({ ...prev, sortBy: event.target.value }));
    if (event.target.value === "release_date") {
      setSortByOption("release_date");
      dispatch(sortByDate());
    } else if (event.target.value === "runtime") {
      setSortByOption("runtime");
      dispatch(sortByDuration());
    } else {
      setSortByOption("vote_average");
      dispatch(sortByRating());
    }
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
            <option
              selected={option === sortByOption}
              key={option}
              value={option}
            >
              {formatSortOption(option)}
            </option>
          ))}
        </select>
      </Box>
    </Box>
  );
};

export default FiltersTab;
