import { useEffect, useState } from 'react'
import { CoursePalette } from '../UI/Components/CoursePallete';
import { Link } from 'react-router-dom';

export default function LastSearched() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://udemy-1-bd7n.onrender.com/course")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="p-4 sm:p-8 m-4 sm:m-10">
      <h2 className="text-2xl font-bold mb-6">Because you searched for <Link to='/' className='text-[#7e22ce]'>“Topics”</Link></h2>
      {courses.length === 0 ? (
        <p className="text-gray-500">No courses available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {courses.slice(0, 4).map((course, _id) => (
            <CoursePalette
              key={course._id}
              _id={course._id}
              title={course.title}
              author="Unknown Author"
              rating={course.avgRating}
              reviews={course.reviews.length}
              price={course.salePrice}
              originalPrice={course.actualPrice}
              imageUrl={course.thumbnail}
              handleAddToCart={_id}
              handleAddToWishlist={_id}
            />
          ))}
        </div>
      )}
    </div>
  )
}
