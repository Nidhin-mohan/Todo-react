import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="flex flex-col items-center justify-center mt-56 ">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <Link
          to="/"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
