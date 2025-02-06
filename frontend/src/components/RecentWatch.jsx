import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";

export default function RecentWatch() {
  const [myCourse, setMyCourse] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCourse, setHoveredCourse] = useState(null); // Track hovered course ID
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
    fetch('https://udemy-k17u.onrender.com/course')
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
            <div
              key={course._id} // Use course.id as the key
              className="flex gap-4 border p-2 shadow-md hover:shadow-lg transition-shadow duration-300 relative rounded-lg group"
              onMouseEnter={() => setHoveredCourse(course.id)} // Set hovered course ID
              onMouseLeave={() => setHoveredCourse(null)} // Reset hovered course ID
            >
              <div className="relative flex-shrink-0">
                <img
                  className="w-36 h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={course.thumbnail}
                  alt={course.title}
                />
                {/* Play Button Overlay */}
                {hoveredCourse === course.id && (
                  <Link
                    to="/course/learn"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg transition-opacity duration-300"
                  >
                    <div className="bg-white rounded-full p-3 transform scale-100 hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-[#7e22ce] text-2xl" />
                    </div>
                  </Link>
                )}
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
            className="bg-[#a855f7] hover:bg-[#7e22ce] text-white rounded-full p-2 disabled:opacity-50 transition-colors duration-300"
            disabled={currentIndex === 0}
          >
            <FaAngleLeft />
          </button>

          <button
            onClick={handleNextIndex}
            className="bg-[#a855f7] hover:bg-[#7e22ce] text-white rounded-full p-2 disabled:opacity-50 transition-colors duration-300"
            disabled={currentIndex + itemsPerPage >= myCourse.length}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}