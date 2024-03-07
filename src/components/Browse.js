import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useActionMovies from "../hooks/useActionMovies";
import useFictionMovies from "../hooks/useFictionMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { BG_URL } from "../utils/constants";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useActionMovies();
  useHorrorMovies();
  useFictionMovies();

  return (
    <div
      style={{
        backgroundImage: `url(${BG_URL})`,
      }}
    >
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
