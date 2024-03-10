import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState } from "../../redux/store";
import { getMovieByID, setMovieDetails } from "../../redux/slices/movies";

export const useDetails = () => {
  const { movieDetails } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getMovieByID(id));
    }

    return () => {
      dispatch(setMovieDetails(null));
    };
  }, [id]);

  const changeShowModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    //state
    movieDetails,
    isModalOpen,
    //methods
    //functions
    changeShowModal,
  };
};
