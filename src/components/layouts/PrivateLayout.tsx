import { Link, Outlet } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

import logDisneyPlus from "../../assets/images/logo.svg";
import { RoutesString } from "../../utils";
import { usePrivateLayout } from "../../hooks";
import { SearchBar } from "..";

export const PrivateLayout = () => {
  const {
    //state
    isMenuVisible,
    credentials,
    arrMenu,
    //methods
    //functions
    changeLogOut,
    handleMouseEnter,
    handleMouseLeave,
  } = usePrivateLayout();
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 h-18 bg-[#090b13] flex justify-between items-center px-9 space-x-8 z-10 py-2">
        <div className="flex items-end gap-4">
          <Link
            to={RoutesString.Home}
            className="hidden sm:inline-block min-w-20 w-20 h-17 mt-1 max-h-17 font-sans text-transparent"
          >
            <img src={logDisneyPlus} alt="Disney+" />
          </Link>
          <SearchBar />
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center justify-end h-full m-0 p-0 relative mr-auto ml-6">
            {arrMenu.map((item) => (
              <a key={item.id} className="flex gap-1 items-center px-1 lg:px-3">
                <img
                  className="h-5 w-5 min-w-5 z-auto"
                  src={item.img}
                  alt={item.name}
                />
                <span className="text-white text-sm leading-tight tracking-wide whitespace-nowrap relative">
                  {item.name}
                  <div className="absolute bg-white h-0.5 w-auto left-0 right-0 bottom-[-6px] opacity-0 transform scale-x-0 transition-all duration-250 ease-in-out origin-left-center" />
                </span>
              </a>
            ))}
          </div>
          <div
            className="relative h-12 w-12 flex items-center justify-center cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {credentials.name && credentials.photo ? (
              <img
                className="ml-1 rounded-full w-full h-full"
                src={credentials.photo}
                alt={credentials.name}
              />
            ) : (
              <FaRegUserCircle color="#FFFF" size={30} />
            )}
            <div
              className={`absolute top-12 right-0 bg-black border border-gray-300 rounded-md shadow-lg p-2 text-sm tracking-wide transition-opacity duration-1000 ease-in-out ${
                isMenuVisible ? "opacity-100" : "opacity-0"
              } w-20 flex justify-center`}
            >
              <span className="w-20 text-white" onClick={changeLogOut}>
                Sign out
              </span>
            </div>
          </div>
        </div>
      </nav>
      {<Outlet />}
    </div>
  );
};
