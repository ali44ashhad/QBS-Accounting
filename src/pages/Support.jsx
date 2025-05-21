import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Support Center
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Get expert help with your accounting software 24/7 from our
            certified support team
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Support
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Multiple Ways to Get Help
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the support method that works best for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Live Chat */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">
                Live Chat
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Instant connection with our support agents for quick questions
                and troubleshooting
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">
                    Average response time: under 2 minutes
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">
                    Available 24/7 including holidays
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">
                    Screen sharing available
                  </span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-700 transition duration-300">
                Start Live Chat
              </button>
            </div>

            {/* Phone Support */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">
                Phone Support
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Speak directly with our support specialists for complex issues
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">
                    Priority routing for premium customers
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">
                    Multilingual support available
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">Callback service option</span>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  +1 (800) 123-4567
                </p>
                <p className="text-sm text-gray-600">
                  International: +91 22 1234 5678
                </p>
              </div>
            </div>

            {/* Email Support */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">
                Email Support
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Detailed assistance for non-urgent inquiries and documentation
                requests
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">
                    Typical response within 4 business hours
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">
                    Attachment support for screenshots
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">Ticket tracking system</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-700 transition duration-300">
                Email Support Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Self-Service
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Comprehensive Knowledge Base
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Access our library of articles, tutorials, and troubleshooting
                guides to find instant answers to common questions.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Step-by-step video tutorials",
                  "Troubleshooting guides for all products",
                  "Frequently asked questions",
                  "Software update changelogs",
                  "Accounting best practices",
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
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Popular Articles
                    </h3>
                    <p className="text-gray-600">
                      Most frequently accessed help topics
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "How to reconcile accounts in QuickBooks",
                    "Fixing common synchronization errors",
                    "Setting up multi-user access",
                    "Generating advanced financial reports",
                    "Migrating data from older versions",
                  ].map((article, index) => (
                    <Link
                      key={index}
                      to="/knowledge-base/article"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition duration-300"
                    >
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                        <span className="text-gray-700 hover:text-teal-600">
                          {article}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Support Plans
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Choose Your Support Level
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer different support tiers to match your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Support",
                price: "Included",
                features: [
                  "Email support (48hr response)",
                  "Business hours phone support",
                  "Knowledge base access",
                  "Community forums",
                ],
                bestFor: "Small businesses with minimal support needs",
              },
              {
                name: "Priority Support",
                price: "$49/month",
                features: [
                  "24/5 phone & chat support",
                  "4hr email response time",
                  "Screen sharing sessions",
                  "Dedicated support portal",
                ],
                bestFor: "Growing businesses needing reliable support",
                popular: true,
              },
              {
                name: "Enterprise Support",
                price: "Custom",
                features: [
                  "24/7 premium phone support",
                  "1hr response guarantee",
                  "Dedicated account manager",
                  "Onsite training available",
                ],
                bestFor: "Large organizations with critical needs",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl shadow-md overflow-hidden border ${
                  plan.popular ? "border-teal-500" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.bestFor}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.price !== "Included" && plan.price !== "Custom" && (
                      <span className="text-gray-500">/month</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-teal-500 mr-2"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-md font-medium ${
                      plan.popular
                        ? "bg-teal-600 text-white hover:bg-teal-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl mb-8">
            Our support team is standing by to assist you with any questions or
            issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+18001234567"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Call Support Now
            </a>
            <Link
              to="/contact-us"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
