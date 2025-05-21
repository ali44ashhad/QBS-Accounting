import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms & Conditions
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
                    These Terms and Conditions ("Terms") govern your use of our
                    accounting software services ("Services") provided by [Your
                    Company Name] ("Company", "we", "us", or "our"). By
                    accessing or using our Services, you agree to be bound by
                    these Terms.
                  </p>
                  <p className="text-gray-700">
                    If you are entering into these Terms on behalf of a company
                    or other legal entity, you represent that you have the
                    authority to bind such entity to these Terms. Our Privacy
                    Policy and other policies referenced herein are incorporated
                    by reference.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    2. Account Registration
                  </h2>
                  <p className="text-gray-700 mb-4">
                    To access certain features of our Services, you must
                    register for an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>
                      Provide accurate, current, and complete information during
                      registration
                    </li>
                    <li>
                      Maintain and promptly update your account information
                    </li>
                    <li>
                      Maintain the security of your password and accept all
                      risks of unauthorized access
                    </li>
                    <li>
                      Notify us immediately of any unauthorized use of your
                      account
                    </li>
                    <li>
                      Be responsible for all activities that occur under your
                      account
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Accounts registered by "bots" or other automated methods are
                    prohibited. We reserve the right to refuse service,
                    terminate accounts, or remove/edit content at our sole
                    discretion.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    3. Subscription Terms
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    3.1 Fees and Payment
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You agree to pay all fees specified in your order form.
                    Unless otherwise stated, all fees are quoted in [currency]
                    and are non-refundable. We may change our prices by giving
                    you at least 30 days' notice.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    3.2 Renewals
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Your subscription will automatically renew for successive
                    terms equal to your initial term unless either party gives
                    written notice of non-renewal at least 30 days before the
                    end of the current term.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    3.3 Taxes
                  </h3>
                  <p className="text-gray-700">
                    You are responsible for paying all taxes associated with
                    your purchases. If we have the legal obligation to pay or
                    collect taxes, we will invoice you unless you provide a
                    valid tax exemption certificate.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    4. Acceptable Use
                  </h2>
                  <p className="text-gray-700 mb-4">
                    You agree not to use the Services to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>Violate any laws or regulations</li>
                    <li>Infringe any intellectual property rights</li>
                    <li>Transmit viruses or harmful code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>
                      Interfere with other users' enjoyment of the Services
                    </li>
                    <li>Engage in fraudulent or deceptive practices</li>
                  </ul>
                  <p className="text-gray-700">
                    We reserve the right to investigate violations of these
                    Terms and may involve law enforcement authorities in
                    prosecuting violators.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    5. Intellectual Property
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The Services and all contents, including but not limited to
                    software, text, graphics, logos, and documentation, are our
                    exclusive property or that of our licensors and are
                    protected by copyright and other intellectual property laws.
                  </p>
                  <p className="text-gray-700">
                    We grant you a limited, non-exclusive, non-transferable
                    license to access and use the Services for your internal
                    business purposes only. You may not modify, distribute,
                    sell, or create derivative works based on our Services
                    without our express written permission.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    6. Data Protection
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    6.1 Your Data
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You retain all rights to any data you input into the
                    Services ("Your Data"). You grant us a worldwide license to
                    use, reproduce, and process Your Data solely to provide and
                    improve the Services.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    6.2 Security
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate technical and organizational
                    measures to protect Your Data. However, you are responsible
                    for maintaining the confidentiality of your login
                    credentials and for all activities under your account.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    6.3 Data Processing Agreement
                  </h3>
                  <p className="text-gray-700">
                    If required by applicable data protection laws, we will
                    enter into a separate Data Processing Agreement with you
                    that governs the processing of personal data.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    7. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 mb-4">
                    To the maximum extent permitted by law, in no event shall we
                    be liable for any indirect, incidental, special,
                    consequential, or punitive damages, or any loss of profits
                    or revenues, whether incurred directly or indirectly.
                  </p>
                  <p className="text-gray-700">
                    Our total liability for any claims under these Terms shall
                    not exceed the amount you paid us for the Services in the 12
                    months preceding the claim. Some jurisdictions do not allow
                    the exclusion or limitation of liability, so these
                    limitations may not apply to you.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    8. Termination
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Either party may terminate these Terms upon written notice
                    if the other party materially breaches these Terms and fails
                    to cure such breach within 30 days after receipt of written
                    notice.
                  </p>
                  <p className="text-gray-700">
                    Upon termination, your right to use the Services will
                    immediately cease. All provisions which by their nature
                    should survive termination shall survive, including
                    ownership provisions, warranty disclaimers, and limitations
                    of liability.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    9. Governing Law
                  </h2>
                  <p className="text-gray-700 mb-4">
                    These Terms shall be governed by and construed in accordance
                    with the laws of [Jurisdiction], without regard to its
                    conflict of law provisions.
                  </p>
                  <p className="text-gray-700">
                    Any disputes arising out of or related to these Terms or the
                    Services shall be resolved exclusively in the state or
                    federal courts located in [Jurisdiction], and you consent to
                    personal jurisdiction in such courts.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    10. Changes to Terms
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We may modify these Terms at any time. If we make material
                    changes, we will notify you through the Services or by email
                    at least 30 days before the changes take effect.
                  </p>
                  <p className="text-gray-700">
                    Your continued use of the Services after the effective date
                    of the revised Terms constitutes your acceptance of the
                    changes. If you do not agree to the new Terms, you must stop
                    using the Services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    11. Contact Information
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms, please contact
                    us at:
                  </p>
                  <address className="not-italic text-gray-700">
                    [Your Company Name]
                    <br />
                    [Company Address]
                    <br />
                    [City, State ZIP Code]
                    <br />
                    Email: legal@yourcompany.com
                    <br />
                    Phone: [Phone Number]
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Acceptance of Terms
            </h3>
            <p className="text-gray-700">
              By using our Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
              If you do not agree, you may not use our Services.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-xl mb-8">
            Our legal team is available to answer any questions about our terms
            and policies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-legal"
              className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Contact Legal Team
            </Link>
            <Link
              to="/privacy-policy"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
