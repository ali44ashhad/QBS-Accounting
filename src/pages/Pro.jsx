import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Pro = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Helmet>
        <title>
          QuickBooks Pro 2025 - Best Accounting Software for Small Business
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
        <meta
          property="og:url"
          content="https://qbsaccounting.us/quickbooks-pro"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/quickbooks-pro-banner.jpg"
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
          content="https://qbsaccounting.us/images/quickbooks-pro-banner.jpg"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "QuickBooks Pro",
        "operatingSystem": "Windows, MacOS",
        "applicationCategory": "BusinessApplication",
        "description": "Complete accounting software designed to streamline finances for small businesses and startups.",
        "offers": {
          "@type": "Offer",
          "price": "299.99",
          "priceCurrency": "USD",
          "url": "https://qbsaccounting.us/quickbooks-pro",
          "availability": "https://schema.org/InStock"
        },
        "author": {
          "@type": "Organization",
          "name": "qbsaccounting"
        },
        "image": "https://qbsaccounting.us/images/quickbooks-pro-banner.jpg",
        "url": "https://qbsaccounting.us/quickbooks-pro"
      }
    `}
        </script>
      </Helmet>

      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  Best Seller
                </div>
                <span className="text-teal-200">Small Business Solution</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                QuickBooks Pro 2023
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Complete accounting software designed to streamline finances for
                small businesses and startups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link
                  to="/buy-now"
                  className="bg-white text-teal-800 font-semibold px-8 py-3 rounded-md text-center hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Buy Now
                </Link> */}
                <button className="bg-white text-teal-800 font-semibold px-8 py-3 rounded-md text-center hover:bg-gray-100 transition duration-300 shadow-lg">
                  Buy Now
                </button>
                {/* <Link
                  to="/free-trial"
                  className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md text-center hover:bg-white hover:text-teal-800 transition duration-300"
                >
                  Free 30-Day Trial
                </Link> */}
                <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md text-center hover:bg-white hover:text-teal-800 transition duration-300">
                  {" "}
                  Free 30-Day Trial
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
                  <p>Trusted by 500,000+ businesses worldwide</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="QuickBooks Pro interface"
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
                        #1 Rated
                      </p>
                      <p className="text-xs text-gray-500">
                        Accounting Software
                      </p>
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
              Powerful Accounting Tools for Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage finances, invoices, expenses, and
              more
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Invoice & Payments",
                desc: "Create professional invoices, accept online payments, and track payment status",
                icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
              },
              {
                title: "Expense Tracking",
                desc: "Categorize expenses, capture receipts, and maximize tax deductions",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Financial Reports",
                desc: "Generate P&L statements, balance sheets, and 50+ other reports",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Payroll Management",
                desc: "Process payroll, calculate taxes, and file forms automatically",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Inventory Tracking",
                desc: "Monitor stock levels, set reorder points, and track product movement",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                title: "Tax Preparation",
                desc: "Organize deductions, estimate quarterly taxes, and export to tax software",
                icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
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

      {/* Pricing & Plans */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$299",
                term: "per year",
                features: [
                  "Up to 3 users",
                  "Income & expense tracking",
                  "Invoice management",
                  "Basic reporting",
                  "Email support",
                ],
                bestFor: "Freelancers & sole proprietors",
              },
              {
                name: "Standard",
                price: "$499",
                term: "per year",
                features: [
                  "Up to 5 users",
                  "All Basic features",
                  "Inventory management",
                  "Advanced reporting",
                  "Phone & email support",
                  "Payroll for 5 employees",
                ],
                bestFor: "Small businesses",
                popular: true,
              },
              {
                name: "Advanced",
                price: "$799",
                term: "per year",
                features: [
                  "Up to 10 users",
                  "All Standard features",
                  "Time tracking",
                  "Project costing",
                  "Priority support",
                  "Payroll for 15 employees",
                  "Dedicated account manager",
                ],
                bestFor: "Growing businesses",
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-300 mr-6"></div>
                <div>
                  <p className="font-bold text-gray-900">Priya Sharma</p>
                  <p className="text-gray-600">Owner, Mumbai Boutique</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700">
                "QuickBooks Pro cut our monthly bookkeeping time in half. The
                inventory features helped us reduce stockouts by 30% while the
                reporting gives me clear visibility into our finances."
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
                  <p className="text-gray-600">CFO, Delhi Consulting</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700">
                "After trying 3 other accounting packages, QuickBooks Pro was
                the only one that could handle our multi-location business. The
                payroll integration saves us 15 hours every month."
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

      {/* Comparison Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Comparison
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              QuickBooks Pro vs. Alternatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how QuickBooks Pro stacks up against other accounting
              solutions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-600 text-white text-left">
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold">QuickBooks Pro</th>
                  <th className="p-4 font-semibold">Competitor A</th>
                  <th className="p-4 font-semibold">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Invoice Management",
                    qb: "✓",
                    a: "✓",
                    b: "✓",
                  },
                  {
                    feature: "Inventory Tracking",
                    qb: "✓",
                    a: "✓",
                    b: "Limited",
                  },
                  {
                    feature: "Payroll Integration",
                    qb: "✓",
                    a: "Add-on",
                    b: "✗",
                  },
                  {
                    feature: "Multi-User Access",
                    qb: "Up to 10 users",
                    a: "Up to 5 users",
                    b: "Up to 3 users",
                  },
                  {
                    feature: "Mobile App",
                    qb: "Full featured",
                    a: "Limited",
                    b: "✓",
                  },
                  {
                    feature: "Customer Support",
                    qb: "24/7",
                    a: "Business hours",
                    b: "Email only",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } border-b border-gray-200`}
                  >
                    <td className="p-4 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="p-4 text-teal-600 font-semibold">
                      {row.qb}
                    </td>
                    <td className="p-4 text-gray-700">{row.a}</td>
                    <td className="p-4 text-gray-700">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Accounting?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of businesses using QuickBooks Pro to save time and
            gain financial clarity.
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
              to="/free-trial"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Start Free Trial
            </Link> */}
            <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300">
              Start Free Trial
            </button>
          </div>
          <p className="mt-6 text-teal-200">
            Have questions? Call our experts at{" "}
            <span className="font-semibold">+91 98765 43210</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pro;
