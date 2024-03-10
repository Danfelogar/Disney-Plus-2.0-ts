import {
  Movie,
  MovieDetails,
  MovieDetailsFront,
  MovieFront,
} from "../types/movies";

export const transformMovieCard = (movies: Movie[]): MovieFront[] => {
  return movies.map((movie) => ({
    idFront: movie.id,
    cardImgFront: movie.cardImg,
    titleFront: movie.title,
    subTitleFront: movie.subTitle,
    typeFront: movie.type,
  }));
};

export const transformMovieDetails = (
  movie: MovieDetails
): MovieDetailsFront => {
  return {
    idFront: movie.id,
    backgroundImgFront: movie.backgroundImg,
    cardImgFront: movie.cardImg,
    descriptionFront: movie.description,
    subTitleFront: movie.subTitle,
    titleFront: movie.title,
    titleImgFront: movie.titleImg,
    typeFront: movie.type,
    urlTrailerFront: movie.urlTrailer,
  };
};
