import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./landing-page/LandingPage";
import Faq from "./landing-page/Faq";
import MarkeetingPartners from "./landing-page/MarketingPartners";
import PrivacyPolicy from "./landing-page/PrivacyPolicy";
import TermsAndConditions from "./landing-page/TermsAndConditions";
import Ssdi from "./landing-page/Ssdi";
import ContactUs from "./landing-page/ContactUs";

const App = () => {
  return (
    <div className="app-layout-simple flex flex-auto flex-col min-h-screen bg-white border-t">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row bg-[#2F3192] text-white border-t-2 h-auto p-8">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <Link to="/">
            <img
              src="/Disability-care-logo.png"
              alt="Your Disability Advocateability Adovocate Logo"
              className="w-32 md:w-40 mx-auto md:mx-0"
            />
          </Link>
        </div>
        <div className="flex-1 px-8 md:px-20 text-center md:text-start mb-4 md:mb-0">
          <h1 className="font-bold text-white text-3xl md:text-[40px] inline-block">
            You don’t pay unless we <br /> succeed!
          </h1>
        </div>
        <div className="flex flex-col text-center md:text-start space-y-2 md:space-y-4 px-4 md:px-0">
          <h1 className="text-xl md:text-2xl text-white font-bold">
            Call For Free Consultation
          </h1>
          <Link
            to="/contact-us"
            className="bg-[#910E0E] text-white font-bold py-2 px-4 rounded hover:bg-red-700 text-lg md:text-xl inline-block mx-auto md:mx-0"
          >
            See if You Qualify?
          </Link>
          <p className="text-xl font-bold">
            Call Us:{" "}
            <a href="tel:+1(773)683-3032" className="text-white">
            +1(773)683-3032
            </a>
          </p>
        </div>
      </div>

      <header className="w-full z-20">
        <nav className="bg-blue-900 text-white p-4">
          <div className="container mx-auto flex justify-end">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="relative">
                <div className="relative group">
                  <button className="text-white hover:underline flex items-center">
                    Learn About SSDI
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>

                  <div className="absolute left-0 hidden group-hover:block text-black bg-white rounded shadow-md w-60">
                    <Link
                      to="/terms-condition"
                      className="px-4 py-2 hover:bg-gray w-full text-left block hover:bg-gray-100"
                    >
                      Terms and Conditions
                    </Link>
                    {/* <Link
                      to="/faqs"
                      className="px-4 py-2 hover:bg-gray w-full text-left block border hover:bg-white"
                    >
                      Faq’s
                    </Link> */}
                    <Link
                      to="/privacy-policy"
                      className="px-4 py-2 hover:bg-gray w-full text-left block border hover:bg-white"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/marketing-partners"
                      className="px-4 py-2 hover:bg-gray w-full text-left block border hover:bg-white"
                    >
                      Marketing Partners
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/ssdi" className="hover:underline">
                  SSDI
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Routes Definition */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/marketing-partners" element={<MarkeetingPartners />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
        <Route path="/ssdi" element={<Ssdi />} />
      </Routes>

      {/* Footer Section */}
      <footer className="text-white py-12 bg-[#001c31]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <h3 className="text-xl font-bold mb-4 text-white">
                yourdisabilityadvocate.com
              </h3>
            </Link>
            <div className="h-1 w-16 bg-cyan-400 mb-6"></div>
            <Link to="/contact-us">
              <button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </Link>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-cyan-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ssdi" className="hover:text-cyan-400">
                  SSDI
                </Link>
              </li>
              <li>
                <Link to="/marketing-partners" className="hover:text-cyan-400">
                  Marketing Partners
                </Link>
              </li>
              <li>
                <Link to="/terms-condition" className="hover:text-cyan-400">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-cyan-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                {/* <Link to="/faqs" className="hover:text-cyan-400">
                  FAQ's
                </Link> */}
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-cyan-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Get In Touch
            </h3>
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                />
              </svg>
              <span>Call Us: +1(773)683-3032
              </span>
            </div>
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:yourdisabilityadvocate.com"
                className="hover:text-cyan-400"
              >
                info@yourdisabilityadvocate.com
              </a>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-1 mr-2 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
              3815 Georgia St San  <br /> Diego, CA 92103
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          <p>&copy; Copyright 2025 by yourdisabilityadvocate.com</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
