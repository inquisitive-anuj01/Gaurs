import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiWifi, FiDroplet, FiWind, FiRadio, FiTv, FiSun } from 'react-icons/fi';
import { GiGymBag, GiTennisCourt, GiBasketballBall, GiPartyPopper } from 'react-icons/gi';
import { MdSportsTennis, MdLocalParking, MdSecurity } from 'react-icons/md';

const Amenities = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const amenitiesCategories = [
    { id: 'all', name: 'All Amenities' },
    { id: 'sports', name: 'Sports' },
    { id: 'leisure', name: 'Leisure' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'security', name: 'Security' },
  ];

  const amenities = [
    {
      id: 1,
      title: "Swimming Pool",
      category: "leisure",
      icon: <GiTennisCourt className="text-4xl" />,
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800",
      description: "Olympic-size swimming pool with separate kids pool"
    },
    {
      id: 2,
      title: "Gymnasium",
      category: "fitness",
      icon: <GiGymBag className="text-4xl" />,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800",
      description: "State-of-the-art gym with modern equipment"
    },
    {
      id: 3,
      title: "Badminton Court",
      category: "sports",
      icon: <MdSportsTennis className="text-4xl" />,
      image: "https://images.unsplash.com/photo-1595435934247-5d33b7f92c70?auto=format&fit=crop&w=800",
      description: "Professional badminton courts"
    },
    {
      id: 4,
      title: "Kids Play Area",
      category: "leisure",
      icon: <GiPartyPopper className="text-4xl" />,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800",
      description: "Safe and fun play area for children"
    },
    {
      id: 5,
      title: "Jogging Track",
      category: "fitness",
      icon: <FiWind className="text-4xl" />,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800",
      description: "2km jogging track amidst greenery"
    },
    {
      id: 6,
      title: "Clubhouse",
      category: "leisure",
      icon: <FiTv className="text-4xl" />,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800",
      description: "75,000 sq.ft premium clubhouse"
    },
    {
      id: 7,
      title: "Tennis Court",
      category: "sports",
      icon: <GiTennisCourt className="text-4xl" />,
      image: "https://images.unsplash.com/photo-1595435934249-5e6d79a5e3c5?auto=format&fit=crop&w=800",
      description: "Professional tennis courts"
    },
    {
      id: 8,
      title: "Basketball Court",
      category: "sports",
      icon: <GiBasketballBall className="text-4xl" />,
      image: "https://images.unsplash.com/photo-1544919982-b61976a0d7ed?auto=format&fit=crop&w=800",
      description: "Full-size basketball court"
    }
  ];

  const filteredAmenities = activeCategory === 'all' 
    ? amenities 
    : amenities.filter(item => item.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredAmenities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredAmenities.length) % filteredAmenities.length);
  };

  return (
    <section id="amenities" className="py-10 bg-gradient-to-b from-white to-gray-50">
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
              Amenities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Luxury That Serves Every Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            World-class amenities designed for your comfort, entertainment, and well-being
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {amenitiesCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentSlide(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-400'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Carousel for Mobile */}
        <div className="lg:hidden relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-64">
                <img
                  src={filteredAmenities[currentSlide]?.image}
                  alt={filteredAmenities[currentSlide]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white"
                >
                  <FiChevronRight />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                    <div className="text-amber-600">
                      {filteredAmenities[currentSlide]?.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {filteredAmenities[currentSlide]?.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {filteredAmenities[currentSlide]?.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {filteredAmenities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-amber-500 w-6'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="text-white">
                    {amenity.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FiWifi />, title: "High-Speed WiFi", desc: "Fiber optic connectivity" },
              { icon: <MdSecurity />, title: "24/7 Security", desc: "CCTV & security patrol" },
              { icon: <MdLocalParking />, title: "Smart Parking", desc: "Reserved with EV charging" },
              { icon: <FiSun />, title: "Solar Power", desc: "Eco-friendly energy" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-amber-400">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-bold mb-1">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;