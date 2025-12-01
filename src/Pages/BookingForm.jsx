import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';

const BookingForm = ({ title = "Get in Touch" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden mt-4"
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          {title}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/10 rounded-xl text-white placeholder-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all"
            />
          </div>
          
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/10 rounded-xl text-white placeholder-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all"
            />
          </div>
          
          <div className="relative">
            <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Mobile No."
              required
              className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/10 rounded-xl text-white placeholder-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all cursor-pointer"
          >
            Submit Now
          </motion.button>
        </form>
        
        <p className="text-sm text-white mt-6 text-center">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </motion.div>
  );
};

export default BookingForm;