import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Security = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Our Security Practices - QBS Accounting</title>

        <meta
          name="description"
          content="Learn about QBS Accounting’s robust security practices designed to protect your data and ensure safe financial transactions."
        />
        <meta
          name="keywords"
          content="data security, information security, cybersecurity, QBS Accounting security, secure financial software, data protection"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Our Security Practices - QBS Accounting"
        />
        <meta
          property="og:description"
          content="Learn about QBS Accounting’s robust security practices designed to protect your data and ensure safe financial transactions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qbsaccounting.us/our-security"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/security-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Security Practices - QBS Accounting"
        />
        <meta
          name="twitter:description"
          content="Learn about QBS Accounting’s robust security practices designed to protect your data and ensure safe financial transactions."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/security-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Our Security Practices",
        "url": "https://qbsaccounting.us/our-security",
        "description": "Learn about QBS Accounting’s robust security practices designed to protect your data and ensure safe financial transactions.",
        "publisher": {
          "@type": "Organization",
          "name": "QBS Accounting",
          "logo": {
            "@type": "ImageObject",
            "url": "https://qbsaccounting.us/images/logo.png"
          }
        }
      }
    `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-Grade Security
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Protecting your financial data with military-grade encryption and
            industry-leading security protocols
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Protection
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Multi-Layered Security Architecture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our security framework is built to meet the highest industry
              standards and compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Encryption",
                desc: "All data is encrypted at rest and in transit using AES-256 encryption, the same standard used by banks and government agencies.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
              {
                title: "Network Security",
                desc: "Protected by enterprise-grade firewalls, intrusion detection systems, and DDoS mitigation with 24/7 monitoring.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Access Controls",
                desc: "Role-based permissions, multi-factor authentication, and single sign-on (SSO) integration options.",
                icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Compliance Certifications",
                desc: "Regularly audited for SOC 2 Type II, ISO 27001, and GDPR compliance with certificates available upon request.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Physical Security",
                desc: "Data hosted in SSAE 18 compliant data centers with biometric access controls and 24/7 surveillance.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Audit Logging",
                desc: "Comprehensive audit trails track all system activity with immutable logs for forensic analysis.",
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

      {/* Compliance Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Compliance
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Meeting Global Security Standards
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We adhere to the most stringent international security standards
                to ensure your financial data is protected according to industry
                best practices and regulatory requirements.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "SOC 2 Type II Certified",
                    desc: "Annual audits verify our security controls for data protection",
                  },
                  {
                    title: "ISO 27001 Certified",
                    desc: "International standard for information security management",
                  },
                  {
                    title: "GDPR Compliant",
                    desc: "Meeting EU data protection and privacy regulations",
                  },
                  {
                    title: "Regular Penetration Testing",
                    desc: "Quarterly security assessments by independent third parties",
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
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Our Compliance Certifications
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: "SOC 2 Type II", year: "2023" },
                    { name: "ISO 27001", year: "2023" },
                    { name: "GDPR", year: "Ongoing" },
                    { name: "PCI DSS", year: "Level 1" },
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 flex items-center"
                    >
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{cert.name}</p>
                        <p className="text-gray-600 text-sm">{cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/compliance-documents"
                  className="inline-flex items-center mt-6 text-teal-600 font-medium hover:text-teal-800"
                >
                  View all compliance documents
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
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Best Practices
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Our Security Development Lifecycle
            </h2>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-teal-200 transform -translate-x-1/2"></div>

            {/* Process items */}
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Threat Modeling",
                  desc: "Identify potential security threats during design phase",
                },
                {
                  step: "2",
                  title: "Secure Coding",
                  desc: "Developers trained in OWASP Top 10 security practices",
                },
                {
                  step: "3",
                  title: "Static Analysis",
                  desc: "Automated code scanning for vulnerabilities",
                },
                {
                  step: "4",
                  title: "Penetration Testing",
                  desc: "Regular ethical hacking exercises",
                },
                {
                  step: "5",
                  title: "Incident Response",
                  desc: "24/7 security team monitoring and rapid response",
                },
              ].map((practice, index) => (
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
                        Step {practice.step}
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
                        {practice.title}
                      </h3>
                      <p className="text-gray-600">{practice.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Team */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Experts
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Dedicated Security Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cybersecurity professionals work around the clock to protect
              your data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Patel",
                title: "Chief Security Officer",
                bio: "Former cybersecurity lead at a Fortune 500 bank with 15+ years experience",
                expertise: "Encryption, Compliance",
              },
              {
                name: "Arjun Desai",
                title: "Security Architect",
                bio: "Specializes in secure system design and penetration testing",
                expertise: "Network Security, Ethical Hacking",
              },
              {
                name: "Neha Gupta",
                title: "Data Protection Officer",
                bio: "Ensures compliance with global data protection regulations",
                expertise: "GDPR, Privacy Laws",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <div className="h-32 w-32 mx-auto mb-6 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
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
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="bg-teal-50 text-teal-700 text-sm font-medium px-3 py-1 rounded-full inline-block">
                  {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Security Questions?</h2>
          <p className="text-xl mb-8">
            Our security team is available to address any concerns about data
            protection and compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-support"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Contact Security Team
            </Link>
            <Link
              to="/security-whitepaper"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Download Whitepaper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
