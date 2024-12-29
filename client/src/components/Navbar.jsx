import Logo from '../assets/logo-udemy.svg'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="">
          <img src={Logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </Link>

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
          <Link className="text-md transition-colors duration-200">Explore</Link>
          <Link className="text-md transition-colors duration-200">
            Udemy Business
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
          <Link to="sign-up" className="text-md transition-colors duration-200">
            User
          </Link>
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
          <Link to="sign-up" className="text-md transition-colors duration-200">
            User
          </Link>
        </div>
      )}
    </div>
  )
}
