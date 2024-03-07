import React from "react";
import { useSelector } from "react-redux";

const MovieCard = ({ poster, movies }) => {
  //const movies = useSelector((store) => store.movies);
  const moviePoster = movies?.Search;
  //console.log(moviePoster);

  return (
    <div className="movie-card-inner flex">
      {moviePoster.map((movie) => (
        <div className="img-wrapper w-36 pr-2">
          <img
            key={movie.imdbID}
            src={movie.Poster}
            alt="imageurl"
            className="w-[100%] h-[100%]"
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
