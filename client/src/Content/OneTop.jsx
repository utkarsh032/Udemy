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
    <div className=" px-8 py-6  m-10">
      <h2 className="text-2xl font-bold mb-4">Our top pick for you</h2>

      <div className="flex bg-white border shadow-md p-6">
        <div className="w-1/2">
          <img
            src={course.imageUrl}
            alt={course.title}
            className=""
          />
        </div>

        <div className="ml-6  w-2/3">
          <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
          <p className="text-gray-600 mt-2">{course.description}</p>
          <p className="text-gray-500 mt-3 text-sm">
            By {course.author} <br />
            Updated{" "}
            <span className="font-semibold text-black">
              {course.updatedDate}
            </span>
          </p>

          <div className="flex items-center mt-3">
            <span className="text-yellow-500 text-lg font-bold">
              {course.rating}
            </span>
            <span className="text-gray-600 ml-2 text-sm">
              ({course.reviews.toLocaleString()})
            </span>
            {course.bestseller && (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 ml-3 rounded-full">
                Bestseller
              </span>
            )}
          </div>

          <div className="flex items-center mt-4">
            <span className="text-lg font-bold text-green-600">
              ₹{course.price}
            </span>
            <span className="text-gray-400 text-sm line-through ml-2">
              ₹{course.originalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
