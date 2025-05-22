import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const POS = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>
          QuickBooks POS - Reliable Point of Sale Software | QBS Accounting
        </title>

        <meta
          name="description"
          content="QuickBooks POS offers an efficient point of sale solution for retailers. Manage sales, inventory, and customer data seamlessly with QuickBooks POS."
        />
        <meta
          name="keywords"
          content="QuickBooks POS, point of sale software, retail POS, inventory management, sales tracking, customer management"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="QuickBooks POS - Reliable Point of Sale Software | QBS Accounting"
        />
        <meta
          property="og:description"
          content="QuickBooks POS offers an efficient point of sale solution for retailers. Manage sales, inventory, and customer data seamlessly with QuickBooks POS."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qbsaccounting.us/quickbooks-pos"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/quickbooks-pos-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickBooks POS - Reliable Point of Sale Software | QBS Accounting"
        />
        <meta
          name="twitter:description"
          content="QuickBooks POS offers an efficient point of sale solution for retailers. Manage sales, inventory, and customer data seamlessly with QuickBooks POS."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/quickbooks-pos-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "QuickBooks POS",
        "image": "https://qbsaccounting.us/images/quickbooks-pos-banner.jpg",
        "description": "QuickBooks POS offers an efficient point of sale solution for retailers. Manage sales, inventory, and customer data seamlessly with QuickBooks POS.",
        "brand": {
          "@type": "Organization",
          "name": "QBS Accounting",
          "url": "https://qbsaccounting.us/quickbooks-pos",
          "logo": "https://qbsaccounting.us/images/logo.png"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://qbsaccounting.us/quickbooks-pos",
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
                <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  Retail Solution
                </div>
                <span className="text-teal-200">
                  Integrated with QuickBooks
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                QuickBooks Point of Sale
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Complete retail management system that syncs seamlessly with
                QuickBooks for end-to-end business management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link
                  to="/buy-now"
                  className="bg-white text-teal-800 font-semibold px-8 py-3 rounded-md text-center hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Get Started
                </Link> */}
                <button className="bg-white text-teal-800 font-semibold px-8 py-3 rounded-md text-center hover:bg-gray-100 transition duration-300 shadow-lg">
                  {" "}
                  Get Started
                </button>
                {/* <Link
                  to="/free-trial"
                  className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md text-center hover:bg-white hover:text-teal-800 transition duration-300"
                >
                  Free Demo
                </Link> */}
                <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md text-center hover:bg-white hover:text-teal-800 transition duration-300">
                  Free Demo
                </button>
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
                  <p>Trusted by 75,000+ retailers worldwide</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Retail POS system in use"
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        #1 Rated
                      </p>
                      <p className="text-xs text-gray-500">Retail POS System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Everything You Need to Run Your Retail Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From checkout to back office, manage your entire retail operation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Checkout & Payments",
                desc: "Process sales quickly with barcode scanning, multiple payment options, and split tenders",
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
              },
              {
                title: "Inventory Management",
                desc: "Track stock levels in real-time across multiple locations with automated reordering",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                title: "Customer Management",
                desc: "Build customer profiles with purchase history, preferences, and loyalty rewards",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                title: "Reporting & Analytics",
                desc: "100+ built-in reports on sales, inventory, employees, and customer trends",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Employee Management",
                desc: "Track hours, manage permissions, and monitor performance with individual logins",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "QuickBooks Integration",
                desc: "Automatic sync of sales, inventory, and customer data with QuickBooks",
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
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

      {/* Hardware Options */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Hardware
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Complete POS Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the hardware package that fits your retail environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Retail Kit",
                price: "$999",
                includes: [
                  "POS software license",
                  "Cash drawer",
                  "Barcode scanner",
                  "Receipt printer",
                  "Basic support",
                ],
                bestFor: "Small shops and boutiques",
              },
              {
                name: "Complete Retail System",
                price: "$1,799",
                includes: [
                  "POS software license",
                  "All-in-one touchscreen terminal",
                  "Customer display",
                  "Barcode scanner + printer",
                  "Cash drawer",
                  "Credit card reader",
                  "Priority support",
                ],
                bestFor: "Medium retail stores",
                popular: true,
              },
              {
                name: "Enterprise Bundle",
                price: "$3,499",
                includes: [
                  "Multi-station POS licenses",
                  "Tablet-based POS terminals",
                  "Inventory gun",
                  "Kitchen printer",
                  "Payment terminals",
                  "24/7 premium support",
                  "Onsite setup available",
                ],
                bestFor: "Multi-location retailers",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-xl shadow-md overflow-hidden border ${
                  pkg.popular ? "border-teal-500" : "border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{pkg.bestFor}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500"> one-time</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, i) => (
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-md font-medium ${
                      pkg.popular
                        ? "bg-teal-600 text-white hover:bg-teal-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Configure System
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Scenarios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Solutions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Designed for Your Retail Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Brick & Mortar Retail
                  </h3>
                  <p className="text-gray-600">
                    Complete in-store POS solution
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "Process transactions 3x faster than traditional registers",
                  "Manage inventory across multiple store locations",
                  "Create promotions and discounts for seasonal sales",
                  "Track employee sales performance and commissions",
                  "Integrated credit card processing with EMV compliance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    <div className="bg-teal-100 text-teal-800 text-sm font-semibold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
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
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Omnichannel Retail
                  </h3>
                  <p className="text-gray-600">
                    Unify in-store and online sales
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "Sync online and in-store inventory in real-time",
                  "Offer buy online, pick up in store (BOPIS)",
                  "Process returns from any sales channel",
                  "Customer profiles with cross-channel purchase history",
                  "Unified reporting for all sales channels",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    <div className="bg-teal-100 text-teal-800 text-sm font-semibold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Retailers Love QuickBooks POS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Since implementing QuickBooks POS, our checkout speed increased by 40% and inventory accuracy went from 78% to 99.5%.",
                name: "Priya Kapoor",
                title: "Owner, Urban Fashion Boutique",
                type: "Apparel Retail",
              },
              {
                quote:
                  "The integration with QuickBooks saved us 20 hours per week on accounting. Now sales, inventory, and financials are all in sync automatically.",
                name: "Rajiv Patel",
                title: "Operations Manager, Home Goods Store",
                type: "Home Furnishings",
              },
              {
                quote:
                  "Our shrinkage reduced by 65% in the first 6 months thanks to the inventory controls and employee management features.",
                name: "Ananya Sharma",
                title: "CEO, Specialty Foods Market",
                type: "Grocery Retail",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-teal-600 font-medium mt-1">
                      {testimonial.type}
                    </p>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex">
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
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Retail Operations?
          </h2>
          <p className="text-xl mb-8">
            Get started with the POS system designed to grow with your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Link
              to="/free-trial"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Start Free Trial
            </Link> */}
            <button className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg">
              Start Free Trial
            </button>
            {/* <Link
              to="/contact"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Contact Sales
            </Link> */}
            <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300">
              Contact Sales
            </button>
          </div>
          <p className="mt-6 text-teal-200">
            Have questions? Call our retail specialists at{" "}
            <span className="font-semibold">+91 98765 43210</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default POS;
