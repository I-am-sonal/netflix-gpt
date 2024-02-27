import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies);
  if (!movies) return;
  const mainMovie = movies.Search[0];
  // console.log(mainMovie);

  const { Title, Poster, Year } = mainMovie;
  return (
    <div>
      <VideoTitle title={Title} year={Year} poster={Poster} />
    </div>
  );
};

export default MainContainer;
