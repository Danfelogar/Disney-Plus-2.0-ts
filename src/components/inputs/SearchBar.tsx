import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSearch } from "../../hooks";
import { RoutesString } from "../../utils";

export const SearchBar = () => {
  const {
    //state
    movieFilterByTitle,
    searchText,
    //methods
    setSearchText,
    //functions
    handleSearch,
    clearAll,
  } = useSearch();

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSearch}
        className={`flex relative items-center gap-1 border pl-2 rounded-lg border-gray-500 bg-gray-200`}
      >
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={`flex-grow text-base font-normal text-gray-800 bg-transparent w-92 placeholder-gray-500 focus:outline-none focus:ring-0`}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-900 text-white p-2 rounded-r-md"
        >
          <FaSearch />
        </button>
      </form>
      {movieFilterByTitle.length > 0 && (
        <div className="absolute top-14 flex items-center justify-center z-50">
          <div className="bg-gray-200 py-3 rounded shadow-lg w-[13.3rem]">
            <ul className="divide-y divide-gray-300">
              {movieFilterByTitle.map((movie) => (
                <Link
                  to={`${RoutesString.Details}/${movie.idFront}`}
                  onClick={clearAll}
                  key={movie.idFront}
                  className="flex cursor-pointer items-center bg-transparent hover:bg-gray-300 space-x-4 p-3 py-3"
                >
                  <img
                    src={movie.cardImgFront}
                    alt={movie.titleFront}
                    className="w-16 h-16"
                  />
                  <div className="flex items-start h-full">
                    <h3 className="text-md font-semibold line-clamp-2 leading-4">
                      {movie.titleFront}
                    </h3>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
