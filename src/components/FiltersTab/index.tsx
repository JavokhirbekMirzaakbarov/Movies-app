import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import style from "./styles.module.scss";

class FiltersTab extends React.Component<unknown, { activeTab: number }> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = { activeTab: 0 };
  }

  handleChange = (event: React.SyntheticEvent, newValue: number) => {
    this.setState({ activeTab: newValue });
    console.log(newValue);
  };

  render() {
    return (
      <Box className={style.filters}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={this.state.activeTab}
            onChange={this.handleChange}
            aria-label="basic tabs example"
          >
            <Tab className={style.tab} label="ALL" />
            <Tab className={style.tab} label="DOCUMENTARY" />
            <Tab className={style.tab} label="HORROR" />
            <Tab className={style.tab} label="CRIME" />
          </Tabs>
        </Box>
        <Box className={style.sortBy}>
          <Typography className={style.sortByText}>SORT BY</Typography>
          <select className={style.sortByOption}>
            <option value="MOST POPULAR">MOST POPULAR</option>
            <option value="RELEASE DATE">RELEASE DATE</option>
          </select>
        </Box>
      </Box>
    );
  }
}

export default FiltersTab;
