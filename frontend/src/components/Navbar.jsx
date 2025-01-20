import Logo from '../assets/logo-udemy.svg'
import { IoMdSearch } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const { name } = JSON.parse(user)
      setUserName(name)
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserName(null);
  };

  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="">
          <img src={Logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </Link>
        <Link className="text-md transition-colors duration-200">Explore</Link>
        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full text-md gap-2 w-1/2 bg-gray-50 shadow-sm">
          <IoMdSearch className="text-2xl mx-2 text-gray-600" />
          <input
            className="outline-none border-none p-2 w-full bg-transparent placeholder-gray-500"
            placeholder="Search for anything"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link className="text-md transition-colors duration-200">
            Udemy Business
          </Link>
          <Link to='/instructor' className="text-md transition-colors duration-200">
            Instructor
          </Link>
          <Link className="text-md transition-colors duration-200">
            My Learning
          </Link>
          <Link className="text-xl transition-colors duration-200">
            <FaRegHeart />
          </Link>
          <Link to="/cart" className="text-xl transition-colors duration-200">
            <FaOpencart />
          </Link>
          <Link className="text-xl transition-colors duration-200">
            <IoNotificationsOutline />
          </Link>
          <div className="relative">
            {userName ? (
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <p className="text-md font-medium border-2 p-2 rounded-lg flex items-center gap-2">
                  {userName} <TiArrowSortedDown />
                </p>
                {dropdownOpen && (
                  <div className="absolute z-10 right-0 mt-16 bg-white border rounded-lg shadow-lg w-40">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-md transition-colors duration-200">
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-purple-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-2">
          <div className="flex items-center border border-gray-300 rounded-full text-md gap-2 bg-gray-50 shadow-sm p-2">
            <IoMdSearch className="text-2xl mx-2 text-gray-600" />
            <input
              className="outline-none border-none p-2 w-full bg-transparent placeholder-gray-500"
              placeholder="Search for anything"
            />
          </div>
          <Link className="text-md transition-colors duration-200">Explore</Link>
          <Link className="text-md transition-colors duration-200">
            Udemy Business
          </Link>
          <Link className="text-md transition-colors duration-200">
            My Learning
          </Link>
          <Link className="text-md transition-colors duration-200">
            <FaRegHeart />
          </Link>
          <Link to="/cart" className="text-md transition-colors duration-200">
            <FaOpencart />
          </Link>
          <Link className="text-md transition-colors duration-200">
            <IoNotificationsOutline />
          </Link>
        </div>
      )}
    </div>
  );
}
