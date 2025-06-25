import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>
          About Us - QBS Accounting | Your Trusted Accounting Software Experts
        </title>

        <meta
          name="description"
          content="Learn about QBS Accounting, our mission to empower small businesses with top accounting software and financial solutions. Discover our story, values, and team."
        />
        <meta
          name="keywords"
          content="About QBS Accounting, accounting software experts, financial solutions, small business accounting, company mission, our team"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="About Us - QBS Accounting | Your Trusted Accounting Software Experts"
        />
        <meta
          property="og:description"
          content="Learn about QBS Accounting, our mission to empower small businesses with top accounting software and financial solutions. Discover our story, values, and team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qbsaccounting.us/about-us" />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/about-us-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - QBS Accounting | Your Trusted Accounting Software Experts"
        />
        <meta
          name="twitter:description"
          content="Learn about QBS Accounting, our mission to empower small businesses with top accounting software and financial solutions. Discover our story, values, and team."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/about-us-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "QBS Accounting",
        "url": "https://qbsaccounting.us/about-us",
        "logo": "https://qbsaccounting.us/images/logo.png",
        "sameAs": [
          "https://www.facebook.com/QBSAccounting",
          "https://twitter.com/QBSAccounting",
          "https://www.linkedin.com/company/qbsaccounting"
        ],
        "description": "QBS Accounting is dedicated to providing small businesses with the best accounting software solutions, expert advice, and exceptional customer service to streamline financial management."
      }
    `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Business Accounting
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Trusted by 15,000+ businesses worldwide for innovative financial
            solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Pioneering Accounting Solutions Since 2010
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in New York by a team of chartered accountants and
                software engineers, we set out to bridge the gap between
                traditional accounting practices and modern technological
                capabilities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a small startup developing add-ons for existing
                accounting platforms has grown into a leading provider of
                comprehensive financial management solutions serving businesses
                across the United States and beyond.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
                <p className="text-teal-700 font-medium">
                  "Our mission is to empower businesses with intuitive
                  accounting tools that provide clarity, control, and confidence
                  in financial decision-making."
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                  <div className="h-full flex items-center justify-center bg-teal-100 text-teal-800">
                    <div className="text-center p-6">
                      <svg
                        className="h-12 w-12 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <p className="font-medium">Our First Office</p>
                      <p className="text-sm mt-2">New York, 2010</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                  <div className="h-full flex items-center justify-center bg-teal-100 text-teal-800">
                    <div className="text-center p-6">
                      <svg
                        className="h-12 w-12 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <p className="font-medium">Awards Won</p>
                      <p className="text-sm mt-2">15+ Industry Recognitions</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                  <div className="h-full flex items-center justify-center bg-teal-100 text-teal-800">
                    <div className="text-center p-6">
                      <svg
                        className="h-12 w-12 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      <p className="font-medium">Global Team</p>
                      <p className="text-sm mt-2">250+ Professionals</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                  <div className="h-full flex items-center justify-center bg-teal-100 text-teal-800">
                    <div className="text-center p-6">
                      <svg
                        className="h-12 w-12 mx-auto mb-4"
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
                      <p className="font-medium">Businesses Served</p>
                      <p className="text-sm mt-2">15,000+ Nationwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Foundation
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Core Values That Drive Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution
              we create
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We maintain the highest ethical standards in our products and practices, ensuring complete transparency in all financial reporting capabilities.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Innovation",
                desc: "We continuously evolve our solutions to leverage cutting-edge technologies like AI and machine learning for smarter accounting workflows.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Client Success",
                desc: "Our measure of success is our clients' success. We provide exceptional support and training to ensure optimal use of our solutions.",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                title: "Accuracy",
                desc: "We obsess over precision in financial calculations and reporting, providing audit-ready systems that professionals can trust.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Collaboration",
                desc: "We work closely with accounting professionals to understand real-world challenges and develop practical solutions.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Security",
                desc: "We implement enterprise-grade security protocols to protect sensitive financial data with multiple layers of protection.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
            ].map((value, index) => (
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
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Growth
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Key Milestones in Our Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-teal-200 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Company Founded",
                  desc: "Launched in Mumbai with 5 employees focusing on accounting software plugins",
                },
                {
                  year: "2013",
                  title: "First Product Release",
                  desc: "Debuted our flagship accounting solution for small businesses",
                },
                {
                  year: "2016",
                  title: "International Expansion",
                  desc: "Opened offices in Singapore and Dubai to serve global clients",
                },
                {
                  year: "2019",
                  title: "AI Integration",
                  desc: "Implemented machine learning for automated transaction categorization",
                },
                {
                  year: "2022",
                  title: "Enterprise Solutions",
                  desc: "Launched suite of products for large corporations and accounting firms",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`relative md:flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="mb-4 md:mb-0">
                      <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 h-4 w-4 bg-teal-600 rounded-full transform -translate-x-1/2"></div>
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Meet Our Executive Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Seasoned professionals with decades of combined experience in
              finance and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Jatin Jain",
                title: "Founder & CEO",
                bio: "Visionary founder with deep expertise in financial strategy and technology-driven accounting solutions.",
                img: "",
              },
              {
                name: "Madhav Bansal",
                title: "Chief Financial Officer (CFO)",
                bio: "Expert in corporate finance and compliance, leading financial strategy and operations.",
                img: "",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <div className="h-32 w-32 mx-auto mb-6 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <svg
                      className="h-16 w-16 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Our Solutions?
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
              Request Demo
            </Link>
            <Link
              to="/quickbooks-pro"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
