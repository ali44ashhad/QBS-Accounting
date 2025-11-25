import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accountant from "./pages/Accountant";
import Enterprise from "./pages/Enterprise";
import Partner from "./pages/Partner";
import POS from "./pages/POS";
import Premier from "./pages/Premier";
import PremierContractor from "./pages/PremierContractor";
import Pro from "./pages/Pro";
import Security from "./pages/Security";
import Support from "./pages/Support";
import Services from "./pages/Services";
// import QbsRoute from "./pages/QbsROute";


// furthre menu //
import ContactUs from './pages/QBSpages/ContactUs.jsx'
import RefundPolicy from './pages/QBSpages/RefundPolicy.jsx'
import PrivacyPolicy from './pages/QBSpages/PrivacyPolicy.jsx'
import Authenticity from './pages/QBSpages/Authenticity.jsx'
import QBScertified from './pages/QBSpages/QBScertified.jsx'
import Faq from './pages/QBSpages/Faq.jsx'
import Product from './pages/QBSpages/Product.jsx'
import Downloads from './pages/QBSpages/Downloads.jsx'
import SecondAbout from './pages/QBSpages/SecondAbout.jsx' 
import TermsSecond from "./pages/QBSpages/TermsSecond.jsx";


function App() {

  const {pathname} = useLocation()
  const hideNavbarOn = ["/services", "/authenticity", "/contact-second", "/downloads", "/faqs", "/privacy-policy-second", "/products", "/qbs-certified", "/refund-policy", "/about-second"]

  return (
    <>
          {!hideNavbarOn.includes(pathname) && <Navbar />}

      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/quickbooks-accountant" element={<Accountant />} />
          <Route path="/quickbooks-enterprise" element={<Enterprise />} />
          <Route path="/quickbooks-pro" element={<Pro />} />
          <Route
            path="/quickbooks-premier-contractor"
            element={<PremierContractor />}
          />
          <Route path="/quickbooks-premier" element={<Premier />} />
          <Route path="/quickbooks-pos" element={<POS />} />
          <Route path="/our-partner" element={<Partner />} />
          <Route path="/our-security" element={<Security />} />
          <Route path="/contact-support" element={<Support />} />
          

{/* further menu */}

<Route path='/contact-us-second' element={<ContactUs/>}/>
      <Route path='/about-second'element={<SecondAbout/>}/>
      <Route path='/refund-policy' element={<RefundPolicy/>}/>
      <Route path='/terms-conditions' element={<TermsSecond/>}/>
      <Route path='/privacy-policy-second' element={<PrivacyPolicy/>}/>
      <Route path='/authenticity' element={<Authenticity/>} />
      <Route path='/qbs-certified' element={<QBScertified/>} />
      <Route path='/faqs' element={<Faq/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/downloads' element={<Downloads/>}/>


        </Routes>
      </main>
      {/* {!hideFooterOn.includes(pathname) && <Footer/>} */}


    </>
  );
}

export default App;
