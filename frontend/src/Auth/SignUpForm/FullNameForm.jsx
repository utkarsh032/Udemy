import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

export const FullNameForm = ({ onNext }) => {
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    if (trimmedName.length > 0) {
      onNext({ fullName: trimmedName });
    } else {
      setError('Please enter your full name.');
    }
  };


  return (
    <div className="container mx-auto px-6 py-10 flex flex-col items-center max-w-lg">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 leading-snug">
        Sign up and <span className="text-[#A435F0]">Start learning</span>
      </h1>

      <form
        className="flex flex-col space-y-4 w-full"
        onSubmit={handleSubmit}
      >
        <label className="text-[#A435F0] text-base flex flex-col items-start w-full">
          <span className="mb-1 text-lg font-medium">Full Name</span>
          <input
            type="text"
            className="rounded-md text-lg px-4 py-3 border border-gray-300 focus:border-[#A435F0] focus:ring-2 focus:ring-[#A435F0] outline-none text-gray-900 w-full"
            value={fullName}
            placeholder="Enter your full name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <p className="text-red-500 italic text-sm">{error}</p>
        <button
          type="submit"
          className="w-full flex items-center px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          Next<MdNavigateNext />
        </button>
      </form>
    </div>

  );
};


