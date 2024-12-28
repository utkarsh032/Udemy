import { CourseContentComponent } from "../../components/CourseContentComponent";
import { IoClose } from "react-icons/io5";

export const CoursePlaylistContent = () => {
  return (
    <div className=" top-0 right-0 h-full w-96 bg-white shadow-md rounded-md flex flex-col">
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <b>Course Content</b>
        <button className="text-gray-500 hover:text-black">
          <IoClose size={24} />
        </button>
      </div>

      <div className="overflow-y-auto flex-grow">
        <CourseContentComponent />
      </div>
    </div>
  );
};
