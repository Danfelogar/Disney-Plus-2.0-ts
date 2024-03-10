import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { debounce } from "../../utils";
import {
  getMovieByTitle,
  setMovieFilterByTitle,
} from "../../redux/slices/movies";

export const useSearch = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { movieFilterByTitle } = useSelector(
    (state: RootState) => state.movies
  );

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMoviesByTitle();
  };

  const getMoviesByTitle = () => {
    if (searchText.length === 0) {
      dispatch(setMovieFilterByTitle([]));
    } else {
      dispatch(getMovieByTitle(searchText));
    }
  };

  useEffect(() => {
    if (searchText.length !== 0) {
      debounce(() => {
        getMoviesByTitle();
      }, 500)();
    } else if (searchText.length === 0 && movieFilterByTitle.length > 0) {
      dispatch(setMovieFilterByTitle([]));
    }
  }, [searchText]);

  const clearAll = () => {
    dispatch(setMovieFilterByTitle([]));
    setSearchText("");
  };

  return {
    //state
    movieFilterByTitle,
    searchText,
    //methods
    setSearchText,
    //functions
    handleSearch,
    clearAll,
  };
};
