import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

const topics = [
  "CSS",
  "JavaScript",
  "Web Development",
  "Front End Web Development",
  "PHP (programming language)",
  "HTML",
  "Web Design",
  "Responsive Design",
  "Bootstrap",
  "Sass",
  "React",
  "Tailwind CSS",
];

export const TopicsRecommended = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 10;

  const visibleTopics = topics.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < topics.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="px-4 sm:px-8 py-4 sm:py-6 m-4 sm:m-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Topics recommended for you</h2>
      <div className="relative">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {visibleTopics.map((topic, index) => (
            <div
              key={index}
              className="w-full sm:w-40 md:w-48 h-20 border rounded-lg p-2 flex items-center justify-center text-center text-sm sm:text-lg font-semibold hover:shadow-md transition-shadow bg-white"
            >
              <Link to={topic} className="truncate">
                {topic}
              </Link>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center border rounded-full w-10 h-10 text-lg font-bold shadow-md bg-white hover:shadow-lg transition-shadow"
        >
          <FaChevronRight />
        </button>

        {/* Previous Button */}
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center border rounded-full w-10 h-10 text-lg font-bold shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <FaChevronLeft />
          </button>
        )}
      </div>
    </div>

  );
};
