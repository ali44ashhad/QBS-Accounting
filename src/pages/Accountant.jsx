import React from "react";
import { Link } from "react-router-dom";
function Accountant() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            QuickBooks Accountant Hosting
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Powering Efficiency and Collaboration for Accountants
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Accounting software interface"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Features
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Intuitive Interface, Powerful Functionality
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our software combines ease-of-use with enterprise-grade
                capabilities to streamline your financial operations.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Bank Reconciliation",
                    desc: "Automatically match transactions with bank feeds",
                  },
                  {
                    title: "Multi-Entity Management",
                    desc: "Consolidate financials across multiple business units",
                  },
                  {
                    title: "Audit Trail",
                    desc: "Complete visibility into all financial changes",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 bg-teal-500 rounded-full flex items-center justify-center">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/quickbooks-pro"
                className="mt-8 inline-flex items-center text-teal-600 font-medium hover:text-teal-800"
              >
                See all features
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accountant;
