import LogoImg from '../assets/logo-udemy-inverted.svg'
import { Link } from 'react-router-dom';
import img1 from '../assets/eventbrite-light.svg'
import img2 from '../assets/box-light.svg'
import img3 from '../assets/nasdaq-light.svg'
import img4 from '../assets/netapp-light.svg'
import img5 from '../assets/volkswagen-light.svg'


export default function Foooter() {
  const footerItems = {
    "Certifications by Issuer": [
      "Amazon Web Services (AWS) Certifications",
      "Six Sigma Certifications",
      "Microsoft Certifications",
      "Cisco Certifications",
      "Tableau Certifications",
      "See all Certifications"
    ],
    "Certifications by Skill": [
      "Cybersecurity Certification",
      "Project Management Certification",
      "Cloud Certification",
      "Data Analytics Certification",
      "HR Management Certification",
      "See all Certifications"
    ],
    "Web Development": [
      "Web Development",
      "JavaScript",
      "React JS",
      "Angular",
      "Java"
    ],
    "Data Science": [
      "Data Science",
      "Python",
      "Machine Learning",
      "ChatGPT",
      "Deep Learning"
    ],
    "Communication": [
      "Communication Skills",
      "Presentation Skills",
      "Public Speaking",
      "Writing",
      "PowerPoint"
    ],
    "Business Analytics & Intelligence": [
      "Microsoft Excel",
      "SQL",
      "Microsoft Power BI",
      "Data Analysis",
      "Business Analysis"
    ],
    "Leadership": [
      "Leadership",
      "Management Skills",
      "Project Management",
      "Personal Productivity",
      "Emotional Intelligence"
    ],
    "IT Certifications": [
      "Amazon AWS",
      "AWS Certified Cloud Practitioner",
      "AZ-900: Microsoft Azure Fundamentals",
      "AWS Certified Solutions Architect - Associate",
      "Kubernetes"
    ],
    "About": [
      "About us",
      "Careers",
      "Contact us",
      "Blog",
      "Investors"
    ],
    "Discovery Udemy": [
      "Get the app",
      "Teach on Udemy",
      "Plans and Pricing",
      "Affiliate",
      "Help and Support"
    ],
    "Udemy for Business": [
      "Udemy Business"
    ],
    "Legal & Accessibility": [
      "Accessibility statement",
      "Privacy policy",
      "Sitemap",
      "Terms"
    ]
  };

  const companyLogo = [img1, img2, img3, img4, img5]

  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">

          {/* Top Companies Section */}
          <div className='border-b flex flex-col sm:flex-row justify-between items-center'>
            <div className='mb-6 sm:mb-0'>
              <p className='text-lg font-bold'>
                Top companies choose <Link className='text-[#d29ef4]' to='/'>Udemy Business</Link> to build in-demand career skills.
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              {
                companyLogo.map((logo, index) => (
                  <div key={index}>
                    <img src={logo} className="h-8" alt={`Company logo ${index}`} />
                  </div>
                ))
              }
            </div>
          </div>

          {/* Explore Top Skills Section */}
          <h2 className="text-start text-2xl mb-8 font-bold">
            Explore top skills and certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Object.keys(footerItems).map((category) => (
              <div key={category} className="footer-column">
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {footerItems[category].map((item, index) => (
                    <li key={index} className="text-sm hover:text-gray-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom Section */}
          <div className='border-t my-2 py-4 flex flex-col sm:flex-row justify-between items-center'>
            <div className='flex items-center'>
              <Link to="/" className=''>
                <img src={LogoImg} alt="Logo" className="h-10 w-auto cursor-pointer" />
              </Link>
              <p className='space-x-4 mt-2 sm:mt-0'>© 2024 Udemy, Inc.</p>
            </div>
            <div className='mt-2 sm:mt-0 flex gap-4'>
              <p>Cookie Settings</p>
              <p>English</p>
            </div>
          </div>

        </div>
      </footer>
    </div>

  )
}
