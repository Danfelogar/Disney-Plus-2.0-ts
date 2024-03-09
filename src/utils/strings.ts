export enum TypeSlices {
  Root = "root",
  Auth = "auth",
  Movies = "movies",
}

export enum TypeActions {
  //auth
  AuthSignIn = "auth/signIn",
  AuthRegister = "auth/register",
  AuthSignOut = "auth/signOut",
  AuthSignInGoogle = "auth/signInGoogle",
  //movies
  MoviesGetMovies = "movies/getMovies",
  MoviesGetMoviesByID = "movies/getMoviesByID",
  MoviesGetMoviesByTitle = "movies/getMoviesByTitle",
}

export enum TypeMSMErrorGeneric {
  GenericError = "Ocurrió un error inesperado",
}

export enum TypeEnvironment {
  Production = "Production",
  Development = "Development",
}

export enum RoutesString {
  Home = "/",
  Details = "/details",
  Login = "/login",
  Welcome = "/welcome",
  //Register = "/register",
  NotFound = "/not-found",
}

export enum TypeMovie {
  Original = "original",
  New = "new",
  Trending = "trending",
  Recommend = "recommend",
}
