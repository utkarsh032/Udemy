import React, { useState } from "react";

const PasswordForm = ({ data }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length >= 6) {
      alert("Account created successfully!");
      console.log({ ...data, password });
    } else {
      alert("Password must be at least 6 characters.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col items-center max-w-lg">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 leading-snug">
        Sign up and <span className="text-[#A435F0]">Start learning</span>
      </h1>

      <form
        className="flex flex-col space-y-4 w-full max-w-lg mx-auto p-6"
        onSubmit={handleSubmit}
      >
        <label className="text-[#A435F0] text-base flex flex-col items-start w-full">
          <span className="mb-1 text-lg font-medium">Password</span>
          <input
            type="password"
            className="rounded-md text-lg px-4 py-3 border border-gray-300 focus:border-[#A435F0] focus:ring-2 focus:ring-[#A435F0] outline-none text-gray-900 w-full"
            value={password}
            placeholder="Enter a secure password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
