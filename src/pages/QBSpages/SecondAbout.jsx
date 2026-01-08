import React from 'react';
import images from '../../assets/images';
import SecondNavbar from '../../components/SecondNavbar';
import SecondFooter from '../../components/SecondFooter';
import { Helmet } from 'react-helmet-async';

const SecondAbout = () => {
  return (
    <>
      <Helmet>
                    <title>About | QuickBooks Solutions</title>
                    <meta
                        name="description"
                        content="Read ISHEP Foundation's Anti-Discrimination Policy detailing equality, inclusion, and fairness."
                    />
                </Helmet>
    <SecondNavbar/>
      <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 sm:py-12 lg:py-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-gray-800 mb-6 sm:mb-8">
          About Us
        </h2>

        {/* Two-column layout on lg, single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text column */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-semibold text-gray-900 mb-4">
              All the services you need, all in one place.
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              B Solution is an independent accounting firm that provides{" "}
              <strong>Accounting &amp; Bookkeeping services</strong>.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We are also <strong>Reseller for Intuit QuickBooks products &amp; Certified QuickBooks Pro-Advisor.</strong>
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              If you wish to purchase the latest <strong>QuickBooks</strong> products, including{" "}
              <strong>Premier, Pro, Enterprise, Payments, Payroll, Point of Sale</strong> and{" "}
              <strong>QuickBooks Online</strong>, you've come to the right place.
            </p>

            <p className="text-gray-600 leading-relaxed">
              QBS Accounting <a href="https://qbsaccounting.us" className="text-emerald-700 hover:underline">www.qbsaccounting.us/</a> provides <strong>excellent pricing and support</strong> for QuickBooks users. Our network of partners can help you with all of your accounting services &amp; software needs.
            </p>
          </div>

          {/* Image column */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <img
                src={images.quickbooksImage}
                alt="Team collaborating around a laptop"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-8 sm:mt-12 lg:mt-20 border-t-4 border-green-600" />
      </div>
    </section>
    <SecondFooter/>
    </>
  );
};

export default SecondAbout;
