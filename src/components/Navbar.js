import React from "react";
import { Link } from "react-router-dom";
//Material-ui
import {
  AppBar,
  Button,
  Hidden,
  InputAdornment,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
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

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} position="absolute" color="transparent">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/home"
          className={classes.title}
        >
          zMovies
        </Typography>
        <Grid container>
          <Hidden smDown>
            <Grid item>
              <Button size="small" color="inherit">
                Login
              </Button>
              <Button size="small" color="inherit">
                Anime
              </Button>
              <Button size="small" color="inherit">
                Requested
              </Button>
              <Button size="small" color="inherit">
                Most Watched
              </Button>
              <Button size="small" color="inherit">
                Release
              </Button>
              <Button size="small" color="inherit">
                A-Z List
              </Button>
              <Button size="small" color="inherit">
                TV-Series
              </Button>
              <Button size="small" color="inherit">
                Movies
              </Button>
              <Button size="small" color="inherit">
                Country
              </Button>
              <Button size="small" color="inherit">
                Genry
              </Button>
              <Button size="small" color="inherit">
                Home
              </Button>
            </Grid>
          </Hidden>
          <Grid item style={{ flex: 1, marginLeft: "20px" }}>
            <TextField
              className={classes.textInput}
              size="small"
              placeholder="Search movie..."
              color="secondary"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
