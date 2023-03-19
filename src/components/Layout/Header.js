import React from "react";
import { toast } from "react-hot-toast";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Header = () => {
  const [auth, setAuth] = useAuth();

   const handleLogout = () => {
     setAuth({
       ...auth,
       user: null,
       token: "",
     });
     localStorage.removeItem("auth");
     toast.success("Logged out succesfuly");
   };


  return (
    <nav className="sticky top-0  bg-body-tertiary py-3 shadow-lg  ">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl hover: font-semibold text-black">
            TodoList
          </Link>
          <button
            className="md:hidden rounded-lg text-black hover:text-gray-900 focus:outline-none focus:shadow-outline-purple"
            aria-label="Toggle Menu"
          ></button>
        </div>

        <div className="text-xl hidden md:flex flex-col md:flex-row md:-mx-4">
          <NavLink
            to="/"
            exact
            className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
          >
            Home
          </NavLink>

          {!auth.user ? (
            <>
              <NavLink
                to="/register"
                className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
              >
                Login
              </NavLink>
            </>
          ) : (
            <>
             
              <NavLink
                to="/user/task"
                className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
              >
                <span> Task</span>
              </NavLink>
              <NavLink
                to="/login"
                onClick={handleLogout}
                className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
              >
                logOut
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
