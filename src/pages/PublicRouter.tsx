import { useSelector } from "react-redux";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { RootState } from "../redux/store";
import { RoutesString } from "../utils";

export const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  return isLogin ? (
    <Navigate to={RoutesString.Home} state={{ from: location }} />
  ) : (
    children
  );
};
