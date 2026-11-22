
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">

      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-5 font-medium">

        <NavLink to="/" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <li className="py-1">HOME</li>
              <hr className={`${isActive ? "block" : "hidden"} border-none h-0.5 bg-blue-500 w-3/5 m-auto`} />
            </>
          )}
        </NavLink>

        <NavLink to="/doctors" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <li className="py-1">ALL DOCTORS</li>
              <hr className={`${isActive ? "block" : "hidden"} border-none h-0.5 bg-blue-500 w-3/5 m-auto`} />
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <li className="py-1">ABOUT</li>
              <hr className={`${isActive ? "block" : "hidden"} border-none h-0.5 bg-blue-500 w-3/5 m-auto`} />
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <li className="py-1">CONTACT</li>
              <hr className={`${isActive ? "block" : "hidden"} border-none h-0.5 bg-blue-500 w-3/5 m-auto`} />
            </>
          )}
        </NavLink>

      </ul>

      {/* Profile Dropdown */}
      <div className="flex items-center gap-4">

        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">

            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
            />

            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown"
            />

            {/* Dropdown Menu */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block z-20">

              <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4 shadow-lg">

                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>

                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>

                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>

              </div>

            </div>

          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium cursor-pointer hover:bg-blue-600 transition-all"
          >
            Create account
          </button>
        )}

      </div>

    </div>
  );
};

export default Navbar;
