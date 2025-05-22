import { Routes, Route } from "react-router-dom";
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
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about-us" element={<About />} />
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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
