import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPageAnimate from '../../assets/AuthUI.png';
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const API_URL = 'https://udemy-k17u.onrender.com';

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Login response:", response);

      // Store the user data in localStorage
      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user)); // Save user data to localStorage
      alert(response.data.message || "Login successful!");

      // Redirect to home or desired page after login
      navigate("/");

    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "An error occurred while logging in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center p-12'>
      <div className='w-1/2'>
        <img src={AuthPageAnimate} alt="Authentication Illustration" />
      </div>
      <div className="container mx-auto px-6 py-10 flex flex-col items-center max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 leading-snug">
          Sign In to <span className="text-[#A435F0]">Start Learning</span>
        </h1>
        <form
          className="flex flex-col space-y-4 w-full max-w-lg mx-auto p-6"
          onSubmit={handleSignIn}
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
          <label className="text-[#A435F0] text-base flex flex-col items-start w-full relative">
            <span className="mb-1 text-lg font-medium">Password</span>
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              className="rounded-md text-lg px-4 py-3 border border-gray-300 focus:border-[#A435F0] focus:ring-2 focus:ring-[#A435F0] outline-none text-gray-900 w-full"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-12 transform  text-gray-500 hover:text-[#A435F0]"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />} {/* Toggle eye icon */}
            </button>
          </label>
          {error && <p className="text-red-500 italic text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] 
                        hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg 
                        hover:shadow-xl transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#A435F0] font-bold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};