import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-700 mb-6">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
