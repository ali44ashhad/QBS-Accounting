import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Helmet>
        <title>
          QBS Accounting - Best Accounting Software for Small Business
        </title>

        <meta
          name="description"
          content="Complete accounting software designed to streamline finances for small businesses and startups. Buy QuickBooks Pro 2023 or try the free 30-day trial."
        />
        <meta
          name="keywords"
          content="QuickBooks Pro, accounting software, small business accounting, invoice, payroll, tax preparation, bookkeeping software, financial management, accounting tools"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="QuickBooks Pro 2023 - Best Accounting Software for Small Business"
        />
        <meta
          property="og:description"
          content="Complete accounting software designed to streamline finances for small businesses and startups. Buy QuickBooks Pro 2023 or try the free 30-day trial."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qbsaccounting.us" />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/quickbooks-pro-2023-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickBooks Pro 2023 - Best Accounting Software for Small Business"
        />
        <meta
          name="twitter:description"
          content="Complete accounting software designed to streamline finances for small businesses and startups. Buy QuickBooks Pro 2023 or try the free 30-day trial."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/quickbooks-pro-2023-banner.jpg"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "QuickBooks Pro 2023",
        "operatingSystem": "Windows, MacOS",
        "applicationCategory": "BusinessApplication",
        "description": "Complete accounting software designed to streamline finances for small businesses and startups.",
        "offers": {
          "@type": "Offer",
          "price": "299.99",
          "priceCurrency": "USD",
          "url": "https://qbsaccounting.us",
          "availability": "https://schema.org/InStock"
        },
        "author": {
          "@type": "Organization",
          "name": "Your Company Name"
        },
        "image": "https://qbsaccounting.us/images/quickbooks-pro-2023-banner.jpg",
        "url": "https://qbsaccounting.us"
      }
    `}
        </script>
      </Helmet>

      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-12 md:py-18 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Modern Accounting Solutions <br />
                for Smart Businesses
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                AI-powered financial tools that save time, reduce errors, and
                provide real-time insights for better decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quickbooks-enterprise"
                  className="bg-white text-teal-800 font-semibold px-8 py-3 rounded-md text-center hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact-us"
                  className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md text-center hover:bg-white hover:text-teal-800 transition duration-300"
                >
                  Free Trial
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="h-10 w-10 rounded-full bg-teal-500 border-2 border-teal-700"
                    ></div>
                  ))}
                </div>
                <div className="ml-4 text-teal-100">
                  <p>Trusted by 15,000+ businesses globally</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Accounting dashboard"
                  className="rounded-lg shadow-2xl border-8 border-white"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full">
                      <svg
                        className="w-6 h-6 text-green-600"
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
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        24/7 Support
                      </p>
                      <p className="text-xs text-gray-500">Certified Experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "95%", label: "Client Retention Rate" },
              { value: "100K+", label: "Transactions Processed" },
              { value: "4.5/5", label: "Customer Satisfaction" },
              { value: "24/7", label: "Support Availability" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl font-bold text-teal-700 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Solutions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Accounting Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer tailored QuickBooks solutions to meet the unique needs of
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "QuickBooks Enterprise",
                desc: "Advanced inventory and reporting for growing businesses.",
                link: "/quickbooks-enterprise",
              },
              {
                title: "QuickBooks Accountant",
                desc: "Tools designed specifically for accounting professionals.",
                link: "/quickbooks-accountant",
              },
              {
                title: "QuickBooks Pro",
                desc: "Complete accounting solution for small businesses.",
                link: "/quickbooks-pro",
              },
              {
                title: "QuickBooks Premier Contractor",
                desc: "Specialized features for construction businesses.",
                link: "/quickbooks-premier-contractor",
              },
              {
                title: "QuickBooks POS",
                desc: "Retail point-of-sale system integrated with QuickBooks.",
                link: "/quickbooks-pos",
              },
              {
                title: "QuickBooks Premier",
                desc: "Industry-specific editions with advanced features.",
                link: "/quickbooks-premier",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.desc}</p>
                <Link
                  to={solution.link}
                  className="text-teal-600 font-medium hover:text-teal-800 inline-flex items-center"
                >
                  Learn more
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
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - New */}
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

      {/* Integration Section - New */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Connectivity
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Seamless Ecosystem Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Works with the tools you already use to create a unified financial
              workflow
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {[
              "Stripe",
              "Shopify",
              "PayPal",
              "Xero",
              "Salesforce",
              "Zapier",
            ].map((integration) => (
              <div key={integration} className="flex justify-center">
                <div className="h-12 flex items-center justify-center bg-white p-4 rounded-lg shadow-sm w-full">
                  <span className="font-medium text-gray-700">
                    {integration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Trusted by Finance Professionals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-300 mr-6"></div>
                <div>
                  <p className="font-bold text-gray-900">Priya Sharma</p>
                  <p className="text-gray-600">CFO, TechStart India</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700">
                "Switching to this platform reduced our month-end close process
                from 7 days to just 48 hours. The automation features are
                game-changing for our accounting team."
              </blockquote>
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-300 mr-6"></div>
                <div>
                  <p className="font-bold text-gray-900">Rahul Mehta</p>
                  <p className="text-gray-600">Partner, Mehta & Associates</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700">
                "The client management features allow our firm to serve 30% more
                clients without adding staff. The audit trail gives us complete
                confidence in compliance."
              </blockquote>
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Modernize Your Accounting?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of businesses transforming their financial operations
            with our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-us"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact-us"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          <p className="mt-6 text-teal-200">
            Questions? Call our experts at{" "}
            <a href="tel:+13074434600" className="font-semibold underline">
              +1 (307) 443-4600
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
