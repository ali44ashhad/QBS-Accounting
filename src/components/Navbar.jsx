import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const accountingSolutions = [
    ["QuickBooks Accountant", "/quickbooks-accountant"],
    ["QuickBooks Enterprise", "/quickbooks-enterprise"],
    ["QuickBooks Pro", "/quickbooks-pro"],
    ["QuickBooks Premier Contractor", "/quickbooks-premier-contractor"],
    ["QuickBooks Premier", "/quickbooks-premier"],
    ["QuickBooks POS", "/quickbooks-pos"],
  ];

  return (
    <nav className="bg-zinc-50 shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a className="text-xl font-bold text-teal-700" href="/">
              QBS Accounting
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>

            {/* Dropdown opens on hover */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
              >
                Accounting Solutions
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-4 w-60 bg-white shadow-lg rounded-md z-50">
                  {accountingSolutions.map(([label, path]) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/our-partner"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Our Partner
            </Link>

            <Link
              to="/about-us"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              About Us
            </Link>

            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium text-sm"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Right Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50  ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 pt-7 space-y-4">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex justify-between w-full text-left text-base font-medium text-gray-700 hover:text-blue-600"
            >
              <span>Accounting Solutions</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileDropdownOpen && (
              <div className="mt-2 pl-2 space-y-1">
                {accountingSolutions.map(([label, path]) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-2 py-1 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/our-partner"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-700 hover:text-blue-600"
          >
            Our Partner
          </Link>
          <Link
            to="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-700 hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-700 hover:text-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
