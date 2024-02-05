import React, { useEffect, useState } from "react";
import "./app.css";
import searchIcon from "./search.svg";
import MovieCart from "./MovieCart";
const API_URL = "http://www.omdbapi.com?apikey=83ab7c79";

const App = () => {
  const [Movies, setMovies] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  //  83ab7c79
  useEffect(() => {
    searchMovies("superman");
  }, []);
  return (
    <div className="app">
      <h1>movieland</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerms)}
        />
      </div>
      {Movies?.length > 0 ? (
        <div className="container">
          {Movies.map((movie) => (
            <MovieCart movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">No Movies found</div>
      )}
    </div>
  );
};
export default App;
