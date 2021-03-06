import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Typography,
  IconButton,
  Link as MuiLink,
  Paper,
} from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayCircleOutline";
import StarIcon from "@material-ui/icons/Star";
import movieListsStyles from "./movieListsStyles";

const MovieList = ({ movie }) => {
  const classes = movieListsStyles();
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={classes.card}>
      <div
        className={classes.imageWrapper}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onTouchStart={() => setIsHover(true)}
        onTouchEnd={() => setIsHover(false)}
      >
        <MuiLink
          component={Link}
          to={
            movie.release_date
              ? `/movie/${movie.id}/${movie.title}`
              : `/tv/${movie.id}/${movie.name}`
          }
          className={classes.poster}
        >
          <img
            className={classes.img}
            alt=""
            src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
          />
        </MuiLink>
        {isHover && (
          <>
            <Link
              to={
                movie.release_date
                  ? `/movie/${movie.id}/${movie.title}`
                  : `/tv/${movie.id}/${movie.name}`
              }
            >
              <IconButton className={classes.play}>
                <PlayIcon color="primary" />
              </IconButton>
            </Link>
            <div className={classes.description}>
              <Paper elevation={10} classes={{ root: classes.paperRoot }}>
                <div style={{ margin: "10px 10px" }}>
                  <Typography variant="body1" component="h2" gutterBottom>
                    {movie?.title ? movie?.title : movie?.name}
                  </Typography>
                  <div className={classes.meta}>
                    <div style={{ display: "flex" }}>
                      <StarIcon color="primary" />
                      <p style={{ color: "#f8f9fa", margin: "auto" }}>
                        {movie?.vote_average}
                      </p>
                    </div>
                    <div>
                      <p>
                        {movie?.release_date && movie?.first_air_date
                          ? movie?.release_date
                            ? movie?.release_date.split("-")[0]
                            : movie?.first_air_date.split("-")[0]
                          : "2020"}
                      </p>
                    </div>
                    <div>
                      <p>lang {movie?.original_language}</p>
                    </div>
                  </div>
                  <Typography
                    className={classes.overview}
                    variant="subtitle1"
                    component="p"
                    gutterBottom
                  >
                    {movie?.overview.length > 255
                      ? movie?.overview.substr(0, 255) + "..."
                      : movie?.overview}
                  </Typography>
                </div>
              </Paper>
            </div>
          </>
        )}
      </div>
      <Link
        to={
          movie.release_date
            ? `/movie/${movie.id}/${movie.title}`
            : `/tv/${movie.id}/${movie.name}`
        }
        style={{ textDecoration: "none", color: "#e9ecef" }}
      >
        <Typography gutterBottom variant="body1" component="h2">
          {movie?.title
            ? movie?.title.length > 21
              ? movie?.title.substr(0, 21) + "..."
              : movie?.title
            : movie?.name.length > 21
            ? movie?.name.substr(0, 21) + "..."
            : movie?.name}
        </Typography>
      </Link>
    </div>
  );
};

export default withRouter(MovieList);
