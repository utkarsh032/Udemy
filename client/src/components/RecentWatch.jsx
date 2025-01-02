import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function RecentWatch() {
  const [myCourse, setMyCourse] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNextIndex = () => {
    if (currentIndex + itemsPerPage < myCourse.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  useEffect(() => {
    fetch('https://udemy-j08o.onrender.com/course/get-courses')
      .then((response) => response.json())
      .then((data) => setMyCourse(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-4 sm:p-8 m-4 sm:m-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Let's Start Learning
        </h2>
        <Link className="text-[#7e22ce] underline font-bold" to="/">
          My Learning
        </Link>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {myCourse.slice(currentIndex, currentIndex + itemsPerPage).map((course, index) => (
            <div key={index} className="flex gap-4 border p-2 shadow-md">
              <div>
                <img className="w-36 h-auto" src={course.thumbnail} alt={course.title} />
              </div>
              <div>
                <p className="font-bold text-gray-500 text-xs">{course.subCategory}</p>
                <p className="font-bold text-gray-700 text-xl line-clamp-1">{course.title}</p>
                <p className="font-bold text-gray-500 text-sm">{course.category}</p>
                <p className="text-sm pt-3">
                  <b className="text-gray-600">Duration</b>: {course.duration}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">

          <button
            onClick={handlePrevIndex}
            className="bg-[#a855f7] hover:bg-[#7e22ce] text-white rounded-full p-2 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <FaAngleLeft />
          </button>

          <button
            onClick={handleNextIndex}
            className="bg-[#a855f7] hover:bg-[#7e22ce] text-white rounded-full p-2 disabled:opacity-50"
            disabled={currentIndex + itemsPerPage >= myCourse.length}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
