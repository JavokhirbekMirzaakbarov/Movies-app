import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.scss";

class AddMovieModal extends React.Component {
  render() {
    return (
      <Box sx={{ color: "white" }}>
        <Typography id="modal-modal-title" variant="h2">
          Add Movie
        </Typography>
        <Box id="modal-modal-description">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                className={style.addMovieInput}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Input type="date" fullWidth />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                fullWidth
                select
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              >
                <option>Classic</option>
                <option>Drama</option>
              </TextField>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                id="outlined-basic"
                minRows={3}
                label="Outlined"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default AddMovieModal;
