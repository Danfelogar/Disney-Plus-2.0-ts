import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <div>
      <h1>PrivateLayout</h1>
      {<Outlet />}
    </div>
  );
};
