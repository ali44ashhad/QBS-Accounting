import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PremierContractor = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>
          QuickBooks Premier Contractor - Accounting Software for Contractors |
          QBS Accounting
        </title>

        <meta
          name="description"
          content="QuickBooks Premier Contractor edition helps contractors manage projects, track expenses, and simplify payroll. Ideal accounting software for construction businesses."
        />
        <meta
          name="keywords"
          content="QuickBooks Premier Contractor, contractor accounting software, construction accounting, project management, payroll for contractors, expense tracking"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="QuickBooks Premier Contractor - Accounting Software for Contractors | QBS Accounting"
        />
        <meta
          property="og:description"
          content="QuickBooks Premier Contractor edition helps contractors manage projects, track expenses, and simplify payroll. Ideal accounting software for construction businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qbsaccounting.us/quickbooks-premier-contractor"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/quickbooks-premier-contractor-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickBooks Premier Contractor - Accounting Software for Contractors | QBS Accounting"
        />
        <meta
          name="twitter:description"
          content="QuickBooks Premier Contractor edition helps contractors manage projects, track expenses, and simplify payroll. Ideal accounting software for construction businesses."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/quickbooks-premier-contractor-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "QuickBooks Premier Contractor",
        "image": "https://qbsaccounting.us/images/quickbooks-premier-contractor-banner.jpg",
        "description": "QuickBooks Premier Contractor edition helps contractors manage projects, track expenses, and simplify payroll. Ideal accounting software for construction businesses.",
        "brand": {
          "@type": "Organization",
          "name": "QBS Accounting",
          "url": "https://qbsaccounting.us/quickbooks-premier-contractor",
          "logo": "https://qbsaccounting.us/images/logo.png"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://qbsaccounting.us/quickbooks-premier-contractor",
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
                <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  Industry-Specific
                </div>
                <span className="text-teal-200">Construction Edition</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                QuickBooks Premier Contractor
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Specialized accounting software designed for contractors and
                construction businesses with job costing, progress invoicing,
                and change order management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="bg-white text-teal-800 font-semibold px-8 py-3 rounded-md text-center hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Get Started
                </Link>

                <Link
                  to="/contact-us"
                  className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md text-center hover:bg-white hover:text-teal-800 transition duration-300"
                >
                  Request Demo
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-10 w-10 rounded-full bg-teal-500 border-2 border-teal-700"
                    ></div>
                  ))}
                </div>
                <div className="ml-4 text-teal-100">
                  <p>Trusted by 25,000+ contractors</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Contractor using QuickBooks"
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
                        Best in Class
                      </p>
                      <p className="text-xs text-gray-500">
                        Construction Accounting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor-Specific Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Built for Construction Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized tools that address the unique needs of contractors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Job Costing",
                desc: "Track costs by job, phase, and task with real-time profitability analysis",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Progress Invoicing",
                desc: "Bill clients based on project milestones with retainage tracking",
                icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
              },
              {
                title: "Change Order Management",
                desc: "Create, track, and approve change orders with full audit trail",
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
              },
              {
                title: "Subcontractor Tracking",
                desc: "Manage 1099 contractors with certified payroll and lien waiver tracking",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Equipment Costing",
                desc: "Allocate equipment costs to jobs with depreciation tracking",
                icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
              },
              {
                title: "Construction Reports",
                desc: "50+ specialized reports including job profitability and WIP",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
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

      {/* Contractor Workflow */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Workflow
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Streamlined Construction Accounting
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                QuickBooks Premier Contractor adapts to how construction
                businesses operate, providing specialized workflows for:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Bid to Bill Cycle",
                    desc: "Track estimates, approved bids, change orders, and progress billing all in one system",
                  },
                  {
                    title: "Job Cost Allocation",
                    desc: "Automatically allocate labor, materials, equipment, and subcontractor costs to specific jobs",
                  },
                  {
                    title: "Retainage Management",
                    desc: "Easily track and release retainage amounts according to contract terms",
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
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md">
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Typical Contractor Workflow
                    </h3>
                    <p className="text-gray-600">
                      How construction businesses use our software
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "1. Create estimate and bid",
                    "2. Win job and set up project",
                    "3. Track costs by job phase",
                    "4. Submit progress invoices",
                    "5. Manage change orders",
                    "6. Complete final punch list",
                    "7. Close out job and analyze profitability",
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition duration-300"
                    >
                      <div className="bg-teal-100 text-teal-800 text-sm font-semibold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Trusted by Construction Professionals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The job costing features helped us identify we were losing money on bathroom remodels. We adjusted our pricing and increased margins by 22% in 6 months.",
                name: "Vikram Patel",
                title: "Owner, City Builders",
                rating: 5,
                type: "General Contractor",
              },
              {
                quote:
                  "Progress invoicing with retainage tracking has improved our cash flow by 35%. We no longer have to chase clients for payments.",
                name: "Anjali Desai",
                title: "CFO, Coastal Construction",
                rating: 5,
                type: "Commercial Builder",
              },
              {
                quote:
                  "Managing subcontractors and tracking their payments used to take 15 hours/week. Now it takes 3 hours with automatic 1099 generation.",
                name: "Rajiv Khanna",
                title: "Operations Manager, K&R Contracting",
                rating: 4,
                type: "Specialty Contractor",
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
                  {[...Array(testimonial.rating)].map((_, i) => (
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Simple Contractor Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All plans include specialized contractor features and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Single User",
                price: "$799",
                term: "one-time",
                features: [
                  "1 user license",
                  "All contractor features",
                  "Basic support",
                  "Free data migration",
                  "1 year of updates",
                ],
                bestFor: "Small contracting firms",
              },
              {
                name: "Multi-User",
                price: "$1,299",
                term: "one-time",
                features: [
                  "3 user licenses",
                  "All contractor features",
                  "Priority support",
                  "Free training webinar",
                  "2 years of updates",
                  "Remote setup assistance",
                ],
                bestFor: "Growing construction businesses",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                term: "annual subscription",
                features: [
                  "5+ user licenses",
                  "All contractor features",
                  "24/7 premium support",
                  "Onsite training available",
                  "Unlimited updates",
                  "Dedicated account manager",
                ],
                bestFor: "Large construction firms",
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
            Ready to Streamline Your Construction Accounting?
          </h2>
          <p className="text-xl mb-8">
            Get specialized software designed for contractors by contractors.
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
            Have questions? Call our construction specialists at{" "}
            <span className="font-semibold">+91 98765 43210</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PremierContractor;
