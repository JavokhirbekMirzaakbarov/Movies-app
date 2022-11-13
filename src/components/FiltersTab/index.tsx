import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import style from "./styles.module.scss";

const sortByOptions = ["imdb rating", "release date", "duration"];
interface FiltersProps {
  setActiveTab: (value: string) => void;
  value: string;
  setSortByOption: (value: string) => void;
}

const FiltersTab: React.FC<FiltersProps> = ({
  setActiveTab,
  value,
  setSortByOption,
}) => {
  const handleGenreChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortByOption(event.target.value);
  };

  return (
    <Box className={style.filters}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleGenreChange}>
          <Tab value="" className={style.tab} label="all" />
          {/* {genres.map((genre: string) => (
            <Tab
              value={genre}
              key={genre}
              className={style.tab}
              label={genre}
            />
          ))} */}
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
