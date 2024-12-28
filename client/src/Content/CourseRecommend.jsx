import React from 'react';
import { Courses } from '../Data/Courses';
import { CoursePalette } from '../UI/Components/CoursePallete.jsx';

export default function CourseRecommend() {
  return (
    <div className="p-8 m-10">
      <h2 className="text-2xl font-bold mb-6">Top Courses</h2>
      {Courses.length === 0 ? (
        <p className="text-gray-500">No courses available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Courses.slice(0, 4).map((course) => (
            <CoursePalette
              key={course.id}
              {...course}
            />
          ))}
        </div>
      )}
    </div>
  );
}
