import React from 'react'
import { policySections } from '../../data/data.js'
import SecondNavbar from '../../components/SecondNavbar.jsx'
import SecondFooter from '../../components/SecondFooter.jsx'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => {
  return (
   <>
     <Helmet>
                <title>Privacy policy | QuickBooks Solutions</title>
                <meta
                    name="description"
                    content="Read ISHEP Foundation's Anti-Discrimination Policy detailing equality, inclusion, and fairness."
                />
            </Helmet>
   <SecondNavbar/>
     <div>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-20">
      {/* Content: Centered, flat layout (no bg-white, shadow, or border) */}
      <div className="max-w-4xl mx-auto p-6 sm:p-10 lg:p-12">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-4">
            Privacy Policy
          </h1>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-sm sm:text-base">
            Effective Date: November 21, 2025
          </p>
        </div>

        {/* Policy Sections Map */}
        <div className="space-y-8">
          {policySections.map((section, index) => (
            <div key={index} className="group">
              {/* Section Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                {/* Decorative green dot before title */}
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1 block"></span>
                {section.title}
              </h2>

              {/* Section Content */}
              <div className="pl-5 border-l-2 border-gray-100 ml-1 group-hover:border-green-200 transition-colors duration-300">
                {section.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex} 
                    className="text-gray-600 mb-3 leading-relaxed text-base text-justify sm:text-left"
                    // Allows for **bold** markdown-style text within the paragraphs
                    dangerouslySetInnerHTML={{ 
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-gray-800">$1</span>') 
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note and Contact */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-700 font-semibold mb-2">
            Contact Us
          </p>
          <p className="text-gray-500 text-sm">
            If you have questions about this policy, please contact us at: <br/>
            [Insert Contact Email Address] or [Insert Phone Number]
          </p>
        </div>

      </div>
    </div>
    </div>
    <SecondFooter/>
   </>
  )
}

export default PrivacyPolicy