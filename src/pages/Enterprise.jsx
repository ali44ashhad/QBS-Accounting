import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Enterprise = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>
          QuickBooks Enterprise - Powerful Accounting Software | QBS Accounting
        </title>

        <meta
          name="description"
          content="QuickBooks Enterprise offers robust accounting solutions for growing businesses. Manage inventory, payroll, and financial reporting with ease."
        />
        <meta
          name="keywords"
          content="QuickBooks Enterprise, accounting software, inventory management, payroll, financial reporting, business accounting software"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="QuickBooks Enterprise - Powerful Accounting Software | QBS Accounting"
        />
        <meta
          property="og:description"
          content="QuickBooks Enterprise offers robust accounting solutions for growing businesses. Manage inventory, payroll, and financial reporting with ease."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qbsaccounting.us/quickbooks-enterprise"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/quickbooks-enterprise-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickBooks Enterprise - Powerful Accounting Software | QBS Accounting"
        />
        <meta
          name="twitter:description"
          content="QuickBooks Enterprise offers robust accounting solutions for growing businesses. Manage inventory, payroll, and financial reporting with ease."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/quickbooks-enterprise-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "QuickBooks Enterprise",
        "image": "https://qbsaccounting.us/images/quickbooks-enterprise-banner.jpg",
        "description": "QuickBooks Enterprise offers robust accounting solutions for growing businesses, including inventory management, payroll, and financial reporting.",
        "brand": {
          "@type": "Organization",
          "name": "QBS Accounting",
          "url": "https://qbsaccounting.us/quickbooks-enterprise",
          "logo": "https://qbsaccounting.us/images/logo.png"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://qbsaccounting.us/quickbooks-enterprise",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            QuickBooks Enterprise
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            The most powerful QuickBooks solution for growing and complex
            businesses
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
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
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Enterprise Power
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Built for Complex Business Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced tools to manage inventory, reporting, and operations at
              scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Inventory",
                desc: "Track inventory across multiple locations with barcode scanning, serial/lot tracking, and automated reorder points.",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                title: "Custom Reporting",
                desc: "Create custom financial and operational reports with advanced filtering and export options.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Enhanced Payroll",
                desc: "Full-service payroll with advanced job costing, workers comp, and certified payroll reporting.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Industry-Specific Editions",
                desc: "Tailored solutions for manufacturing, wholesale, retail, professional services, and non-profits.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "User Permissions",
                desc: "Granular role-based access controls with 115+ predefined user roles and custom permission sets.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
              {
                title: "High Volume Capacity",
                desc: "Handles up to 1 million customers, vendors, and inventory items with optimized performance.",
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
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

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Specializations
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom editions designed for your business vertical
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing",
                features: [
                  "Bill of Materials",
                  "Work Orders",
                  "Assembly Tracking",
                  "Shop Floor Reporting",
                ],
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              },
              {
                title: "Wholesale Distribution",
                features: [
                  "Advanced Pricing",
                  "Drop Shipments",
                  "Purchase Order Tracking",
                  "Volume Discounts",
                ],
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
              },
              {
                title: "Retail",
                features: [
                  "Point of Sale",
                  "Inventory Matrix",
                  "Customer Loyalty",
                  "Gift Cards",
                ],
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
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
                      d={industry.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {industry.title} Edition
                </h3>
                <ul className="space-y-2 mb-6">
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
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Why Enterprise
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Enterprise vs. Other QuickBooks Solutions
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Enterprise
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Premier
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    feature: "Max Number of Users",
                    enterprise: "30+",
                    premier: "5",
                    pro: "3",
                  },
                  {
                    feature: "Inventory Locations",
                    enterprise: "Unlimited",
                    premier: "Limited",
                    pro: "Single",
                  },
                  {
                    feature: "Advanced Pricing",
                    enterprise: "✓",
                    premier: "✓",
                    pro: "✗",
                  },
                  {
                    feature: "Custom User Permissions",
                    enterprise: "115+ Roles",
                    premier: "Basic",
                    pro: "Basic",
                  },
                  {
                    feature: "Industry-Specific Features",
                    enterprise: "✓",
                    premier: "✓",
                    pro: "✗",
                  },
                  {
                    feature: "Batch Transactions",
                    enterprise: "✓",
                    premier: "✓",
                    pro: "✗",
                  },
                  {
                    feature: "Advanced Reporting",
                    enterprise: "✓",
                    premier: "Limited",
                    pro: "Basic",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold">
                      {row.enterprise}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.premier}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Flexibility
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Deployment Options to Fit Your Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                QuickBooks Enterprise offers multiple deployment options to meet
                your technical requirements and security policies.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Cloud Hosting",
                    desc: "Fully managed cloud solution with automatic updates and 24/7 accessibility",
                  },
                  {
                    title: "On-Premise Installation",
                    desc: "Local installation on your servers with complete control over your environment",
                  },
                  {
                    title: "Hybrid Deployment",
                    desc: "Combine cloud flexibility with local performance for specific workflows",
                  },
                ].map((option, index) => (
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
                        {option.title}
                      </h3>
                      <p className="text-gray-600">{option.desc}</p>
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
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      System Requirements
                    </h3>
                    <p className="text-gray-600">
                      Minimum specifications for optimal performance
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">
                      Operating System
                    </p>
                    <p className="font-medium">Windows 10/11 Pro</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Processor</p>
                    <p className="font-medium">2.4 GHz or faster</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Memory</p>
                    <p className="font-medium">8 GB RAM minimum</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Storage</p>
                    <p className="font-medium">2.5 GB free space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Enterprise-Grade Accounting?
          </h2>
          <p className="text-xl mb-8">
            See how QuickBooks Enterprise can transform your business
            operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-us"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Start 30-Day Free Trial
            </Link>

            <Link
              to="/contact-us"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Speak With Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
