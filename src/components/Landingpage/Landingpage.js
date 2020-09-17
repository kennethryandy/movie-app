import React, { useState } from "react";
import { Link } from "react-router-dom";
//Material-ui
import {
  InputAdornment,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import landingpageStyles from "./landingpageStyles";

const Landingpage = ({ history }) => {
  const classes = landingpageStyles();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      history.push(`/search/1/${search}`);
    }
  };
  return (
    <div className={classes.landingpage}>
      <Typography variant="h3">Movies</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          className={classes.textInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton type="submit">
                  <SearchIcon color="primary" fontSize="large" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
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
