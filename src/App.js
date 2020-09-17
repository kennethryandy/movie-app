import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//Components
import Landingpage from "./components/Landingpage/Landingpage";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import SearchedMovie from "./components/SearchedMovie/SearchedMovie";
import Movie from "./components/Movie/Movie";

const API_KEY = "fda72843df3de15045ec06fe96643f86";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00acc1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1e2129",
      contrastText: "#e9ecef",
    },
  },
});

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [topFive, setTopFive] = useState([]);

  const getPopularMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1
    `);
    setPopularMovies(res.data.results);
    setTopFive(res.data.results.slice(0, 8));
  };

  const getTopRatedMovies = async () => {
    const res = await axios.get(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    setTopRatedMovies(res.data.results);
  };

  const getTvSeries = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    setTvSeries(res.data.results);
  };

  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
    getTvSeries();
    // eslint-disable-next-line
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Landingpage} exact />
          <Route
            path="/home"
            render={() => (
              <Home
                popularMovies={popularMovies}
                topFive={topFive}
                topRatedMovies={topRatedMovies}
                tvSeries={tvSeries}
              />
            )}
            exact
          />
          <Route
            path="/search/:page/:movieName"
            component={SearchedMovie}
            exact
          />
          <Route path="/:type/:id/:movieName" component={Movie} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
