import React, { useState } from "react";
import axios from "axios";

const PasswordForm = ({ data }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters and include a number and special character.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Sending the data to the backend
      const response = await axios.post("https://udemy-j08o.onrender.com/user/signup", {
        email: data.email,
        name: data.fullName,
        password: password
      });

      if (response.status === 201) {
        alert("Account created successfully!");
        console.log(response.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error creating account.");
      console.log(err);
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
          <span className="mb-1 text-lg font-medium">Password</span>
          <input
            type="password"
            className="rounded-md text-lg px-4 py-3 border border-gray-300 focus:border-[#A435F0] focus:ring-2 focus:ring-[#A435F0] outline-none text-gray-900 w-full"
            value={password}
            placeholder="Enter a secure password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {error && <p className="text-red-500 italic text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
