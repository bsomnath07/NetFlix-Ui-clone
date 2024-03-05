import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {/* <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" bg-gray-200 border p-2 rounded w-[200px] h-[40px]"
      /> */}
      {user?.email ? (
        <div className="flex  justify-between space-x-4">
          <Link to="/account">
            <button className="bg-red-600 px-4 py-1 rounded text-white font-medium ">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 px-4 py-1 rounded text-white font-medium"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex  justify-between space-x-4">
          <Link to="/login">
            <button className="bg-red-600 px-4 py-1 rounded text-white font-medium ">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-4 py-1 rounded text-white font-medium">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
