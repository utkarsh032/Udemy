import React, { useState } from "react";
import axios from "axios";

const EmailVerification = ({ data, onNext }) => {
  const [code, setCode] = useState("");

  const sendVerificationCode = async () => {
    try {
      await axios.post("https://email-verification-api.com/send", {
        email: data.email,
      });
      alert("Verification code sent to your email.");
    } catch (error) {
      alert("Error sending verification code.");
    }
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://email-verification-api.com/verify", {
        email: data.email,
        code,
      });
      if (response.data.verified) {
        onNext({ isEmailVerified: true });
      } else {
        alert("Invalid verification code.");
      }
    } catch (error) {
      alert("Error verifying code.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col items-center max-w-lg">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 leading-snug">
        Sign up and <span className="text-[#A435F0]">Start learning</span>
      </h1>
      <div className="flex flex-col items-center space-y-6  p-6 w-full max-w-lg mx-auto">
        <button
          onClick={sendVerificationCode}
          className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          Send Verification Code
        </button>

        <form
          className="flex flex-col space-y-4 w-full"
          onSubmit={verifyCode}
        >
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
            className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#A435F0] to-[#7A28C6] hover:from-[#7A28C6] hover:to-[#A435F0] text-white font-bold text-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Verify
          </button>
        </form>
      </div>
    </div>

  );
};

export default EmailVerification;
