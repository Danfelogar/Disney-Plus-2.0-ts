import { Routes, Route } from "react-router-dom";

import { PrivateLayout, PublicLayout } from "../components";
import { DetailsPage, HomePage, LoginPage, WelcomePage } from ".";
import { RoutesString } from "../utils";
import { NotFound404Page } from "./NotFound404Page";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path={RoutesString.Login} element={<LoginPage />} />
        <Route path={RoutesString.Welcome} element={<WelcomePage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Route>

      <Route element={<PrivateLayout />}>
        <Route path={RoutesString.Home} element={<HomePage />} />
        <Route path={RoutesString.Details} element={<DetailsPage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Route>
      <Route path="*" element={<NotFound404Page />} />
    </Routes>
  );
};
