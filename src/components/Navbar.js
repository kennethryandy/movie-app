import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { searchApi } from "./utils";
//Material-ui
import {
  AppBar,
  InputAdornment,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const API_KEY = "fda72843df3de15045ec06fe96643f86";

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
  form: { position: "relative" },
  searchInfo: {
    "& img": {
      height: "auto",
      width: "100%",
      objectFit: "cover",
      maxWidth: 90,
      maxHeight: 120,
      minHeight: 120,
      minWidth: 90,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(30,33,41, 0.2)",
    color: "#e9ecef ",
    borderRadius: 4,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginTop: "-2px",
    zIndex: 2,
    marginBottom: 20,
  },
  listItemText: {
    margin: "0 20px",
  },
}));

const Navbar = ({ location, history }) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    if (search) {
      history.push(`/search/1/${search}`);
    }
  };

  const handleChange = async (e) => {
    setOpen(true);
    setSearch(e.target.value);
    const res = await searchApi(`
    https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`);
    setSearchArray(res);
  };

  const handleAutocompleteClicked = (movie) => {
    setSearch("");
    const movieName = movie.media_type === "movie" ? movie.title : movie.name;
    history.push(`/${movie.media_type}/${movie.id}/${movieName}`);
  };

  const onLeaveFocus = () => {
    setTimeout(() => {
      setOpen(false);
      setSearchArray([]);
    }, 300);
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
        <form className={classes.form} onSubmit={handleSubmit}>
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
            onChange={(e) => handleChange(e)}
            onBlur={onLeaveFocus}
          />
          {searchArray?.length > 0 && open && (
            <div className={classes.searchInfo}>
              <List>
                {searchArray.map((movie) => (
                  <ListItem
                    button
                    key={movie.id}
                    onClick={() => handleAutocompleteClicked(movie)}
                  >
                    <img
                      alt=""
                      src={
                        movie.backdrop_path
                          ? `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`
                          : `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      }
                    />
                    <ListItemText
                      className={classes.listItemText}
                      primary={movie?.title ? movie.title : movie.name}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
