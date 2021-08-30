import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import ScrollDown from "./ScrollDown/ScrollDown";
import Loading from "./Loading/Loading";
import Navbar from "./Navbar/Navbar";

const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w300";
let API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <Navbar movies={setMovies} API_URL={API_URL} />
      {movies.length > 1 ? (
        <Homepage movies={movies} url={IMG_URL} />
      ) : (
        <Loading />
      )}
      <ScrollDown />
    </div>
  );
};

export default App;
