import React, { useEffect } from "react";
import Home from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { getAllMoviesService } from "./services";
import { setInitialMovies } from "./store/movies/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const movies = await getAllMoviesService();
      console.log(movies);
      dispatch(setInitialMovies(movies));
    };

    getData();
  }, []);

  return <Home />;
};

export default App;
