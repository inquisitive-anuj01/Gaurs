import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Price List', href: '#price-list' },
    { label: 'Floor Plan', href: '#floor-plan' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram' },
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FiYoutube />, href: '#', label: 'YouTube' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/917055670556', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Gaur Chrysalis</h2>
                <p className="text-gray-400 text-sm">Phase 1</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              A premium residential project by Gaurs Group offering luxury 3 & 4 BHK 
              apartments at Yamuna Expressway with world-class amenities.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.label === 'WhatsApp' ? '_blank' : '_self'}
                  rel={social.label === 'WhatsApp' ? 'noopener noreferrer' : ''}
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 text-amber-400">
                  📍
                </div>
                <div>
                  <p className="text-gray-400">
                    Plot-12, Sector 22D
                    <br />
                    Yamuna Expressway
                    <br />
                    Greater Noida, UP - 201308
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 text-amber-400">
                  📞
                </div>
                <div>
                  <a href="tel:+917055670556" className="text-gray-400 hover:text-amber-400">
                    +91 70556 70556
                  </a>
                  <br />
                  <a href="tel:+917088470884" className="text-gray-400 hover:text-amber-400">
                    +91 70884 70884
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* RERA & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6">Legal & Compliance</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">RERA Details</h4>
                <p className="text-gray-400 text-sm">
                  Project: UPRERAPRJ622344/11/2025
                  <br />
                  Agent: UPRERAAGT10202
                </p>
                <a 
                  href="https://up-rera.in/projects/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 text-sm underline"
                >
                  View on UP RERA Portal
                </a>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Collection Account</h4>
                <p className="text-gray-400 text-sm">
                  GAURSONS PROMOTERS PVT LTD
                  <br />
                  Account: 9150397619
                  <br />
                  Kotak Mahindra Bank
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Gaur Chrysalis (Phase 1). All rights reserved.
              <br />
              This website is managed by authorized channel partner "A Square Technologies" of Gaurs Group.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:text-right">
            <Link 
              to="/disclaimer" 
              className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
            >
              Disclaimer
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-black/50 py-4 text-center">
        <p className="text-gray-500 text-sm">
          Made with <FiHeart className="inline text-red-500 mx-1" /> for our valued customers
        </p>
      </div>
    </footer>
  );
};

export default Footer;