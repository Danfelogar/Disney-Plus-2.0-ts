import { Link } from "react-router-dom";

import { RoutesString } from "../utils";

export const NotFound404Page = () => {
  return (
    <div className="pt-20 flex flex-col items-center justify-center min-h-[400px] py-6 gap-4">
      <div className="flex flex-col items-center justify-center space-y-2 ">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
          404 Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Oops! The page you are looking for could not be found.
        </p>
      </div>
      <Link
        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        to={RoutesString.Home}
      >
        Go Back
      </Link>
    </div>
  );
};
