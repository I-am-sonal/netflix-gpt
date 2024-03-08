import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useHorrorMovies = () => {
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);

  // Fetch NowPlayingMovies data from API and update the store
  const dispatch = useDispatch();
  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?s=horror&apikey=263d22d8"
    );
    const json = await data.json();
    //console.log(json.Search);

    //dispatch an action
    dispatch(addHorrorMovies(json));
  };

  useEffect(() => {
    !horrorMovies && getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
