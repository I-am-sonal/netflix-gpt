import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  // lists of movie categories

  return (
    <div className="w-[100%] p-4 bg-black">
      <MovieLists movies={movies?.nowPlayingMovies} title={"Now Playing"} />
      <MovieLists movies={movies?.horrorMovies} title={"Horror Movies"} />
      <MovieLists movies={movies?.popularMovies} title={"Popular Movies"} />
      <MovieLists movies={movies?.fictionMovies} title={"Fiction Movies"} />
      <MovieLists movies={movies?.actionMovies} title={"Action Movies"} />
    </div>
  );
};

export default SecondaryContainer;
