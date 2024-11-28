import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import ContactUs from './pages/contactUs/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Product from './pages/products/Product';

function App() {
  const [count, setCount] = useState(0);
  const [scrollProgressVisible, setScrollProgressVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 200) {
        setScrollProgressVisible(true);
      } else {
        setScrollProgressVisible(false);
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = document.documentElement.clientHeight;
      const maxScrollTop = scrollHeight - windowHeight;
      const scrollTopPercentage = (scrollTop / maxScrollTop) * 100;
      setScrollPercentage(Math.min(scrollTopPercentage, 100));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <div
        className={`scroll-progress d-none d-xxl-block ${
          scrollProgressVisible ? 'visible' : ''
        }`}
      >
        <a
          href="#"
          className="scroll-top"
          onClick={handleScrollTop}
          aria-label="scroll"
        >
          <span className="scroll-text">Scroll</span>
          <span className="scroll-line">
            <span
              className="scroll-point"
              style={{ height: `${scrollPercentage}%` }}
            ></span>
          </span>
        </a>
      </div>
    </>
  );
}

export default App;
