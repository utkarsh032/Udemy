import { useEffect, useState } from "react";
import { CoursePalette } from "../UI/Components/CoursePallete.jsx";

export default function CourseRecommend() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://udemy-j08o.onrender.com/course/get-courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="p-8 m-10">
      <h2 className="text-2xl font-bold mb-6">Recommended for you</h2>
      {courses.length === 0 ? (
        <p className="text-gray-500">No courses available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {courses.slice(0, 4).map((course) => (
            <CoursePalette
              key={course._id}
              title={course.title}
              author="Unknown Author"
              rating={course.avgRating}
              reviews={course.reviews.length}
              price={course.salePrice}
              originalPrice={course.actualPrice}
              imageUrl={course.thumbnail}
            />
          ))}
        </div>
      )}
    </div>
  );
}
