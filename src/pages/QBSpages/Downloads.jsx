import React from 'react';
import { Download, Star } from 'lucide-react';
import images from '../../assets/images';
import SecondNavbar from '../../components/SecondNavbar';
import SecondFooter from '../../components/SecondFooter';
import { Helmet } from 'react-helmet';

const Downloads = () => {
  return (

    <>
      <Helmet>
                <title>Downloads | QuickBooks Solutions</title>
                <meta
                    name="description"
                    content="Read ISHEP Foundation's Anti-Discrimination Policy detailing equality, inclusion, and fairness."
                />
            </Helmet>
      <SecondNavbar />
      <div className="relative overflow-hidden pb-12 pt-20">

        {/* BACKGROUND IMAGE (USING IMG TAG) */}
        <img
          src={images.contactImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />


        {/* CONTENT AREA */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 ">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">

            {/* LEFT CONTENT */}
            <div className="lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0 pt-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Quickbooks Tool Hub
              </h1>

              <p className="text-gray-200 text-lg mb-4 max-w-lg lg:max-w-none mx-auto lg:mx-0">
                This tool works best with the latest version of Quickbooks.
              </p>

              <p className="text-white font-medium mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
                Quickbooks Tool Hub is available for existing customers and active users only.
                To start the installation, use the form to start installation.
              </p>

              <div className="space-y-3">
                <p className="text-white font-semibold text-xl">
                  Call us for instant help - We are available 24/7
                </p>

                <div className="inline-block bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <a
                    href="tel:+18442149614"
                    className="flex items-center justify-center text-white text-2xl font-bold hover:text-green-300 transition-colors"
                  >
                    <Download className="w-5 h-5 mr-3 text-green-400" />
                     1-888-339-8581
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="lg:w-2/5 flex justify-center lg:justify-end">
              <img
                src={images.contactRightImage}
                alt="Quickbooks Tool Hub Illustration"
                className="max-w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500 float-animation"
              />
            </div>


          </div>
        </div>
      </div>




      {/* 2. BOTTOM WHITE SECTION (Form and Rating) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8 my-20">
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl">

          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Download Quickbooks Tool Hub
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left Column: Form */}
            <form
              // Inlined handleSubmit function
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form Submitted (Simulated)");
              }}
              className="lg:col-span-2 space-y-6"
            >

              {/* Account Holder Name */}
              <div>
                <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700 mb-1">
                  Account Holder *
                </label>
                <input
                  type="text"
                  id="accountHolder"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
                  required
                />
              </div>

              {/* Registered Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Registered Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
                  required
                />
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number to Reach You *
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  placeholder="Phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors duration-200 ease-in-out"
              >

                Get QB Tool Hub
              </button>
            </form>

            {/* Right Column: Logo and Rating */}
            <div className="flex flex-col items-center justify-start lg:mt-12">
              <img
                src={images.toolHub}
                alt="Quickbooks Tool Hub Logo"
                className="w-32 h-32 mb-4 rounded-full shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/128x128/ccc/333?text=Logo";
                }}
              />
              <div className="text-center">
                <p className="text-gray-600 mb-2">Users Rating: 4.65 / 5.0</p>

                {/* Star Rating Logic - Inlined using an IIFE */}
                <div className="flex items-center space-x-0.5 justify-center">
                  {(() => {
                    const rating = 4.65;
                    const fullStars = Math.floor(rating);
                    const hasHalfStar = rating % 1 !== 0;
                    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                    const stars = [];

                    // Create Full Stars
                    for (let i = 0; i < fullStars; i++) {
                      stars.push(
                        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" strokeWidth={2} />
                      );
                    }

                    // Create Half Star (Simulated)
                    if (hasHalfStar) {
                      stars.push(
                        <Star key="half" className="w-4 h-4 text-yellow-400 opacity-60" fill="currentColor" strokeWidth={2} />
                      );
                    }

                    // Create Empty Stars
                    for (let i = 0; i < emptyStars; i++) {
                      stars.push(
                        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="none" strokeWidth={2} />
                      );
                    }

                    return stars;
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecondFooter />
    </>
  );
};

export default Downloads;