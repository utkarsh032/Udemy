import { Link } from "react-router-dom";
import { CourseOverviewDetails } from "./CourseOverviewDetails";

const menuItems = [
  'Search',
  "Overview",
  "Q&A",
  "Notes",
  "Announcements",
  "Reviews",
  "Learning Tools",
];

export const CourseOverview = () => {
  return (
    <div className="p-4">
      <nav className="flex gap-6 border-b px-4 pb-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
            className="text-gray-700 font-bold hover:text-black hover:underline transition duration-300"
          >
            {item}
          </Link>
        ))}
      </nav>
      <CourseOverviewDetails />
    </div>
  );
}
