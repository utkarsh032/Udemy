import React from "react";
import udemyBusinessLogo from '../../assets/udemy-business-logo.svg'
import logo1 from '../../assets/box-light.svg'
import logo2 from '../../assets/nasdaq-light.svg'
import logo3 from '../../assets/volkswagen-light.svg'
import logo4 from '../../assets/cisco_logo.svg'
import logo5 from '../../assets/citi_logo.svg'
import logo6 from '../../assets/ericsson_logo.svg'
import logo7 from '../../assets/hewlett_packard_enterprise_logo.svg'
import logo8 from '../../assets/samsung_logo.svg'
import { Link } from "react-router-dom";

export const UdemyBusinessForm = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 shadow-lg border-b">
        <img
          src={udemyBusinessLogo}
          alt="Udemy Business Logo"
          className="h-8 w-auto"
        />
        <button className="border-2 font-bold px-4 py-2 rounded-lg ">
          Login
        </button>
      </nav>


      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Get your demo</h1>
          <p className="mb-6 text-gray-700 text-lg">
            Tell us your needs and we’ll start on a custom plan to drive results.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">With Udemy as your learning partner, you can:</h2>
              <ul className="space-y-2">
                {[
                  "Train your entire workforce with over 27,000+ courses in 15 languages",
                  "Prep employees for over 200 industry-recognized certification exams",
                  "Develop highly skilled tech teams in risk-free practice environments",
                  "Identify emerging skills gaps, learning trends, and industry benchmarks",
                  "Integrate content with your existing learning management system",
                ].map((item, index) => (
                  <li key={index} className="flex items-start leading-10">
                    <span className="text-green-500 mr-2 ">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg font-bold">
                Trusted by over 16,000 companies and millions of learners around the world
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8].map(
                  (logo, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap"
                    >
                      <img src={logo} alt={logo} />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right Section */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Work Email *"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone Number *"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <select
                className="border border-gray-300 rounded-md p-2 w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Where are you located *
                </option>
              </select>
              <input
                type="text"
                placeholder="Company Name *"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Company Size *
                  </option>
                </select>
                <select
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Number of learners *
                  </option>
                </select>
              </div>
              <select
                className="border border-gray-300 rounded-md p-2 w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Job Title *
                </option>
              </select>
              <textarea
                placeholder="What are your organization's training needs? (Optional)"
                className="border border-gray-300 rounded-md p-2 w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 px-4 rounded-md w-full"
              >
                Submit
              </button>
              <p className="text-sm text-gray-500">
                By signing up, you agree to our terms and privacy policy.
                <Link to="/" className="text-blue-500">
                  terms
                </Link>{" "}
                and{" "}
                <Link to="/" className="text-blue-500">
                  privacy policy
                </Link>
                You agree that we can contact you about Udemy and use data from third parties to personalize your experience.
                .
              </p>
            </form>

          </div>

        </div>
      </div>

    </>

  );
};