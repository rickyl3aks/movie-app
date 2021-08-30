import React, { useState } from "react";
import "./Navbar.css";

//links
const BASE_URL = "https://api.themoviedb.org/3";
const searchURL =
  BASE_URL + "/search/movie?" + process.env.REACT_APP_API_KEY + "&query=";

const Navbar = ({ movies, API_URL }) => {
  const [pageCount, setPageCount] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  //btn logic
  const prevBtn = () => {
    setPageCount(pageCount - 1);
    if (pageCount <= 1) {
      firstPage();
    } else {
      fetch(`${API_URL}&page=${pageCount - 1}`)
        .then((res) => res.json())
        .then((data) => {
          movies(data.results);
        });
    }
  };

  const nextBtn = () => {
    setPageCount(pageCount + 1);
    fetch(`${API_URL}&page=${pageCount + 1}`)
      .then((res) => res.json())
      .then((data) => {
        movies(data.results);
      });
  };

  const firstPage = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        movies(data.results);
      });
    setPageCount(1);
  };

  //form logic
  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(searchURL + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        movies(data.results);
      });
    setSearchTerm("");
    setPageCount(null);
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <img
          src="/img/logo.svg"
          className="logo"
          alt="logo"
          onClick={firstPage}
        />
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>

      <div className="btn-container">
        <button
          className={pageCount === 1 ? "not-allowed" : null}
          onClick={prevBtn}
        >
          Prev
        </button>
        <div className="relative">
          <h4>{pageCount}</h4>
        </div>
        <button onClick={nextBtn}>Next</button>
      </div>
    </div>
  );
};

export default Navbar;
