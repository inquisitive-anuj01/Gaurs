import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'price-list', label: 'Price List' },
    { id: 'floor-plan', label: 'Floor Plan' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'location', label: 'Location' },
    // { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg text-black'
          : 'bg-transparent text-white'
      }`}
    >
      <div className=" mx-auto px-4 py-4">
        <div className="flex items-center justify-around">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            

          <img 
            src='https://res.cloudinary.com/dzvwqhzgf/image/upload/v1764587281/Gaurs_dsqmnw.png'
            alt='Gaurs Logo'
            className='w-auto h-14'
            />
            {/* <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className=" font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold ">Gaur Chrysalis</h1>
              <div className="flex items-center text-sm ">
                <MdLocationOn className="mr-1" />
                <span>Phase 1 • Sector 22D, Yamuna Expressway</span>
              </div>
            </div> */}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className=" hover:text-amber-600 font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.a
              href="tel:+917055670556"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all cursor-pointer"
            >
              <FiPhone />
              <span>Call Now</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-amber-600 font-medium py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
              
              <a
                href="tel:+917055670556"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full cursor-pointer"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;