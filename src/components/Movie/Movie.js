import React, { useEffect, useState } from "react";
import axios from "axios";
//Material-ui
import { Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import movieStyles from "./movieStyles";

const API_KEY = "fda72843df3de15045ec06fe96643f86";

const Movie = ({
  match: {
    params: { type, id },
  },
}) => {
  const classes = movieStyles();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

  const getMovie = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US
    `);
    setMovie(movie.data);
    const videos = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    setVideos(videos.data.results);
  };

  useEffect(() => {
    setLoading(true);
    getMovie();
    setLoading(false);
    // eslint-disable-next-line
  }, []);
  return !loading ? (
    <>
      <div className={classes.appBarSpacer} style={{ marginBottom: 30 }} />
      <div>
        {videos.length > 0 && (
          <div className={classes.videoContainer}>
            <iframe
              height="100%"
              width="90%"
              title={movie.original_title}
              style={{ margin: "0 50px" }}
              src={`https://www.youtube.com/embed/${videos[0].key}`}
            />
          </div>
        )}
        {movie && (
          <div className={classes.poster}>
            <div>
              <img
                alt=""
                className={classes.img}
                src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
              />
            </div>
            <div className={classes.info}>
              <Typography variant="h4">
                {movie?.title ? movie.title : movie?.name}
              </Typography>
              <div className={classes.meta}>
                <div style={{ display: "flex", marginRight: "2rem" }}>
                  <StarIcon color="primary" />
                  <p style={{ color: "#f8f9fa", margin: "auto" }}>
                    {movie?.vote_average}
                  </p>
                </div>
                <div style={{ marginRight: "2rem" }}>
                  <p>
                    {movie?.release_date && movie?.first_air_date
                      ? movie?.release_date
                        ? movie?.release_date.split("-")[0]
                        : movie?.first_air_date.split("-")[0]
                      : "2020"}
                  </p>
                </div>
                <div style={{ marginRight: "2rem" }}>
                  <p>{movie?.runtime}min</p>
                </div>
              </div>
              <div className={classes.desc}>
                <Typography variant="body1">{movie.overview}</Typography>
              </div>
              <div className={classes.meta}>
                <div style={{ display: "flex" }}>
                  <p>Country: </p>
                  {movie?.production_countries?.map((country, i) => (
                    <p className={classes.metaDetails} key={i}>
                      {country.name},
                    </p>
                  ))}
                </div>
              </div>
              <div className={classes.meta}>
                <div style={{ display: "flex" }}>
                  <p>Genre:</p>
                  {movie?.genres.map((genre, i) => (
                    <p className={classes.metaDetails} key={i}>
                      {genre.name},
                    </p>
                  ))}
                </div>
              </div>
              <div className={classes.meta}>
                <div style={{ display: "flex" }}>
                  <p>{movie?.release_date ? "Release:" : "First Air"}</p>
                  <p className={classes.metaDetails}>
                    {movie?.release_date
                      ? movie.release_date
                      : movie.first_air_date}
                  </p>
                </div>
              </div>
              <div className={classes.meta}>
                <div style={{ display: "flex" }}>
                  <p>{movie?.created_by ? "Director" : "Companies"}</p>

                  {movie?.created_by
                    ? movie.created_by.map((created, i) => (
                        <p className={classes.metaDetails} key={i}>
                          {created.name},
                        </p>
                      ))
                    : movie?.production_companies.map((created) => (
                        <p className={classes.metaDetails}>{created.name},</p>
                      ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  ) : (
    <>
      <div className={classes.appBarSpacer} style={{ marginBottom: 30 }} />
      <p>loading</p>
    </>
  );
};

export default Movie;
