import { useDispatch } from "react-redux";
import { addActionMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useActionMovies = () => {
  // Fetch NowPlayingMovies data from API and update the store
  const dispatch = useDispatch();
  const getActionMovies = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?s=action&apikey=263d22d8"
    );
    const json = await data.json();
    //console.log(json.Search);

    //dispatch an action
    dispatch(addActionMovies(json));
  };

  useEffect(() => {
    getActionMovies();
  }, []);
};

export default useActionMovies;
