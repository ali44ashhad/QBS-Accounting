import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Accountant = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>
          QuickBooks Accountant - Expert Accounting Solutions | QBS Accounting
        </title>

        <meta
          name="description"
          content="Discover QuickBooks Accountant services designed to simplify your accounting needs. Expert bookkeeping, tax preparation, and financial management for small businesses."
        />
        <meta
          name="keywords"
          content="QuickBooks Accountant, bookkeeping services, tax preparation, accounting solutions, small business accounting, financial management"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="QuickBooks Accountant - Expert Accounting Solutions | QBS Accounting"
        />
        <meta
          property="og:description"
          content="Discover QuickBooks Accountant services designed to simplify your accounting needs. Expert bookkeeping, tax preparation, and financial management for small businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qbsaccounting.us/quickbooks-accountant"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/quickbooks-accountant-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickBooks Accountant - Expert Accounting Solutions | QBS Accounting"
        />
        <meta
          name="twitter:description"
          content="Discover QuickBooks Accountant services designed to simplify your accounting needs. Expert bookkeeping, tax preparation, and financial management for small businesses."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/quickbooks-accountant-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "QuickBooks Accountant Services",
        "provider": {
          "@type": "Organization",
          "name": "QBS Accounting",
          "url": "https://qbsaccounting.us/quickbooks-accountant",
          "logo": "https://qbsaccounting.us/images/logo.png",
          "sameAs": [
            "https://www.facebook.com/QBSAccounting",
            "https://twitter.com/QBSAccounting",
            "https://www.linkedin.com/company/qbsaccounting"
          ]
        },
        "description": "QBS Accounting offers QuickBooks Accountant services to streamline bookkeeping, tax preparation, and financial management for small businesses."
      }
    `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            QuickBooks Accountant
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Powerful tools designed specifically for accounting professionals to
            streamline workflows and enhance client services
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            {/* <Link
              to="/free-trial"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Start Free Trial
            </Link> */}
            <button className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg ">
              {" "}
              Start Free Trial
            </button>
            {/* <Link
              to="/contact-sales"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Request Demo
            </Link> */}
            <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300">
              Request Demo
            </button>
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
              Specialized Tools for Accounting Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to efficiently manage multiple clients and
              deliver exceptional accounting services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Client Management Hub",
                desc: "Centralized dashboard to access all client files with customizable views and quick navigation between clients.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Batch Transactions",
                desc: "Process multiple transactions at once with our powerful batch entry and reconciliation tools.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
              },
              {
                title: "Accountant's Toolbox",
                desc: "Exclusive tools including write-up, adjusting journal entries, and client data analysis.",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
              },
              {
                title: "Collaboration Portal",
                desc: "Secure client portal for document sharing, messaging, and approval workflows.",
                icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
              },
              {
                title: "Advanced Reporting",
                desc: "Customizable financial reports with client-branding options and export capabilities.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Tax Preparation",
                desc: "Seamless integration with major tax software and tools for efficient tax season preparation.",
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

      {/* Product Showcase */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="QuickBooks Accountant interface"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Specialized Solution
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Designed Specifically for Accounting Firms
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                QuickBooks Accountant provides the specialized tools accounting
                professionals need to efficiently manage multiple clients,
                streamline workflows, and deliver exceptional service.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Client Workflow Automation",
                    desc: "Automate repetitive tasks and standardize processes across all client engagements",
                  },
                  {
                    title: "Multi-Client Dashboard",
                    desc: "Single view of all client accounts with status indicators and priority flags",
                  },
                  {
                    title: "Secure Document Exchange",
                    desc: "Encrypted file sharing and e-signature capabilities built directly into the platform",
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
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Compatibility
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Seamless Integration with Your Existing Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              QuickBooks Accountant works with the software you already use to
              create a complete accounting ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              "PCL Construction",
              "Gilbane Builders",
              "Clark Construction Group",
              "Bechtel Corporation",
              "Turner Construction",
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Trusted by Accounting Professionals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-300 mr-6"></div>
                <div>
                  <p className="font-bold text-gray-900">Priya Sharma</p>
                  <p className="text-gray-600">
                    Partner, Sharma & Associates CPA
                  </p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700">
                "QuickBooks Accountant has transformed how our firm manages
                client work. The batch transaction processing alone saves us 15+
                hours per week during busy season."
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

            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-300 mr-6"></div>
                <div>
                  <p className="font-bold text-gray-900">Raj Patel</p>
                  <p className="text-gray-600">
                    Managing Partner, Patel Tax Solutions
                  </p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700">
                "The client management hub allows us to serve 30% more clients
                without adding staff. The audit trail gives us complete
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Flexible Plans for Firms of All Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your practice's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Solo Practitioner",
                price: "$49",
                period: "per month",
                features: [
                  "Up to 5 client files",
                  "Basic reporting",
                  "Email support",
                  "Standard security",
                ],
                bestFor: "Individual accountants and bookkeepers",
              },
              {
                name: "Small Firm",
                price: "$99",
                period: "per month",
                features: [
                  "Up to 25 client files",
                  "Advanced reporting",
                  "Priority phone support",
                  "Enhanced security",
                  "Batch transactions",
                ],
                bestFor: "Small accounting teams (2-5 users)",
                popular: true,
              },
              {
                name: "Enterprise Firm",
                price: "Custom",
                period: "per month",
                features: [
                  "Unlimited client files",
                  "Premium reporting",
                  "24/7 dedicated support",
                  "Advanced security",
                  "API access",
                  "Custom workflows",
                ],
                bestFor: "Large firms with complex needs",
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
                    <span className="text-gray-500">/{plan.period}</span>
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of accounting professionals using QuickBooks
            Accountant to streamline their workflows and grow their firms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Link
              to="/free-trial"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Start 30-Day Free Trial
            </Link> */}
            <button className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg">
              Start 30-Day Free Trial
            </button>
            {/* <Link
              to="/contact-sales"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Schedule Consultation
            </Link> */}
            <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accountant;
