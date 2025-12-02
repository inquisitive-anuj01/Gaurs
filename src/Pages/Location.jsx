import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiNavigation, FiClock, FiHome, FiBriefcase, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { MdSchool, MdLocalHospital, MdLocalAirport, MdTheaterComedy } from 'react-icons/md';

const Location = () => {
  const locationAdvantages = [
    {
      icon: <MdLocalAirport className="text-2xl" />,
      title: "Jewar International Airport",
      distance: "15 Mins",
      description: "Upcoming world-class international airport"
    },
    {
      icon: <MdTheaterComedy className="text-2xl" />,
      title: "Film City",
      distance: "5 Mins",
      description: "Proposed Bollywood film city"
    },
    {
      icon: <MdSchool className="text-2xl" />,
      title: "Gautam Buddha University",
      distance: "20 Mins",
      description: "Premier educational institution"
    },
    {
      icon: <MdLocalHospital className="text-2xl" />,
      title: "Jaypee Hospital",
      distance: "10 Mins",
      description: "Multi-specialty hospital"
    },
    {
      icon: <FiShoppingBag className="text-2xl" />,
      title: "Pari Chowk",
      distance: "10 Mins",
      description: "Major commercial and retail hub"
    },
    {
      icon: <FiHome className="text-2xl" />,
      title: "Formula 1 Track",
      distance: "25 Mins",
      description: "Buddh International Circuit"
    },
    {
      icon: <FiBriefcase className="text-2xl" />,
      title: "Commercial Hubs",
      distance: "Various",
      description: "Close to major IT and business parks"
    },
    {
      icon: <FiHome className="text-2xl" />,
      title: "Residential Townships",
      distance: "Adjacent",
      description: "Surrounded by premium residential projects"
    }
  ];

  const connectivity = [
    { route: "Yamuna Expressway", time: "Direct Access", icon: <FiHome /> },
    { route: "Noida-Greater Noida Expressway", time: "18 Mins", icon: <FiNavigation /> },
    { route: "Eastern Peripheral Expressway", time: "10 Mins", icon: <FiHome /> },
    { route: "Delhi NCR", time: "45 Mins", icon: <FiClock /> }
  ];

  return (
    <section id="location" className="py-10 bg-gradient-to-b from-amber-50 to-amber-100">
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
              Location Advantages
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prime Location Unbeatable Connectivity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategically located at the heart of Yamuna Expressway with excellent connectivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                   
                    <img src="https://res.cloudinary.com/dzvwqhzgf/image/upload/v1764667843/Screenshot_2025-12-02_145951_onvoue.png" alt="location" className='h-full w-full ' />
                  </div>
                </div>
                
                {/* Location Markers */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
              </div>
              
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <h3 className="text-xl font-bold mb-2">Exact Location</h3>
                <p className="text-gray-300">
                  Plot-12, Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh 201308
                </p>
              </div>
            </div>

            {/* Connectivity Info */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connectivity Highlights</h3>
              <div className="space-y-4">
                {connectivity.map((route, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <div className="text-amber-600">
                          {route.icon}
                        </div>
                      </div>
                      <span className="font-medium text-gray-800">{route.route}</span>
                    </div>
                    <span className="text-amber-600 font-semibold">{route.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locationAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-amber-600">
                        {advantage.icon}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-bold text-gray-900">
                          {advantage.title}
                        </span>
                        <span className="px-3 py-1 bg-amber-100 text-amber-600 text-xs font-bold rounded-full">
                          {advantage.distance}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Investment Potential */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Investment Potential</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">High ROI</div>
                  <p className="text-amber-100">Expected appreciation</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Growing Area</div>
                  <p className="text-amber-100">Rapid development</p>
                </div>
              </div>
              <p className="mt-4 text-amber-100">
                Yamuna Expressway is emerging as the next premium residential and commercial hub in NCR
              </p>
            </motion.div>

            {/* Future Developments */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Developments</h3>
              <div className="space-y-3">
                {[
                  "Olympic City (Proposed)",
                  "Medicity Healthcare Hub",
                  "IT & Tech Parks",
                  "International Schools",
                  "Shopping Malls & Retail"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;