import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/`, {
        state: location.pathname,
     
      });
         console.log(location.pathname);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-center">Redirecting to you in {count} seconds</h1>

      <img
        className="h-16 w-16"
        src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
        alt=""
      />
    </div>
  );
};

export default Spinner;
