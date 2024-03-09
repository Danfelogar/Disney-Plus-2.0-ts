import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { getMovieList } from "../../redux/slices/movies";
import { TypeMovie } from "../../utils";
import { MovieFront } from "../../types/movies";

interface MovieCategory {
  id: number;
  title: string;
  movies: MovieFront[];
}

interface CategoryFilters {
  [key: string]: (movie: MovieFront) => boolean;
  "Originals of Disney+": (movie: MovieFront) => boolean;
  Trending: (movie: MovieFront) => boolean;
  News: (movie: MovieFront) => boolean;
  "Recommended For You": (movie: MovieFront) => boolean;
}

export const useHome = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();
  const [moviesCategories, setMoviesCategories] = useState<MovieCategory[]>([
    {
      id: 1,
      title: "Originals of Disney+",
      movies: [],
    },
    {
      id: 2,
      title: "Trending",
      movies: [],
    },
    {
      id: 3,
      title: "News",
      movies: [],
    },
    {
      id: 4,
      title: "Recommended For You",
      movies: [],
    },
  ]);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  useEffect(() => {
    const categoryFilters: CategoryFilters = {
      "Originals of Disney+": (movie: MovieFront) =>
        movie.typeFront === TypeMovie.Original,
      Trending: (movie: MovieFront) => movie.typeFront === TypeMovie.Trending,
      News: (movie: MovieFront) => movie.typeFront === TypeMovie.New,
      "Recommended For You": (movie: MovieFront) =>
        movie.typeFront === TypeMovie.Recommend,
    };

    const updatedCategories = moviesCategories.map((category) => ({
      ...category,
      movies: movies.filter(categoryFilters[category.title] || (() => true)),
    }));

    setMoviesCategories(updatedCategories);
  }, [movies]);

  return {
    //state
    moviesCategories,
    //methods
    //functions
  };
};
