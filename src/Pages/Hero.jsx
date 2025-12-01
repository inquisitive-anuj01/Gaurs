import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { MdKingBed, MdSquareFoot } from 'react-icons/md';
import BookingForm from './BookingForm';

const Hero = ({ openModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img
          src="https://res.cloudinary.com/dzvwqhzgf/image/upload/v1764587280/GaursBg_ksyuml.jpg"
          alt="Gaurs Apartments"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" max-w-7xl mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <FiMapPin className="text-amber-400" />
              <span>Sector 22D, Yamuna Expressway</span>
            </motion.div>

            <h1 className="text-xl md:text-4xl font-semibold mb-6 leading-tight">
              Gaur Chrysalis (Phase 1)
            
            </h1>

            <h2 className="text-xl md:text-3xl font-light mb-8 text-gray-200">
              3 & 4 BHK Luxury Apartments
            </h2>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <MdKingBed className="text-2xl text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Apartments</p>
                  <p className="text-lg font-semibold">3 & 4 BHK</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <MdSquareFoot className="text-2xl text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Project Area</p>
                  <p className="text-lg font-semibold">12 Acres</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal('brochure')}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all cursor-pointer"
              >
                <span>Download Brochure</span>
                <FiDownload />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal('enquiry')}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all cursor-pointer"
              >
                <span>Know More</span>
                <FiChevronRight />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <BookingForm title="Book A Site Visit!" />
          </motion.div>
        </div>

        {/* Floating Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Price', value: 'On Request' },
            { label: 'RERA No.', value: 'UPRERAPRJ622344/11/2025' },
            { label: 'Towers', value: '7 Towers' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-500/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
            >
              <p className="text-sm text-gray-300 mb-2">{item.label}</p>
              <p className="text-base font-bold text-white">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;