// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import ConsultationBooking from './components/sections/Booking/ConsultationBooking';
import Gallery from './components/sections/Gallery/Gallery';
import About from './components/sections/About/About';
import Shop from './components/sections/Shop';
import PrescriptionCenter from './components/sections/Shop/MedicationStore/PrescriptionCenter';
import PetStore from './components/sections/Shop/PetStore/PetStore';
import SellLivestock from './components/sections/Shop/SellLivestock/SellLivestock';
import Agrovet from './components/sections/Shop/Agrovet/Agrovet';
import Testimonials from './components/sections/Testimonials/Testimonials';
import Preloader from './components/Preloader';
import './styles/global.css';
import './styles/animations.css';

const App: React.FC = () => {
  return (
    <Router>
      <Preloader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<ConsultationBooking />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/medications" element={<PrescriptionCenter />} />
          <Route path="/shop/pets" element={<PetStore />} />
          <Route path="/shop/sell" element={<SellLivestock />} />
          <Route path="/shop/agrovet" element={<Agrovet />} /> {/* New Agrovet route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
