import React, { useState } from "react";
import axios from "axios";
import { MdNavigateNext } from "react-icons/md";

const apiKey = 'ema_live_boPoby372oMu83YDIz9QK3SAh8Q96CMsstbsaBy8';
const emailValidationUrl = "https://api.emailvalidation.io/v1/info";

export const EmailForm = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      setLoading(false);
      return;
    }

    try {
      // Constructing the API URL
      const apiUrl = `${emailValidationUrl}?apikey=${apiKey}&email=${email}`;

      // Making the request
      const response = await axios.get(apiUrl);

      // Check if the email is valid
      if (response.data.format_valid && response.data.smtp_check) {
        onNext({ email });
      } else {
        setError("Email does not exist. Please try again.");
      }
    } catch (error) {
      setError("Error validating email. Please try again later.");
    } finally {
      setLoading(false);
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
          <span className="mb-1 text-lg font-medium">Email Address</span>
          <input
            type="email"
            className="rounded-md text-lg px-4 py-3 border border-gray-300 focus:border-[#A435F0] focus:ring-2 focus:ring-[#A435F0] outline-none text-gray-900 w-full"
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {error && <p className="text-red-500 italic text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          {loading ? "Validating..." : "Next"}
          {!loading && <MdNavigateNext />}
        </button>
      </form>
    </div>
  );
};
