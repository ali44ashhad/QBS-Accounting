import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Premier = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>
          QuickBooks Premier - Comprehensive Accounting Software | QBS
          Accounting
        </title>

        <meta
          name="description"
          content="QuickBooks Premier offers advanced accounting features including inventory tracking, sales management, and reporting tailored for growing businesses."
        />
        <meta
          name="keywords"
          content="QuickBooks Premier, accounting software, inventory tracking, sales management, business accounting software, financial reporting"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="QuickBooks Premier - Comprehensive Accounting Software | QBS Accounting"
        />
        <meta
          property="og:description"
          content="QuickBooks Premier offers advanced accounting features including inventory tracking, sales management, and reporting tailored for growing businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qbsaccounting.us/quickbooks-premier"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/quickbooks-premier-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickBooks Premier - Comprehensive Accounting Software | QBS Accounting"
        />
        <meta
          name="twitter:description"
          content="QuickBooks Premier offers advanced accounting features including inventory tracking, sales management, and reporting tailored for growing businesses."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/quickbooks-premier-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "QuickBooks Premier",
        "image": "https://qbsaccounting.us/images/quickbooks-premier-banner.jpg",
        "description": "QuickBooks Premier offers advanced accounting features including inventory tracking, sales management, and reporting tailored for growing businesses.",
        "brand": {
          "@type": "Organization",
          "name": "QBS Accounting",
          "url": "https://qbsaccounting.us/quickbooks-premier",
          "logo": "https://qbsaccounting.us/images/logo.png"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://qbsaccounting.us/quickbooks-premier",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  Industry-Specific
                </div>
                <span className="text-teal-200">5 Business Editions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                QuickBooks Premier 2025
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Advanced accounting with industry-specific features for
                wholesale, retail, manufacturing, nonprofits, and professional
                services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="bg-white text-teal-800 font-semibold px-8 py-3 rounded-md text-center hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Buy Now
                </Link>

                <Link
                  to="/contact-us"
                  className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md text-center hover:bg-white hover:text-teal-800 transition duration-300"
                >
                  Compare Editions
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
                  <p>Trusted by 150,000+ businesses</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="QuickBooks Premier interface"
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
                        Editors' Choice
                      </p>
                      <p className="text-xs text-gray-500">Industry Software</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Editions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Specializations
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Industry-Specific Editions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each edition includes specialized features, reports, and tools for
              your business type
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                name: "Manufacturing",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
              },
              {
                name: "Wholesale",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                name: "Retail",
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
              },
              {
                name: "Nonprofit",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                name: "Professional Services",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
            ].map((edition, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-200 text-center"
              >
                <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
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
                      d={edition.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {edition.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Advanced Business Accounting
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powerful tools beyond basic accounting needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Inventory",
                desc: "Track inventory across multiple locations with barcode support and automated reorder points",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                title: "Business Planning",
                desc: "Create forecasts and what-if scenarios to plan for growth and cash flow needs",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
              {
                title: "Advanced Reporting",
                desc: "150+ customizable reports including inventory valuation and sales by customer",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Sales Orders",
                desc: "Create sales orders and backorders to manage customer commitments before invoicing",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              },
              {
                title: "Multi-User Access",
                desc: "Up to 5 simultaneous users with customizable permissions for each role",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                title: "Data Backup",
                desc: "Automatic daily backups with unlimited online storage included",
                icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-200"
              >
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
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
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Specialized Tools
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Tailored for Your Industry
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-teal-700 text-white p-8">
                <h3 className="text-xl font-bold mb-6">
                  Industry-Specific Features
                </h3>
                <p className="mb-6 text-teal-100">
                  Each Premier edition includes specialized features designed
                  for your specific business needs.
                </p>
                <div className="space-y-4">
                  {[
                    "Manufacturing: Bill of Materials",
                    "Wholesale: Sales Order Fulfillment",
                    "Retail: Point of Sale Integration",
                    "Nonprofit: Donor Management",
                    "Services: Time & Project Tracking",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-teal-300 mr-2 flex-shrink-0"
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
                      <span className="text-teal-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Manufacturing Edition",
                      features: [
                        "Track raw materials to finished goods",
                        "Calculate landed costs",
                        "Generate work orders",
                        "Production cost analysis",
                      ],
                    },
                    {
                      title: "Wholesale Edition",
                      features: [
                        "Manage purchase orders",
                        "Track shipments",
                        "Volume discount pricing",
                        "Drop ship management",
                      ],
                    },
                    {
                      title: "Nonprofit Edition",
                      features: [
                        "Donor restricted funds",
                        "Grant tracking",
                        "Program allocation",
                        "Form 990 preparation",
                      ],
                    },
                    {
                      title: "Professional Services",
                      features: [
                        "Time and expense tracking",
                        "Project profitability",
                        "Billable hours management",
                        "Retainer tracking",
                      ],
                    },
                  ].map((industry, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {industry.title}
                      </h4>
                      <ul className="space-y-2">
                        {industry.features.map((feature, i) => (
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Choose Your Edition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All editions include the core QuickBooks Premier features plus
              industry-specific tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Single Industry",
                price: "$799",
                term: "one-time",
                features: [
                  "1 industry edition",
                  "1 user license",
                  "Basic support",
                  "Free data migration",
                  "1 year of updates",
                ],
                bestFor: "Businesses in one industry",
              },
              {
                name: "Multi-Industry",
                price: "$1,199",
                term: "one-time",
                features: [
                  "All 5 industry editions",
                  "3 user licenses",
                  "Priority support",
                  "Free training webinar",
                  "2 years of updates",
                  "Remote setup assistance",
                ],
                bestFor: "Consultants serving multiple industries",
                popular: true,
              },
              {
                name: "Accountant",
                price: "$1,499",
                term: "one-time",
                features: [
                  "All industry editions",
                  "Unlimited clients",
                  "Batch transactions",
                  "Accountant tools",
                  "3 years of updates",
                  "Dedicated support",
                ],
                bestFor: "Accounting professionals",
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
                    BEST VALUE
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
                    <span className="text-gray-500">/{plan.term}</span>
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
                    Get Started
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
          <h2 className="text-3xl font-bold mb-6">
            Ready for Industry-Specific Accounting?
          </h2>
          <p className="text-xl mb-8">
            Get the specialized tools your business needs with QuickBooks
            Premier.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Link
              to="/buy-now"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Buy Now
            </Link> */}
            <button className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg">
              Buy Now
            </button>
            {/* <Link
              to="/compare-editions"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Compare All Editions
            </Link> */}
            <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300">
              {" "}
              Compare All Editions
            </button>
          </div>
          <p className="mt-6 text-teal-200">
            Have questions? Call our business specialists at{" "}
            <span className="font-semibold">+91 98765 43210</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Premier;
