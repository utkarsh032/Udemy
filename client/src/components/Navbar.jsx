import Logo from '../assets/logo-udemy.svg'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className='p-4 border-b'>
      <div className='flex items-center justify-between'>
        <Link to="/" className=''>
          <img src={Logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </Link>

        <Link className="text-md   transition-colors duration-200">Explore</Link>

        <div className='flex items-center border border-gray-300 rounded-full text-md gap-2 w-1/2   bg-gray-50 shadow-sm'>
          <IoMdSearch className='text-2xl mx-2 text-gray-600' />
          <input
            className='outline-none border-none p-2 w-full bg-transparent placeholder-gray-500'
            placeholder='Search for anything'
          />
        </div>

        <Link className="text-md   transition-colors duration-200">Udemy Business</Link>

        <Link className="text-md   transition-colors duration-200">My Learning</Link>

        <Link className="text-xl  transition-colors duration-200">
          <FaRegHeart />
        </Link>

        <Link className="text-xl  transition-colors duration-200 ">
          <FaOpencart className='' />
        </Link>

        <Link className="text-xl  transition-colors duration-200">
          <IoNotificationsOutline />
        </Link>

        <Link to='sign-up' className="text-md   transition-colors duration-200">User</Link>
      </div>
    </div>

  )
}
