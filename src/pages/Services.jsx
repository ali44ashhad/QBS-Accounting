import React from 'react'
import images from '../assets/images'
import { cardData, features } from '../data/data'
import { Phone, LineChart } from 'lucide-react' 
import HomeFurtherSection from './HomeFurtherSection'
import SecondNavbar from '../components/SecondNavbar'
import SecondFooter from '../components/SecondFooter'
import { Link }from 'react-router-dom'



const Services = () => {
  return (
    <>
    <SecondNavbar/>
      <div className="max-w-7xl mx-auto lg:px-20 py-26">
        {/* Section 1 - Hero (Alternative Content) */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-12 rounded-2xl p-0 lg:p-16">
          {/* Left Image */}
       <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-8 lg:mb-0 bg-transparent">
  <img
    src={images.heroImage}
    alt="Smart bookkeeping dashboard"
    className="w-full h-auto max-w-4xl lg:max-w-5xl rounded-br-[10%] rounded-bl-[10%] shadow-xl object-cover"
  />
</div>


          {/* Right Content - Alternative copy */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-gray-900">
              Effortless Bookkeeping, Smarter Decisions
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium mb-4 text-gray-700">
              Cloud-ready accounting tailored for growing businesses
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
              Automate invoicing, reconcile bank transactions in seconds, and get clear insights to scale confidently. Try our guided setup and experience bookkeeping that actually helps you run your business.
            </p>

            <Link
              to="/contact-us-second"
              className="inline-flex items-center justify-center gap-3 bg-[#0b6b3b] hover:bg-green-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Talk to a specialist: 1-888-654-9781
            </Link>
          </div>
        </section>
      </div>

      {/* Section 2 - CTA Banner (Alternative) */}
      <section className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-12 text-center px-6 lg:px-20">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">Questions about migration or payroll?</h2>
        <p className="text-gray-700 mb-6">Schedule a free 15-minute audit and we'll recommend the simplest path forward.</p>
        <Link to="/contact-us-second" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md transition">Book free audit</Link >
      </section>

      {/* Section 3 - Support Callout (Alternative) */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-white">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Troubleshooting or data recovery?</h2>
          <p className="text-gray-700 mb-6">Our certified advisors recover files, fix sync issues, and secure your books quickly.</p>
          <Link to="/contact-us-second" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg inline-block transition-colors duration-300">
            📞 Support: 1-888-654-9781
          </Link>
        </div>

        {/* Right Circular Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-transparent">
            <img src={images.gettingImage} alt="Support team in action" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 4th section - Feature Highlight (Alternative) */}
      <div className="flex justify-center items-center bg-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row max-w-6xl w-full">
          <div className="w-full lg:w-1/2 min-h-[300px] relative">
            <img src={images.expertingImage} alt="Advisor helping with accounts" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>

          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 lg:mb-6 leading-tight">Partner with certified QuickBooks advisors</h2>
            <p className="text-lg sm:text-xl font-semibold mb-6 lg:mb-8 text-blue-200">From onboarding to year-end close — we support every step.</p>

            <ul className="list-none space-y-3 mb-8 lg:mb-10 text-lg sm:text-xl">
              <li>Personalized onboarding</li>
              <li>Secure file repair & backup</li>
              <li>Custom reporting and KPI dashboards</li>
            </ul>

            <Link to="/contact-us-second" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-600 transition-colors text-white text-lg font-bold py-3 px-6 rounded-full self-center lg:self-start max-w-xs w-full sm:w-auto">
              <Phone className="mr-3 h-5 w-5" />
              Call: 1-888-654-9781
            </Link>
          </div>
        </div>
      </div>

      {/* 5th section - Cards (Alternative) */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div key={index} className="bg-gray-50 p-8 flex flex-col items-center text-center rounded-lg border border-gray-100">
              <div className="mb-4">
                {/* Render provided icon component, fallback to LineChart if missing */}
                {card.icon ? <card.icon className="w-8 h-8 text-black" /> : <LineChart className="w-8 h-8 text-black" />}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-black">{card.title}</h3>
              <p className="text-gray-600 text-base">{card.altDescription || card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6th section - Features (Alternative) */}
      <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Clear reporting. Faster decisions.</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">Visualize cash flow, monitor margins, and export accountant-ready reports in one click. Our platform removes the busywork so you can focus on growth.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 flex flex-col items-center text-center rounded-lg shadow-sm border border-gray-200">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-green-50 border-2 border-green-400 mb-4">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.altDescription || feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HomeFurtherSection />


      <SecondFooter/>
    </>
  )
}

export default Services
