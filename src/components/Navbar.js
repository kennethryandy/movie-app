import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
//Material-ui
import {
  AppBar,
  InputAdornment,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    color: "#e9ecef",
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
    textDecoration: "none",
    color: "#00acc1",
  },
  textInput: {
    "& input": { color: "#e9ecef" },
    "& svg": { color: "#e9ecef" },
  },
}));

const Navbar = ({ location, history }) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      history.push(`/search/1/${search}`);
    }
  };
  return (
    <AppBar
      style={{ boxShadow: location.pathname === "/home" && "none" }}
      className={classes.appbar}
      position="absolute"
      color="transparent"
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/home"
          className={classes.title}
        >
          zMovies
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.textInput}
            size="small"
            placeholder="Search movie..."
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
