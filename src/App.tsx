import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Booking from './components/sections/Booking/Booking';
import Gallery from './components/sections/Gallery/Gallery';
import About from './components/sections/About/About'; // Add this import
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;