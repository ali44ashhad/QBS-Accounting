import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Partner = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>
          Our Partners - Trusted Accounting Software Partners | QBS Accounting
        </title>

        <meta
          name="description"
          content="Meet our trusted partners providing top-notch accounting software and financial solutions to help your business thrive. Discover exclusive offers and integrations."
        />
        <meta
          name="keywords"
          content="accounting software partners, financial solutions, small business software, QuickBooks partners, accounting integrations, business finance partners"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Our Partners - Trusted Accounting Software Partners | QBS Accounting"
        />
        <meta
          property="og:description"
          content="Meet our trusted partners providing top-notch accounting software and financial solutions to help your business thrive. Discover exclusive offers and integrations."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qbsaccounting.us/our-partner"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/partners-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Partners - Trusted Accounting Software Partners | QBS Accounting"
        />
        <meta
          name="twitter:description"
          content="Meet our trusted partners providing top-notch accounting software and financial solutions to help your business thrive. Discover exclusive offers and integrations."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/partners-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "QBS Accounting",
        "url": "https://qbsaccounting.us/our-partner",
        "logo": "https://qbsaccounting.us/images/logo.png",
        "sameAs": [
          "https://www.facebook.com/QBSAccounting",
          "https://twitter.com/QBSAccounting",
          "https://www.linkedin.com/company/qbsaccounting"
        ],
        "description": "QBS Accounting partners with leading accounting software providers to deliver the best financial tools and support for small businesses."
      }
    `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Valued Partners
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional
            accounting solutions
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Collaboration
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Strategic Partnerships for Mutual Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work closely with accounting firms, technology providers, and
              business consultants to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For Accounting Firms",
                desc: "Enhance your service offerings with our specialized accounting solutions and earn referral commissions.",
                icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
              },
              {
                title: "For Technology Providers",
                desc: "Integrate your solutions with our platform to create seamless workflows for mutual clients.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "For Business Consultants",
                desc: "Recommend trusted accounting solutions to your clients and strengthen your advisory services.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
            ].map((benefit, index) => (
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
                      d={benefit.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Network
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Our Partner Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              "Ruiz Foods",
              "Eli Lilly",
              "Chevron",
              "BP Pulse",
              "Cupix Inc.",
              "Avride",
              "Caterpillar",
              "Grupo Bafar",
            ].map((partner) => (
              <div
                key={partner}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32"
              >
                <span className="text-xl font-semibold text-gray-700">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Opportunities
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Partnership Programs Tailored to Your Business
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We offer multiple partnership levels to align with your business
                goals and capabilities. Whether you're looking to resell our
                products, refer clients, or build integrations, we have a
                program that fits.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Referral Partners",
                    desc: "Earn commissions by referring clients to our solutions",
                  },
                  {
                    title: "Reseller Partners",
                    desc: "Sell our products directly to your clients with special pricing",
                  },
                  {
                    title: "Technology Partners",
                    desc: "Build integrations and go to market together",
                  },
                  {
                    title: "Strategic Alliances",
                    desc: "Develop joint solutions for specific industries",
                  },
                ].map((program, index) => (
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
                        {program.title}
                      </h3>
                      <p className="text-gray-600">{program.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-teal-100 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Partner Success Story
                  </h3>
                  <blockquote className="text-gray-700 mb-4">
                    "Our partnership has enabled us to offer complete accounting
                    solutions to our clients, increasing our revenue by 35%
                    while providing more value."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <p className="font-medium text-gray-900">Rahul Sharma</p>
                      <p className="text-gray-600">
                        Director, Financial Solutions Consulting
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-teal-600 mb-1">
                      200+
                    </p>
                    <p className="text-gray-600">Active Partners</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-teal-600 mb-1">40%</p>
                    <p className="text-gray-600">Partner Revenue Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Resources */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Resources
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Partner Resources & Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed as a partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Partner Portal",
                desc: "Access our exclusive partner portal with sales tools, marketing materials, and deal registration.",
              },
              {
                title: "Training & Certification",
                desc: "Become a certified partner through our comprehensive training programs and webinars.",
              },
              {
                title: "Marketing Toolkit",
                desc: "Download ready-to-use marketing materials, case studies, and co-branded collateral.",
              },
              {
                title: "Technical Documentation",
                desc: "Access API documentation, integration guides, and technical specifications.",
              },
              {
                title: "Partner Events",
                desc: "Join our partner conferences, workshops, and networking events.",
              },
              {
                title: "Deal Registration",
                desc: "Register your deals to receive special pricing and protection.",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-700 to-teal-500 rounded-xl p-12 text-white">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Become a Partner Today
                </h2>
                <p className="text-xl text-teal-100">
                  Join our network of trusted partners and grow your business
                  with our award-winning accounting solutions.
                </p>
              </div>
              <div className="lg:w-1/3">
                <Link
                  to="/contact-us"
                  className="block bg-white text-teal-700 text-center font-semibold py-4 px-8 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
