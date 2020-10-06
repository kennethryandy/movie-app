import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchApi } from "../utils";
//Material-ui
import {
  InputAdornment,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import landingpageStyles from "./landingpageStyles";

const API_KEY = "fda72843df3de15045ec06fe96643f86";

const Landingpage = ({ history }) => {
  const classes = landingpageStyles();
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  const handleChange = async (e) => {
    setSearch(e.target.value);
    const res = await searchApi(`
    https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`);
    setSearchArray(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    if (search) {
      history.push(`/search/1/${search}`);
    }
  };

  const handleAutocompleteClicked = (movie) => {
    setSearch("");
    setSearchArray([]);
    const movieName = movie.media_type === "movie" ? movie.title : movie.name;
    history.push(`/${movie.media_type}/${movie.id}/${movieName}`);
  };

  const onLeaveFocus = () => {
    setTimeout(() => {
      setSearchArray([]);
    }, 300);
  };

  console.log(searchArray);

  return (
    <div className={classes.landingpage}>
      <Typography variant="h3">Movies</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          placeholder="Enter your keywords..."
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
          onChange={(e) => handleChange(e)}
          onBlur={onLeaveFocus}
        />
        {searchArray?.length > 0 && (
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
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Description -
                        </Typography>
                        {movie.overview && movie?.overview.length > 55
                          ? movie?.overview.substr(0, 55) + "..."
                          : movie?.overview}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </div>
        )}
      </form>
      <Typography variant="h6" style={{ marginTop: 20 }}>
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
