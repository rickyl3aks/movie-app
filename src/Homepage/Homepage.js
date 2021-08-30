import React from "react";
import "./Homepage.css";

const Homepage = ({ movies, url }) => {
  return (
    <div className="grid">
      {movies.map((movie) => {
        const { title, poster_path, vote_average, overview, id } = movie;
        return (
          <div className="container" key={id}>
            <img
              src={poster_path != null ? url + poster_path : "/img/movie.jpg"}
              alt={title}
            />
            <h1>{title}</h1>
            <div className="vote">
              {vote_average % 1 === 0 ? vote_average + ".0" : vote_average}
            </div>
            <p className="info">
              {overview.length > 1 ? overview : "No overview available"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
