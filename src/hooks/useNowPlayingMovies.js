import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch NowPlayingMovies data from API and update the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch("https://www.omdbapi.com/?s=now&apikey=263d22d8");
    const json = await data.json();
    //console.log(json.Search);

    //dispatch an action
    dispatch(addNowPlayingMovies(json));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
