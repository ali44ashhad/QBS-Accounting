import React from 'react'
import { refundData} from '../../data/data'
import SecondNavbar from '../../components/SecondNavbar'
import SecondFooter from '../../components/SecondFooter'

const RefundPolicy = () => {
  return (
 <>
 <SecondNavbar/>
     <div>
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-30">
  <div className="max-w-4xl mx-auto">

    {/* Policy Header */}
    <h1 className="text-4xl font-extrabold text-green-700 text-center mb-4">
      Refund Policy
    </h1>

    <p className="text-center text-gray-600 mb-12">
      Last Updated: November 21, 2025
    </p>

    {/* Policy Sections */}
    {refundData.map((section, index) => (
      <div key={index} className="mb-10">

        {/* Section Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-l-4 border-green-600 pl-3">
          {section.title}
        </h2>

        {/* Policy Details List */}
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          {section.content.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="leading-relaxed text-base"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      </div>
    ))}

    {/* Footer Note */}
    <div className="mt-12 pt-6 border-t border-gray-200">
      <p className="text-center text-sm text-gray-500 italic">
        *This document outlines the standard refund policies. For specific contractual agreements, the terms of the signed contract shall take precedence.
      </p>
    </div>
  </div>
</div>

    </div>
    <SecondFooter/>
 </>
  )
}

export default RefundPolicy