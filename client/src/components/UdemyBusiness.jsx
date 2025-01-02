import { Link } from "react-router-dom";

export const UdemyBusiness = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-4 rounded-lg md:px-8 md:py-6 mx-4 sm:mx-8 md:mx-16 my-6">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p>
          <b>Training 2 or more people?</b> Get your team access to Udemy's top
          27,000+ courses
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/udemy-business/form"
          className="bg-white text-black px-4 py-2 rounded-md font-bold text-center"
        >
          Get Udemy Business
        </Link>
        <button className="border px-4 py-2 rounded-md font-bold text-center">
          Dismiss
        </button>
      </div>
    </div>
  );
};
