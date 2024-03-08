import { combineReducers } from "@reduxjs/toolkit";

import auth from "./slices/auth";
import movies from "./slices/auth";

export const rootReducer = combineReducers({
  auth,
  movies,
});
