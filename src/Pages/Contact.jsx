import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageSquare, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import BookingForm from './BookingForm';

const Contact = ({ openModal }) => {
  const contactInfo = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone Number",
      details: ["+91 70556 70556", "+91 70884 70884"],
      action: "tel:+917055670556",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email Address",
      details: ["info@gaurchrysalis.com", "sales@gaurchrysalis.com"],
      action: "mailto:info@gaurchrysalis.com",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Site Office",
      details: ["Plot-12, Sector 22D", "Yamuna Expressway, Greater Noida", "Uttar Pradesh - 201308"],
      action: "#",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 10 AM - 7 PM", "Sunday: 11 AM - 6 PM"],
      action: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-10 bg-gradient-to-b from-white to-gray-50">
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
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Contact our sales team for personalized assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <a
                    href={info.action}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12</div>
                  <div className="text-gray-300">Acres Land</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">7</div>
                  <div className="text-gray-300">Towers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">75K</div>
                  <div className="text-gray-300">Sq.Ft Clubhouse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">950+</div>
                  <div className="text-gray-300">Units</div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917055670556"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BookingForm title="Schedule a Site Visit" />

            {/* Sales Team Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <FiMessageSquare className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sales Team</h3>
                  <p className="text-gray-600">Dedicated sales representatives</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900">Mr. Rohan Sharma</p>
                    <p className="text-sm text-gray-600">Senior Sales Manager</p>
                  </div>
                  <a href="tel:+919876543210" className="text-amber-600 font-semibold">
                    +91 98765 43210
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900">Ms. Priya Singh</p>
                    <p className="text-sm text-gray-600">Sales Executive</p>
                  </div>
                  <a href="tel:+919876543211" className="text-amber-600 font-semibold">
                    +91 98765 43211
                  </a>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Our team is available 7 days a week to assist you with site visits,
                pricing, and all your queries.
              </p>
            </motion.div>

            {/* RERA Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 text-white text-center"
            >
              <h4 className="font-bold mb-2">RERA Approved</h4>
              <p className="text-sm text-blue-100">
                UPRERAPRJ622344/11/2025
              </p>
              <a 
                href="https://up-rera.in/projects/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-200 hover:text-white underline mt-2 inline-block"
              >
                View on UP RERA Portal
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;