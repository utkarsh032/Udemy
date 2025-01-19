import { LuTrophy } from "react-icons/lu";
import { FaShare } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

import Udemy from '../../assets/logo-udemy-inverted.svg';

export const CoursePlaylistNav = () => {
  return (
    <div className="sticky top-0 z-50 px-4 py-3 bg-gray-900 text-white shadow-md flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-gray-700">
      <div className="flex items-center gap-4">
        <img src={Udemy} alt="Udemy" className="h-10" />
        <div className="w-px h-6 bg-gray-500"></div>
        <p className="text-sm font-medium">
          The Ultimate React Course 2024: React, Next.js, Redux & More
        </p>
      </div>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 focus:outline-none">
          <FaRegStar className="" />
          Leave Rating
        </button>
        <div className="flex items-center gap-2">
          <div className="border-2 border-r-blue-400 border-t-blue-400 rounded-full p-2 ">
            <LuTrophy />
          </div>
          <span className="text-sm">Your Progress</span>
          <FaAngleDown />
        </div>
        <div className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-800 hover:border-gray-600">
          <span>Share</span>
          <FaShare />
        </div>
        <div className="border border-gray-700 rounded-lg p-2 cursor-pointer hover:bg-gray-800 hover:border-gray-600">
          <CiMenuKebab size={20} />
        </div>
      </div>
    </div>
  );
};
