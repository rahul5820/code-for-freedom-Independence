import React, { useState } from "react";
import { NavLink,Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "text-black hover:text-orange-600 transition-colors duration-200";
  const activeClass = "text-orange-600 font-bold";

  return (
    <>
      <nav className="bg-gradient-to-b from-orange-500 via-white to-green-600 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <NavLink
              to="/"
              className="text-orange-600 text-xl"
              onClick={() => setIsOpen(false)}
            >
              Project Tiranga
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/reels"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Reels
              </NavLink>
              <NavLink
                to="/contribute"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Contribute
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""} block`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""} block`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/reels"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""} block`
              }
              onClick={() => setIsOpen(false)}
            >
              Reels
            </NavLink>
            <NavLink
              to="/contribute"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""} block`
              }
              onClick={() => setIsOpen(false)}
            >
              Contribute
            </NavLink>
          </div>
        )}
      </nav>

   
      <Outlet />
    </>
  );
};

export default Navbar;
