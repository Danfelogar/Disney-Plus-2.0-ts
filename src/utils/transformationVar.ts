import { Movie, MovieFront } from "../types/movies";

export const transformMovieCard = (movies: Movie[]): MovieFront[] => {
  return movies.map((movie) => ({
    idFront: movie.id,
    cardImgFront: movie.cardImg,
    titleFront: movie.title,
    subTitleFront: movie.subTitle,
    typeFront: movie.type,
  }));
};
