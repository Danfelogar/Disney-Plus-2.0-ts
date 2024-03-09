import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../services/firebase";
import { toast } from "sonner";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import {
  MovieState,
  MovieFront,
  MovieDetailsFront,
  Movie,
} from "../../types/movies";
import {
  TypeActions,
  TypeMSMErrorGeneric,
  TypeSlices,
} from "../../utils/strings";
import { transformMovieCard } from "../../utils";

const initialState: MovieState = {
  loading: false,
  movies: [],
  movieDetails: {},
  movieFilterByTitle: [],
};

export const moviesSlice = createSlice({
  name: TypeSlices.Movies,
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMovieList: (state, action: PayloadAction<MovieFront[]>) => {
      state.movies = action.payload.map((movie) => ({
        idFront: movie.idFront,
        cardImgFront: movie.cardImgFront,
        titleFront: movie.titleFront,
        subTitleFront: movie.subTitleFront,
        typeFront: movie.typeFront,
      }));
    },
    setMovieDetails: (state, action: PayloadAction<MovieDetailsFront>) => {
      state.movieDetails = action.payload;
    },
    setMovieFilterByTitle: (state, action: PayloadAction<MovieFront[]>) => {
      state.movieFilterByTitle = action.payload;
    },
  },
});

export const {
  setLoading,
  setMovieDetails,
  setMovieFilterByTitle,
  setMovieList,
} = moviesSlice.actions;

export const getMovieList = createAsyncThunk(
  TypeActions.MoviesGetMovies,
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const querySnapshot = await getDocs(collection(db, "movies"));
      const movies = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        cardImg: doc.data().cardImg,
        title: doc.data().title,
        type: doc.data().type,
      }));

      const frontTranslate = transformMovieCard(movies as Movie[]);

      dispatch(setMovieList(frontTranslate));
    } catch (error) {
      const err = error as { message: string };
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getMovieByID = createAsyncThunk(
  TypeActions.MoviesGetMoviesByID,
  async (id: string, { dispatch }) => {
    try {
      dispatch(setLoading(true));

      const docRef = doc(db, "movies", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("by id---->", docSnap.data());
      }
    } catch (error) {
      const err = error as { message: string };
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getMovieByTitle = createAsyncThunk(
  TypeActions.MoviesGetMoviesByTitle,
  async (title: string, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const q = query(
        collection(db, "movies"),
        where("title", ">=", title),
        where("title", "<=", title + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);
      const movies = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        cardImg: doc.data().cardImg,
        title: doc.data().title,
        type: doc.data().type,
      }));
      console.log({ movies });
    } catch (error) {
      const err = error as { message: string };
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export default moviesSlice.reducer;
