import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="bg-blue-500 text-white flex justify-evenly h-16 items-center">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "text-red-900 font-bold underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-red-900 font-bold underline" : ""
        }
      >
        Dashboard
      </NavLink>
      {!user ? (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-900 font-bold underline" : ""
          }
        >
          Login
        </NavLink>
      ) : (
        <button onClick={handleLogout} className="bg-red-300 px-5 py-1">
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
