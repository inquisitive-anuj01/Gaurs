import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiUsers, FiHome, FiAward, FiLock, FiCoffee } from 'react-icons/fi';

const Highlights = () => {
  const highlights = [
    {
      icon: <FiHome className="text-3xl" />,
      title: "Gated Community",
      description: "11-acres secure gated community with premium security",
      number: "01"
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Play & Party Area",
      description: "Dedicated spaces for entertainment and recreation",
      number: "02"
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Reserved Parking",
      description: "Ample parking space for residents and visitors",
      number: "03"
    },
    {
      icon: <FiCoffee className="text-3xl" />,
      title: "Wellness Zone",
      description: "Holistically designed wellness and fitness areas",
      number: "04"
    },
    {
      icon: <FiLock className="text-3xl" />,
      title: "Advanced Security",
      description: "24/7 surveillance and advanced security systems",
      number: "05"
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Clubhouse & Pool",
      description: "Premium clubhouse and swimming pool facilities",
      number: "06"
    }
  ];

  return (
    <section id="highlights" className="py-10 bg-gradient-to-br from-amber-50 to-amber-100">
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
              Highlight
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elevating Properties: Our Spotlight Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the exceptional features that make Gaur Chrysalis stand out in luxury living
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {highlight.number}
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-amber-600">
                    {highlight.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12 Acres", label: "Total Land Parcel" },
              { value: "7 Towers", label: "Number of Towers" },
              { value: "75,000 sq.ft", label: "Clubhouse Area" },
              { value: "950+", label: "Total Units" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-amber-100 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;