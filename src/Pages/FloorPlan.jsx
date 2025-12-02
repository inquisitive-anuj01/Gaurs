import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiZoomOut, FiMaximize, FiDownload, FiChevronRight } from 'react-icons/fi';
import { MdKingBed, MdBathtub, MdSquareFoot, MdLiving } from 'react-icons/md';

const FloorPlan = ({ openModal }) => {
  const [selectedPlan, setSelectedPlan] = useState('3bhk');
  const [zoom, setZoom] = useState(1);

  const floorPlans = {
    '3bhk': {
      title: "3 BHK Apartment",
      size: "1910 sq.ft.",
      image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1764659898/3bhk_ftu9af.jpg",
      rooms: [
        { type: "Bedroom", count: 3, icon: <MdKingBed /> },
        { type: "Bathroom", count: 3, icon: <MdBathtub /> },
        { type: "Living", count: 1, icon: <MdLiving /> },
        { type: "Balcony", count: 2, icon: <FiMaximize /> }
      ],
      features: [
        "Spacious Living Room",
        "Modular Kitchen",
        "Master Bedroom with Walk-in Closet",
        "All Bedrooms with Attached Bathrooms",
        "Utility Area",
        "Powder Room"
      ]
    },
    '4bhk': {
      title: "4 BHK Apartment",
      size: "2495 sq.ft.",
      image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1764659890/4bhk_czg249.jpg",
      rooms: [
        { type: "Bedroom", count: 4, icon: <MdKingBed /> },
        { type: "Bathroom", count: 4, icon: <MdBathtub /> },
        { type: "Living", count: 1, icon: <MdLiving /> },
        { type: "Balcony", count: 3, icon: <FiMaximize /> }
      ],
      features: [
        "Large Living & Dining Area",
        "Modular Kitchen with Utility",
        "Master Suite with Dressing Area",
        "All Bedrooms with Attached Bathrooms",
        "Study Room",
        "Powder Room",
        "Servant Room with Bathroom"
      ]
    }
  };

  const currentPlan = floorPlans[selectedPlan];

  return (
    <section id="floor-plan" className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full mr-4" />
            <span className="text-amber-600 font-semibold tracking-widest uppercase">
              Floor Plan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our meticulously designed floor plans for comfortable living
          </p>
        </motion.div>

        {/* Plan Selection */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(floorPlans).map((plan) => (
            <motion.button
              key={plan}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedPlan(plan);
                setZoom(1);
              }}
              className={`px-8 py-4 rounded-full font-bold transition-all cursor-pointer ${
                selectedPlan === plan
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-400'
              }`}
            >
              {floorPlans[plan].title}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Floor Plan Image */}
          <motion.div
            key={selectedPlan}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <button
                onClick={() => setZoom(Math.min(2, zoom + 0.25))}
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-800 hover:bg-white"
              >
                <FiZoomIn />
              </button>
              <button
                onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-800 hover:bg-white"
              >
                <FiZoomOut />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-800 hover:bg-white"
              >
                <FiMaximize />
              </button>
            </div>

            {/* Floor Plan Image */}
            <div className="relative h-96 overflow-hidden">
              <div
                className="w-full h-full transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
              >
                <img
                  src={currentPlan.image}
                  alt={currentPlan.title}
                  className="w-full h-full object-contain"
                  style={{ filter: "blur(6px)" }}
                />
              </div>
              
              {/* Overlay Blur Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 backdrop-blur-sm opacity-30" />
              </div>
            </div>

            {/* Image Footer */}
            <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{currentPlan.title}</h3>
                  <p className="text-gray-300">{currentPlan.size}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal('floor-plan')}
                  className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-lg font-semibold"
                >
                  <span>View Detailed Plan</span>
                  <FiChevronRight />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Plan Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Room Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Room Configuration
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {currentPlan.rooms.map((room, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                      <div className="text-amber-600 text-xl">
                        {room.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {room.count}
                      </div>
                      <div className="text-gray-600">
                        {room.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <div className="space-y-4">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mt-1">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal('brochure')}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all"
            >
              <FiDownload className="text-xl" />
              <span>Download Detailed Floor Plans</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Site Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Site Master Plan</h3>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Explore the complete layout of our 12-acre gated community with all amenities
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal('site-plan')}
              className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
            >
              <span>View Site Master Plan</span>
              <FiChevronRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FloorPlan;