// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
// Change the import to use ConsultationBooking instead
import ConsultationBooking from './components/sections/Booking/ConsultationBooking';
import Gallery from './components/sections/Gallery/Gallery';
import About from './components/sections/About/About';
import Shop from './components/sections/Shop';
import PrescriptionCenter from './components/sections/Shop/MedicationStore/PrescriptionCenter';
import PetStore from './components/sections/Shop/PetStore/PetStore';
import SellLivestock from './components/sections/Shop/SellLivestock/SellLivestock';
import Preloader from './components/Preloader';
import './styles/global.css';
import './styles/animations.css';

const App: React.FC = () => {
  return (
    <>
      <Preloader />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              {/* Change this line to use ConsultationBooking */}
              <Route path="/booking" element={<ConsultationBooking />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />}>
                <Route path="prescriptions" element={<PrescriptionCenter />} />
                <Route path="pets" element={<PetStore />} />
                <Route path="sell" element={<SellLivestock />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;