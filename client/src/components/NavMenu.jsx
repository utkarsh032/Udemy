import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavMenu = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState({});

  const togglePopover = (category) => {
    setIsPopoverOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const navItems = {
    Development: [
      "Web Development",
      "Mobile Development",
      "Programming Languages",
      "Game Development",
      "Database Design & Development",
      "Software Testing"
    ],
    Business: [
      "Entrepreneurship",
      "Communication",
      "Management",
      "Sales",
      "Business Strategy"
    ],
    "Finance & Accounting": [
      "Accounting & Bookkeeping",
      "Cryptocurrency & Blockchain",
      "Finance",
      "Financial Modeling & Analysis",
      "Investing & Trading"
    ],
    "IT & Software": [
      "IT Certifications",
      "Network & Security",
      "Hardware",
      "Operating Systems & Servers",
      "Other IT & Software"
    ],
    "Office Productivity": [
      "Microsoft",
      "Apple",
      "Google",
      "SAP",
      "Oracle",
      "Other Office Productivity"
    ],
    "Personal Development": [
      "Personal Transformation",
      "Personal Productivity",
      "Leadership",
      "Career Development",
      "Parenting & Relationships"
    ],
    Design: [
      "Web Design",
      "Graphic Design & Illustration",
      "Design Tools",
      "User Experience Design",
      "Game Design",
      "3D & Animation"
    ],
    Marketing: [
      "Digital Marketing",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Branding",
      "Marketing Fundamentals",
      "Marketing Analytics & Automation"
    ],
    "Health & Fitness": [
      "Fitness",
      "General Health",
      "Sports",
      "Nutrition & Diet",
      "Yoga",
      "Mental Health"
    ],
    Music: [
      "Instruments",
      "Music Production",
      "Music Fundamentals",
      "Vocal",
      "Music Techniques",
      "Music Software"
    ]
  };

  return (
    <div className="border-b">
      <div className="flex justify-center space-x-8 py-4">
        {Object.keys(navItems).map((item, index) => {
          const hasSubcategories = navItems[item].length > 0;

          return (
            <div
              key={index}
              className="relative group text-center text-sm font-medium"
            >
              <Link
                to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="hover:text-purple-500"
              >
                {item}
              </Link>
              {hasSubcategories && (
                <div className="absolute hidden group-hover:flex border border-gray-600 shadow-md z-10 mt-2 bg-black w-[100vh]">
                  <div className="flex px-4 py-2">
                    {navItems[item].map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/${item
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/ /g, "-")}/${subItem
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/ /g, "-")}`}
                        className="block px-4 py-2 text-white hover:text-blue-400"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
