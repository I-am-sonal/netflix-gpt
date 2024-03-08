import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  // Fetch NowPlayingMovies data from API and update the store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?s=popular&apikey=263d22d8"
    );
    const json = await data.json();
    //console.log(json.Search);

    //dispatch an action
    dispatch(addPopularMovies(json));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
