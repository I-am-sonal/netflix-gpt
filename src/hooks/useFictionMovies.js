import { useDispatch } from "react-redux";
import { addFictionMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useFictionMovies = () => {
  // Fetch NowPlayingMovies data from API and update the store
  const dispatch = useDispatch();
  const getFictionMovies = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?s=fiction&apikey=263d22d8"
    );
    const json = await data.json();
    console.log(json.Search);

    //dispatch an action
    dispatch(addFictionMovies(json));
  };

  useEffect(() => {
    getFictionMovies();
  }, []);
};

export default useFictionMovies;
