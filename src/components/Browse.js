import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useActionMovies from "../hooks/useActionMovies";
import useFictionMovies from "../hooks/useFictionMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useActionMovies();
  useHorrorMovies();
  useFictionMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        Main Container
          - Video background
          - VideoTitle
        Secondary Container
        - MovieList * n
        - cards * n 
      */}
    </div>
  );
};

export default Browse;
