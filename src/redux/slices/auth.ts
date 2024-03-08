import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

import {
  AuthState,
  LoginCredentials,
  RegisterCredentials,
} from "../../types/auth";
import {
  TypeActions,
  TypeMSMErrorGeneric,
  TypeSlices,
} from "../../utils/strings";
import { authGeneric, googleProvider } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const INITIAL_CREDENTIALS = {
  name: "",
  email: "",
  photo: "",
};

const initialState: AuthState = {
  loading: false,
  credentials: INITIAL_CREDENTIALS,
  isLogin: false,
};

export const authSlice = createSlice({
  name: TypeSlices.Auth,
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCredentials: (
      state,
      action: PayloadAction<AuthState["credentials"]>
    ) => {
      state.credentials = action.payload;
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.credentials = INITIAL_CREDENTIALS;
      state.isLogin = false;
    },
  },
});

export const { setLoading, setCredentials, setLogout } = authSlice.actions;

export const signIn = createAsyncThunk(
  TypeActions.AuthSignIn,
  async (credentials: LoginCredentials, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { email, password } = credentials;
      const userCredential = await signInWithEmailAndPassword(
        authGeneric,
        email,
        password
      );

      console.log({ userCredential });
    } catch (error) {
      const err = error as { response: { data: { message: string } } };
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const signUp = createAsyncThunk(
  TypeActions.AuthRegister,
  async (credentials: RegisterCredentials, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { email, password } = credentials;
      const userCredential = await createUserWithEmailAndPassword(
        authGeneric,
        email,
        password
      );

      console.log({ userCredential });
    } catch (error) {
      const err = error as { response: { data: { message: string } } };
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const signWithGoogle = createAsyncThunk(
  TypeActions.AuthSignInGoogle,
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const userCredential = await signInWithPopup(authGeneric, googleProvider);

      console.log({ userCredential });
    } catch (error) {
      const err = error as { response: { data: { message: string } } };
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const signOut = createAsyncThunk(
  TypeActions.AuthSignOut,
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      dispatch(setLogout());
    } catch (error) {
      const err = error as { response: { data: { message: string } } };
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export default authSlice.reducer;