import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);
  const poster = movies.Search[0].Poster;
  console.log(poster);

  return (
    <div className="movie-category">
      <h1 className="font-bold py-5">{title}</h1>
      <div className="movie-category-inner flex overflow-x-scroll">
        <MovieCard poster={poster} movies={movies} />
      </div>
    </div>
  );
};

export default MovieLists;
