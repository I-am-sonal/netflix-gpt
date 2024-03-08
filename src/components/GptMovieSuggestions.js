import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <h1>Showing result for: </h1>
      <MovieLists movies={movies?.nowPlayingMovies} title={"Now Playing"} />
    </div>
  );
};

export default GptMovieSuggestions;
