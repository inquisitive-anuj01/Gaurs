import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

const Header = ({ scrollToSection, openModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Highlights" },
    { id: "amenities", label: "Amenities" },
    { id: "price-list", label: "Price List" },
    { id: "floor-plan", label: "Floor Plan" },
    { id: "gallery", label: "Gallery" },
    { id: "location", label: "Location" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="https://res.cloudinary.com/dzvwqhzgf/image/upload/v1764587281/Gaurs_dsqmnw.png"
              alt="Gaurs Logo"
              className="h-12 w-auto md:h-14"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-amber-600 font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Call Now */}
            <motion.a
              href="tel:+9195766 71333"
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full shadow"
            >
              <FiPhone />
              <span className="ml-2">Call Now</span>
            </motion.a>
            {/* Book Site Visit - Desktop */}
            <motion.button
              onClick={() => openModal("siteVisit")}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-5 py-3 rounded-full shadow font-medium cursor-pointer"
            >
              Book Site Visit
            </motion.button>
          </nav>

          {/* MOBILE: Always Visible Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Call Now Small Button */}
            <a
              href="tel:+9195766 71333"
              className="flex items-center bg-amber-600 text-white px-3 py-2 rounded-full text-sm shadow"
            >
              <FiPhone size={16} />
            </a>

            {/* Book Site Visit */}
            <button
              onClick={() => openModal("siteVisit")}
              className="bg-blue-600 text-white px-3 py-2 rounded-full text-xs shadow font-medium cursor-pointer"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
