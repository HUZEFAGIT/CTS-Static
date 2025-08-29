import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleMenu = () => {
    setDisplayMenu((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20 relative">
          {/* Logo section */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/public/assets/images/logos/CTS.png"
              alt="CaretoSure Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex space-x-1">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'text-[#33b5cc] bg-gray-100/50 scale-95'
                    : 'text-gray-700 hover:bg-gray-100/50 hover:scale-95'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'text-[#33b5cc] bg-gray-100/50 scale-95'
                    : 'text-gray-700 hover:bg-gray-100/50 hover:scale-95'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'text-[#33b5cc] bg-gray-100/50 scale-95'
                    : 'text-gray-700 hover:bg-gray-100/50 hover:scale-95'
                }`
              }
            >
              Doctors
            </NavLink>
            {/* <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'text-[#33b5cc] bg-gray-100/50 scale-95'
                    : 'text-gray-700 hover:bg-gray-100/50 hover:scale-95'
                }`
              }
            >
              Blog
            </NavLink> */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'text-[#33b5cc] bg-gray-100/50 scale-95'
                    : 'text-gray-700 hover:bg-gray-100/50 hover:scale-95'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-teal-600 focus:outline-none transition-colors duration-200"
              onClick={handleMenu}
              aria-label="Toggle menu"
            >
              {displayMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
            </button>
          </div>

          {/* Mobile menu */}
          {displayMenu && (
            <div className="absolute left-0 top-full w-full flex flex-col bg-white rounded-b shadow z-30 mt-2 pb-4 md:hidden border-b border-gray-200">
              <NavLink
                to="/about"
                onClick={() => setDisplayMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 border-t font-semibold text-gray-800 ${
                    isActive ? 'bg-gray-100/50 text-[#33b5cc]' : 'hover:bg-gray-100'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setDisplayMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 border-t font-semibold text-gray-800 ${
                    isActive ? 'bg-gray-100/50 text-[#33b5cc]' : 'hover:bg-gray-100'
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/doctors"
                onClick={() => setDisplayMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 border-t font-semibold text-gray-800 ${
                    isActive ? 'bg-gray-100/50 text-[#33b5cc]' : 'hover:bg-gray-100'
                  }`
                }
              >
                Doctors
              </NavLink>
              <NavLink
                to="/blog"
                onClick={() => setDisplayMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 border-t font-semibold text-gray-800 ${
                    isActive ? 'bg-gray-100/50 text-[#33b5cc]' : 'hover:bg-gray-100'
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setDisplayMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 border-t font-semibold text-gray-800 ${
                    isActive ? 'bg-gray-100/50 text-[#33b5cc]' : 'hover:bg-gray-100'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;