import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import ContactUs from './pages/contactUs/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Product from './pages/products/Product';
import CategoryFilter from './pages/category/CategoryFilter';
import ProductDetails from './pages/products/productDetail/ProductDetails';

function App() {
  const [count, setCount] = useState(0);
  const [scrollProgressVisible, setScrollProgressVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    if (
      location.pathname === '/products' ||
      location.pathname === '/categoryfilter'
    ) {
      setBackgroundImage(''); // Remove background image
    } else {
      setBackgroundImage('url(images/vertical-line-bg-small-medium-gray.svg)');
    }
  }, [location]);

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
    <div
      style={{
        backgroundImage: backgroundImage,
        backgroundPosition: 'center top',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
      }}
    >
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/productdetails" element={<ProductDetails />} />

        <Route path="/categoryfilter" element={<CategoryFilter />} />
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
    </div>
  );
}

export default App;
