export interface MovieDetails {
  id: string;
  backgroundImg: string;
  cardImg: string;
  description: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
  urlTrailer: string;
}

export interface Movie {
  id: string;
  cardImg: string;
  title: string;
  subTitle: string;
  type: string;
}

export interface MovieFront {
  idFront: string;
  cardImgFront: string;
  titleFront: string;
  subTitleFront: string;
  typeFront: string;
}

export interface MovieDetailsFront {
  idFront: string;
  backgroundImgFront: string;
  cardImgFront: string;
  descriptionFront: string;
  subTitleFront: string;
  titleFront: string;
  titleImgFront: string;
  typeFront: string;
  urlTrailerFront: string;
}

export interface MovieState {
  loading: boolean;
  movies: MovieFront[] | [];
  movieDetails: MovieDetailsFront | {};
  movieFilterByTitle: MovieFront[] | [];
}