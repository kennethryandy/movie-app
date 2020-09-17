import React from "react";
import Carousel from "react-material-ui-carousel";
import MovieLists from "../Movies/MovieLists";
import homeStyles from "./homeStyles";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const Home = ({ popularMovies, topRatedMovies, tvSeries, topFive }) => {
  const classes = homeStyles();
  return topFive.length > 0 ? (
    <div style={{ height: "100vh" }}>
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        className={classes.carousel}
        interval={3000}
      >
        {topFive.map((movie) => (
          <Paper
            elevation={10}
            className={classes.paper}
            key={movie.id}
            style={{
              background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
              }) no-repeat center center`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className={classes.info}>
              <Typography variant="h4">{movie.title}</Typography>
              <div className={classes.meta}>
                <div style={{ display: "flex" }}>
                  <StarIcon color="primary" />
                  <p style={{ margin: "auto" }}>{movie.vote_average}</p>
                </div>
                <div>
                  <p>
                    {movie.release_date
                      ? movie.release_date.split("-")[0]
                      : movie.first_air_date.split("-")[0]}
                  </p>
                </div>
                <div>
                  <p>lang {movie.original_language}</p>
                </div>
              </div>
              <Typography
                style={{ color: "#adb5bd" }}
                gutterBottom
                variant="body1"
                component="p"
              >
                {movie.overview.length > 255
                  ? movie.overview.substr(0, 255) + "..."
                  : movie.overview}
              </Typography>
            </div>
          </Paper>
        ))}
      </Carousel>

      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom style={{ padding: "0 15px" }}>
            Recommended
          </Typography>
          <Divider light className={classes.hr} />
        </Grid>
        {popularMovies?.map((movie) => (
          <Grid lg={2} sm={3} xs={4} item key={movie.id}>
            <MovieLists movie={movie} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom style={{ padding: "0 15px" }}>
            Top Rated
          </Typography>
          <Divider light className={classes.hr} />
        </Grid>
        {topRatedMovies?.map((movie) => (
          <Grid lg={2} sm={3} xs={4} item key={movie.id}>
            <MovieLists movie={movie} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom style={{ padding: "0 15px" }}>
            Tv Series
          </Typography>
          <Divider light className={classes.hr} />
        </Grid>
        {tvSeries?.map((movie) => (
          <Grid lg={2} sm={3} xs={4} item key={movie.id}>
            <MovieLists movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : null;
};

export default Home;
