import { Routes, Route } from "react-router-dom";

import { PrivateLayout, PublicLayout } from "../components";
import { DetailsPage, HomePage, LoginPage, WelcomePage } from ".";
import { RoutesString } from "../utils";
import { NotFound404Page } from "./NotFound404Page";
import { PrivateRoute } from "./PrivateRouter";
import { PublicRoute } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path={RoutesString.Welcome}
          element={
            <PublicRoute>
              <WelcomePage />
            </PublicRoute>
          }
        />
        <Route
          path={RoutesString.Login}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound404Page />} />
      </Route>

      <Route element={<PrivateLayout />}>
        <Route
          path={RoutesString.Home}
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path={RoutesString.Details}
          element={
            <PrivateRoute>
              <DetailsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound404Page />} />
      </Route>
      <Route path="*" element={<NotFound404Page />} />
    </Routes>
  );
};
