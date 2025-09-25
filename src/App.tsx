import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyClientsLoveUs from './components/WhyClientsLoveUs';
import WhatWeDo from './components/WhatWeDo';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <WhyClientsLoveUs />
      <WhatWeDo />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;