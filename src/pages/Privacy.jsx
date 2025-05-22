import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Privacy Policy - QBS Accounting</title>

        <meta
          name="description"
          content="Read the Privacy Policy of QBS Accounting to understand how we collect, use, and protect your personal information while using our website and services."
        />
        <meta
          name="keywords"
          content="Privacy Policy, data protection, user privacy, personal information, QBS Accounting privacy, GDPR compliance, data security"
        />
        <meta name="author" content="QBS Accounting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Privacy Policy - QBS Accounting" />
        <meta
          property="og:description"
          content="Read the Privacy Policy of QBS Accounting to understand how we collect, use, and protect your personal information while using our website and services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qbsaccounting.us/privacy-policy"
        />
        <meta
          property="og:image"
          content="https://qbsaccounting.us/images/privacy-policy-banner.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - QBS Accounting" />
        <meta
          name="twitter:description"
          content="Read the Privacy Policy of QBS Accounting to understand how we collect, use, and protect your personal information while using our website and services."
        />
        <meta
          name="twitter:image"
          content="https://qbsaccounting.us/images/privacy-policy-banner.jpg"
        />
        <meta name="twitter:site" content="@QBSAccounting" />

        {/* Schema.org JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "url": "https://qbsaccounting.us/privacy-policy",
        "description": "Read the Privacy Policy of QBS Accounting to understand how we collect, use, and protect your personal information while using our website and services.",
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
            Privacy Policy
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    1. Introduction
                  </h2>
                  <p className="text-gray-700 mb-4">
                    [Your Company Name] ("we", "us", or "our") operates the
                    [Your Product Name] accounting software (the "Service").
                    This page informs you of our policies regarding the
                    collection, use, and disclosure of personal data when you
                    use our Service and the choices you have associated with
                    that data.
                  </p>
                  <p className="text-gray-700">
                    We use your data to provide and improve the Service. By
                    using the Service, you agree to the collection and use of
                    information in accordance with this policy. Unless otherwise
                    defined in this Privacy Policy, terms used in this Privacy
                    Policy have the same meanings as in our Terms and
                    Conditions.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    2. Information Collection
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2.1 Personal Data
                  </h3>
                  <p className="text-gray-700 mb-4">
                    While using our Service, we may ask you to provide us with
                    certain personally identifiable information that can be used
                    to contact or identify you ("Personal Data"). Personally
                    identifiable information may include, but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Business name and address</li>
                    <li>Payment information</li>
                    <li>Cookies and Usage Data</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2.2 Usage Data
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We may also collect information on how the Service is
                    accessed and used ("Usage Data"). This Usage Data may
                    include information such as your computer's Internet
                    Protocol address (e.g., IP address), browser type, browser
                    version, the pages of our Service that you visit, the time
                    and date of your visit, the time spent on those pages,
                    unique device identifiers and other diagnostic data.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2.3 Tracking & Cookies
                  </h3>
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to track
                    the activity on our Service and hold certain information.
                    Cookies are files with small amount of data which may
                    include an anonymous unique identifier. You can instruct
                    your browser to refuse all cookies or to indicate when a
                    cookie is being sent. However, if you do not accept cookies,
                    you may not be able to use some portions of our Service.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    3. Use of Data
                  </h2>
                  <p className="text-gray-700 mb-4">
                    [Your Company Name] uses the collected data for various
                    purposes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>To provide and maintain our Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>
                      To allow you to participate in interactive features of our
                      Service when you choose to do so
                    </li>
                    <li>To provide customer support</li>
                    <li>
                      To gather analysis or valuable information so that we can
                      improve our Service
                    </li>
                    <li>To monitor the usage of our Service</li>
                    <li>To detect, prevent and address technical issues</li>
                    <li>
                      To provide you with news, special offers and general
                      information about other goods, services and events which
                      we offer
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    4. Data Protection
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    4.1 Security Measures
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The security of your data is important to us, but remember
                    that no method of transmission over the Internet, or method
                    of electronic storage is 100% secure. While we strive to use
                    commercially acceptable means to protect your Personal Data,
                    we cannot guarantee its absolute security.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate technical and organizational
                    measures to ensure a level of security appropriate to the
                    risk, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>Encryption of data in transit and at rest</li>
                    <li>
                      Regular security assessments and penetration testing
                    </li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>
                      Security incident monitoring and response procedures
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    4.2 Data Retention
                  </h3>
                  <p className="text-gray-700">
                    We will retain your Personal Data only for as long as is
                    necessary for the purposes set out in this Privacy Policy.
                    We will retain and use your Personal Data to the extent
                    necessary to comply with our legal obligations (for example,
                    if we are required to retain your data to comply with
                    applicable laws), resolve disputes, and enforce our legal
                    agreements and policies.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    5. Data Disclosure
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    5.1 Service Providers
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We may employ third party companies and individuals to
                    facilitate our Service ("Service Providers"), to provide the
                    Service on our behalf, to perform Service-related services
                    or to assist us in analyzing how our Service is used. These
                    third parties have access to your Personal Data only to
                    perform these tasks on our behalf and are obligated not to
                    disclose or use it for any other purpose.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    5.2 Business Transfers
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If [Your Company Name] is involved in a merger, acquisition
                    or asset sale, your Personal Data may be transferred. We
                    will provide notice before your Personal Data is transferred
                    and becomes subject to a different Privacy Policy.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    5.3 Legal Requirements
                  </h3>
                  <p className="text-gray-700">
                    [Your Company Name] may disclose your Personal Data in the
                    good faith belief that such action is necessary to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                    <li>Comply with a legal obligation</li>
                    <li>
                      Protect and defend the rights or property of [Your Company
                      Name]
                    </li>
                    <li>
                      Prevent or investigate possible wrongdoing in connection
                      with the Service
                    </li>
                    <li>
                      Protect the personal safety of users of the Service or the
                      public
                    </li>
                    <li>Protect against legal liability</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    6. Your Rights
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Depending on your jurisdiction, you may have certain rights
                    regarding your Personal Data:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>
                      <strong>Access:</strong> Request copies of your personal
                      data
                    </li>
                    <li>
                      <strong>Rectification:</strong> Request correction of
                      inaccurate or incomplete data
                    </li>
                    <li>
                      <strong>Erasure:</strong> Request deletion of your
                      personal data
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request restriction of
                      processing your personal data
                    </li>
                    <li>
                      <strong>Portability:</strong> Request transfer of your
                      data to another organization
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing of your
                      personal data
                    </li>
                    <li>
                      <strong>Withdraw Consent:</strong> Withdraw your consent
                      at any time
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    To exercise any of these rights, please contact us using the
                    information in the "Contact Us" section below. We may need
                    to verify your identity before fulfilling your request.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    7. International Data Transfers
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Your information, including Personal Data, may be
                    transferred to — and maintained on — computers located
                    outside of your state, province, country or other
                    governmental jurisdiction where the data protection laws may
                    differ than those from your jurisdiction.
                  </p>
                  <p className="text-gray-700">
                    If you are located outside [Your Country] and choose to
                    provide information to us, please note that we transfer the
                    data, including Personal Data, to [Your Country] and process
                    it there. Your consent to this Privacy Policy followed by
                    your submission of such information represents your
                    agreement to that transfer.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    8. Children's Privacy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Our Service does not address anyone under the age of 18
                    ("Children"). We do not knowingly collect personally
                    identifiable information from anyone under the age of 18. If
                    you are a parent or guardian and you are aware that your
                    Children has provided us with Personal Data, please contact
                    us.
                  </p>
                  <p className="text-gray-700">
                    If we become aware that we have collected Personal Data from
                    children without verification of parental consent, we take
                    steps to remove that information from our servers.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    9. Changes to This Policy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "last updated" date at the top
                    of this Privacy Policy.
                  </p>
                  <p className="text-gray-700">
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    10. Contact Us
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy, please
                    contact us:
                  </p>
                  <address className="not-italic text-gray-700">
                    By email: privacy@yourcompany.com
                    <br />
                    By phone: [Your Contact Number]
                    <br />
                    By mail: [Your Company Address], Attn: Privacy Officer
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Your Privacy Matters
            </h3>
            <p className="text-gray-700">
              We are committed to protecting your personal information and being
              transparent about how we collect, use, and share it. This Privacy
              Policy explains our practices in detail.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Privacy Concerns?</h2>
          <p className="text-xl mb-8">
            Our privacy team is available to address any questions about your
            personal data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-privacy"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Contact Privacy Team
            </Link>
            <Link
              to="/data-request"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              Submit Data Request
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
