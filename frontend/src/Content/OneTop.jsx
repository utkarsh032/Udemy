import TopCoursesThumbNail from '../assets/1672410_9ff1_5.webp'

const TopCourses = [
  {
    id: 1,
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    description:
      "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
    author: "Jonas Schmedtmann",
    updatedDate: "November 2024",
    rating: 4.6,
    reviews: 26230,
    price: 549,
    originalPrice: 3499,
    imageUrl: TopCoursesThumbNail,
    bestseller: true,
  },
];

export const OneTop = () => {
  const course = TopCourses[0];

  return (
    <div className="px-4 sm:px-8 py-4 sm:py-6 m-4 sm:m-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Our top pick for you</h2>

      <div className="flex flex-col sm:flex-row bg-white border shadow-md p-4 sm:p-6 rounded-lg">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex-shrink-0">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="mt-4 sm:mt-0 sm:ml-6 w-full sm:w-2/3">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
            {course.title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {course.description}
          </p>
          <p className="text-gray-500 mt-3 text-xs sm:text-sm">
            By {course.author} <br />
            Updated{" "}
            <span className="font-semibold text-black">
              {course.updatedDate}
            </span>
          </p>

          <div className="flex items-center mt-3 text-sm sm:text-base">
            <span className="text-yellow-500 font-bold text-base sm:text-lg">
              {course.rating}
            </span>
            <span className="text-gray-600 ml-2">
              ({course.reviews.toLocaleString()})
            </span>
            {course.bestseller && (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 ml-3 rounded-full">
                Bestseller
              </span>
            )}
          </div>

          <div className="flex items-center mt-4 text-sm sm:text-lg">
            <span className="font-bold text-green-600">
              ₹{course.price}
            </span>
            <span className="text-gray-400 line-through ml-2">
              ₹{course.originalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
