import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import HomeImg from "../../assets/images/home-icon.svg";
import SearchImg from "../../assets/images/search-icon.svg";
import WatchListImg from "../../assets/images/watchlist-icon.svg";
import OriginalsImg from "../../assets/images/original-icon.svg";
import MoviesImg from "../../assets/images/movie-icon.svg";
import SeriesImg from "../../assets/images/series-icon.svg";
import { signOut } from "../../redux/slices/auth";

export const usePrivateLayout = () => {
  const { credentials } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  const changeLogOut = () => {
    handleMouseLeave();
    dispatch(signOut());
  };

  const arrMenu = [
    {
      id: 1,
      name: "Home",
      img: HomeImg,
    },
    {
      id: 2,
      name: "Search",
      img: SearchImg,
    },
    {
      id: 3,
      name: "Watch List",
      img: WatchListImg,
    },
    {
      id: 4,
      name: "Originals",
      img: OriginalsImg,
    },
    {
      id: 5,
      name: "Movies",
      img: MoviesImg,
    },
    {
      id: 6,
      name: "Series",
      img: SeriesImg,
    },
  ];
  return {
    //state
    isMenuVisible,
    credentials,
    arrMenu,
    //methods
    //functions
    changeLogOut,
    handleMouseEnter,
    handleMouseLeave,
  };
};
