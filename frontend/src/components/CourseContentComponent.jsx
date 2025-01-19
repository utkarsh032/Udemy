import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaFolder } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";

import { courseContent } from "../Data/CourseContent";

export const CourseContentComponent = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-4 ">
      {/* Course Name */}
      <h2 className="text-xl font-bold mb-4 line-clamp-1">{courseContent.courseName}</h2>

      {courseContent.sections.map((section, index) => (
        <div key={index} className="">
          <div
            className="flex items-center justify-between border-b p-3 cursor-pointer"
            onClick={() => toggleSection(index)}
          >
            <div>
              <h3 className="font-semibold">{section.sectionTitle}</h3>
              <p className="text-sm text-gray-500">
                {section.progress} | {section.duration}
              </p>
            </div>
            {expandedSections[index] ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {/* Section  */}
          {expandedSections[index] && (
            <div className="mt-2 ">
              {section.lessons.map((lesson, lessonIndex) => (
                <div
                  key={lessonIndex}
                  className="flex flex-col py-2 px-3 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={lesson.completed}
                      readOnly
                      className="form-checkbox"
                    />
                    <span>{lesson.title}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 flex items-center px-6 gap-2">
                      <MdOndemandVideo />
                      {lesson.duration}
                    </span>
                    {lesson.resources && (
                      <button className="flex items-center gap-1 ">
                        <FaFolder />
                        <span className="text-gray-500">Resources</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
