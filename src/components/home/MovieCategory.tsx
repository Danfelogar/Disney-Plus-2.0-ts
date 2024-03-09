import { Link } from "react-router-dom";
import { MovieFront } from "../../types/movies";
import { RoutesString } from "../../utils";

export const MovieCategory = ({
  title,
  movies,
}: {
  title: string;
  movies: MovieFront[];
}) => {
  const skeletonArray = Array.from({ length: 4 });

  return (
    <div className="p-0 pb-7">
      <h4 className="text-2xl text-white font-semibold mb-4">{title}</h4>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-6 md:grid-cols-2">
        {movies &&
          movies.map((movie, key) => (
            <div
              key={key}
              className="flex w-full h-64 relative overflow-hidden rounded-lg border-3 border-custom-gray transition-all duration-250 ease-custom transform hover:scale-105 hover:border-custom-gray-hover hover:shadow-custom-shadow-hover"
            >
              <Link to={`${RoutesString.Details}/${movie.idFront}`}>
                <img
                  src={movie.cardImgFront}
                  alt={movie.titleFront}
                  className="inset-0 block w-full h-full object-cover opacity-100 absolute transition-opacity duration-500 z-10 top-0"
                />
              </Link>
            </div>
          ))}
        {!movies.length &&
          skeletonArray.map((_, index) => (
            <div
              key={index}
              className="flex w-full h-64 relative overflow-hidden rounded-lg border-3 border-gray-300 transition-all duration-250 ease-in-out transform hover:scale-105 hover:border-gray-400 hover:shadow-lg animate-pulse"
            >
              <div className="w-full h-full bg-gray-200 rounded-lg"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
