import { FaStar } from 'react-icons/fa';
import { courseContent } from '../../Data/CourseContent';

export const CourseOverviewDetails = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{courseContent.courseName}</h2>
      </div>

      <div className="flex items-center gap-8 text-center mb-4">
        <div>
          <div className="flex items-center justify-center gap-1 text-lg font-bold">
            4.4 <FaStar className="text-yellow-500" />
          </div>
          <p className="text-sm text-gray-500">13,004 ratings</p>
        </div>
        <div>
          <p className="text-lg font-bold">79,133</p>
          <p className="text-sm text-gray-500">Students</p>
        </div>
        <div>
          <p className="text-lg font-bold">19 hours</p>
          <p className="text-sm text-gray-500">Total</p>
        </div>
      </div>

      <div className="border-t pt-4 flex gap-8 ">
        <h3 className="text-lg mb-2">By the Numbers</h3>
        <div>
          <p className="flex items-center">
            <span className="font-semibold mr-2">Skill level:</span> All Levels
          </p>
          <p className="flex items-center">
            <span className="font-semibold mr-2">Students:</span> 79,133
          </p>
          <p className="flex items-center">
            <span className="font-semibold mr-2">Languages:</span> English
          </p>
          <p className="flex items-center">
            <span className="font-semibold mr-2">Captions:</span> Yes
          </p>
        </div>

        <div>
          <p className="flex items-center">
            <span className="font-semibold mr-2">Lectures:</span> 210
          </p>
          <p className="flex items-center">
            <span className="font-semibold mr-2">Video:</span> 19 total hours
          </p>
        </div>
      </div>

    </div>
  );
};
