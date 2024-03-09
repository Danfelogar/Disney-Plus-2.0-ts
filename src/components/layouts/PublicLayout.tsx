import { Link, Outlet } from "react-router-dom";

import logDisneyPlus from "../../assets/images/logo.svg";
import { RoutesString } from "../../utils";

export const PublicLayout = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 h-18 bg-[#090b13] flex justify-between items-center px-9 space-x-8 z-10 py-2">
        <Link
          to={RoutesString.Welcome}
          className="inline-block w-20 h-17 mt-1 max-h-17 font-sans text-transparent"
        >
          <img src={logDisneyPlus} alt="Disney+" />
        </Link>
        <div className="flex justify-end">
          <Link
            to={RoutesString.Register}
            className="bg-black bg-opacity-60 px-4 py-2 uppercase tracking-wide border border-gray-100 rounded transition-all duration-200 ease-in-out hover:bg-white text-white hover:text-black hover:border-transparent"
          >
            Register
          </Link>
          <Link
            to={RoutesString.Login}
            className="ml-5 bg-black bg-opacity-60 px-4 py-2 uppercase tracking-wide border border-gray-100 rounded transition-all duration-200 ease-in-out hover:bg-white text-white hover:text-black hover:border-transparent"
          >
            Login
          </Link>
        </div>
      </nav>
      {<Outlet />}
    </div>
  );
};
