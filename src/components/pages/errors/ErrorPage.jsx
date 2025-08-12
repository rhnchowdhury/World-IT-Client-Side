import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center py-32">
      <h1 className="text-6xl">Oops!</h1>
      <p className="text-3xl py-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-5xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="mt-20 btn btn-xs btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
