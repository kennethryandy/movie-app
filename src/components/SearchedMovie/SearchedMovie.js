import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieLists from "../Movies/MovieLists";
//Material ui
import { Divider, Grid, Typography } from "@material-ui/core";
import searchStyles from "./searchedStyles";
import Pagination from "@material-ui/lab/Pagination";

const API_KEY = "fda72843df3de15045ec06fe96643f86";

const SearchedMovie = ({
  history,
  match: {
    params: { movieName, page },
  },
}) => {
  const classes = searchStyles();
  const [movies, setMovies] = useState(null);
  const [pages, setPages] = useState("");
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    if (movieName && page) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${movieName}&page=${page}&include_adult=false`
      );
      setMovies(res.data.results);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const getNextPage = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${movieName}&page=${
        +page + 1
      }&include_adult=false`
    );
    setPages(
      res.data.results.filter(
        (movie) => movie.media_type === "tv" || movie.media_type === "movie"
      )
    );
  };

  useEffect(() => {
    if (!Number(page)) {
      history.push("/");
    }
    setLoading(true);
    getMovies();
    getNextPage();
    // eslint-disable-next-line
  }, [page, movieName]);

  const handleChange = (event, value) => {
    history.push(`/search/${value}/${movieName}`);
  };

  console.log(movies);
  return !loading ? (
    movies?.length > 0 ? (
      <>
        <div className={classes.appBarSpacer} style={{ marginBottom: 30 }} />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom style={{ padding: "0 15px" }}>
              Result for: {movieName}
            </Typography>
            <Divider light className={classes.hr} />
          </Grid>
          {movies
            ?.filter((movie) => movie.poster_path)
            .map((movie) => (
              <Grid lg={2} sm={3} xs={4} item key={movie.id}>
                <MovieLists movie={movie} />
              </Grid>
            ))}
        </Grid>
        <div className={classes.pagination}>
          <Pagination
            count={pages.length > 0 ? +page + 1 : 1}
            page={+page}
            size="large"
            color="primary"
            className={classes.pagination}
            onChange={handleChange}
            siblingCount={0}
          />
        </div>
      </>
    ) : (
      <>
        <div className={classes.appBarSpacer} style={{ marginBottom: 30 }} />
        <Typography variant="h5" gutterBottom style={{ padding: "0 15px" }}>
          No match...
        </Typography>
      </>
    )
  ) : (
    <>
      <div className={classes.appBarSpacer} style={{ marginBottom: 30 }} />
      <p> loading... </p>
    </>
  );
};

export default SearchedMovie;
