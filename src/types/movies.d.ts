import { TypeMovie } from "../utils";

export interface MovieDetails {
  id: string;
  backgroundImg: string;
  cardImg: string;
  description: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: TypeMovie;
  urlTrailer: string;
}

export interface Movie {
  id: string;
  cardImg: string;
  title: string;
  subTitle: string;
  type: TypeMovie;
}

export interface MovieFront {
  idFront: string;
  cardImgFront: string;
  titleFront: string;
  subTitleFront: string;
  typeFront: TypeMovie;
}

export interface MovieDetailsFront {
  idFront: string;
  backgroundImgFront: string;
  cardImgFront: string;
  descriptionFront: string;
  subTitleFront: string;
  titleFront: string;
  titleImgFront: string;
  typeFront: TypeMovie;
  urlTrailerFront: string;
}

export interface MovieState {
  loading: boolean;
  movies: MovieFront[] | [];
  movieDetails: MovieDetailsFront | null;
  movieFilterByTitle: MovieFront[] | [];
}
