import { useState } from "react";
import { Api } from "../../context/Api";

const EmailVerification = ({ data, onNext }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // https://udemy-j08o.onrender.com/user/send-otp
  const sendVerificationCode = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await Api.post('/user/send-otp', { email: data.email });
      alert(response.data.message || "Verification code sent to your email.");
    } catch (error) {
      setError(error.response?.data?.message || "Error sending verification code.");
    } finally {
      setLoading(false);
    }
  };


  const verifyCode = async (e) => {
    e.preventDefault();
    setError("");

    if (!/^\d{6}$/.test(code)) {
      setError("Invalid code format. Please enter a 6-digit code.");
      return;
    }

    setLoading(true);
    try {
      const response = await Api.post("/user/verify-otp", { email: data.email, code });
      if (response.data.verified) {
        alert("Email verified successfully!");
        onNext({ isEmailVerified: true });
      } else {
        setError("Invalid verification code.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Error verifying code.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto px-6 py-10 flex flex-col items-center max-w-lg">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 leading-snug">
        Sign up and <span className="text-[#A435F0]">Start learning</span>
      </h1>
      <div className="flex flex-col items-center space-y-6 p-6 w-full max-w-lg mx-auto">
        <button
          onClick={sendVerificationCode}
          disabled={loading}
          className={`w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] 
            hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg 
            hover:shadow-xl transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : "Send Verification Code"}
        </button>
        {error && <p className="text-red-500 italic text-sm">{error}</p>}
        <form className="flex flex-col space-y-4 w-full" onSubmit={verifyCode}>
          <label className="text-[#A435F0] text-base flex flex-col items-start w-full">
            <span className="mb-1 text-lg font-medium">Verification Code</span>
            <input
              type="text"
              className="rounded-md text-lg px-4 py-3 border border-gray-300 focus:border-[#A435F0] focus:ring-2 focus:ring-[#A435F0] outline-none text-gray-900 w-full"
              value={code}
              placeholder="Enter your verification code"
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] 
              hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg 
              hover:shadow-xl transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
