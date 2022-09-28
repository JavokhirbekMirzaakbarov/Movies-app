import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { genres } from "../../mockData";
import style from "./styles.module.scss";

const sortByOptions = ["imdb rating", "release date", "duration"];
class FiltersTab extends React.Component<
  {
    setActiveTab: (value: string) => void;
    value: string;
    setSortByOption: (value: string) => void;
  },
  unknown
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  handleChange = (event: React.SyntheticEvent, newValue: string) => {
    this.props.setActiveTab(newValue);
  };

  handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.setSortByOption(event.target.value);
  };

  render() {
    return (
      <Box className={style.filters}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={this.props.value} onChange={this.handleChange}>
            <Tab value="" className={style.tab} label="all" />
            {genres.map((genre: string) => (
              <Tab
                value={genre}
                key={genre}
                className={style.tab}
                label={genre}
              />
            ))}
          </Tabs>
        </Box>
        <Box className={style.sortBy}>
          <Typography className={style.sortByText}>SORT BY</Typography>
          <select
            onChange={this.handleSortByChange}
            className={style.sortByOption}
          >
            {sortByOptions.map((option: string) => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </Box>
      </Box>
    );
  }
}

export default FiltersTab;
