import React from "react";
import { Link } from "react-router-dom";
//Material-ui
import {
  InputAdornment,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import landingpageStyles from "./landingpageStyles";

const Landingpage = () => {
  const classes = landingpageStyles();
  return (
    <div className={classes.landingpage}>
      <Typography variant="h3">Movies</Typography>
      <TextField
        fullWidth
        variant="filled"
        className={classes.textInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" fontSize="large" />
            </InputAdornment>
          ),
        }}
      />
      <Typography variant="h6">
        High quality movies that you can watch anytime, anywhere.
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.btn}
        component={Link}
        to="/home"
      >
        Go to home page
      </Button>
    </div>
  );
};

export default Landingpage;
