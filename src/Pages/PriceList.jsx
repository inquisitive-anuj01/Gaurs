import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiCheck, FiStar } from 'react-icons/fi';
import { MdSquareFoot, MdKingBed, MdBathtub } from 'react-icons/md';

const PriceList = ({ openModal }) => {
  const plans = [
    {
      type: "3 BHK",
      size: "1910 sq.ft.",
      price: "On Request",
      features: [
        "3 Bedrooms with Attached Bathrooms",
        "Spacious Living & Dining Area",
        "Modern Modular Kitchen",
        "Balcony with City View",
        "Premium Flooring",
        "Smart Home Features"
      ],
      popular: false
    },
    {
      type: "4 BHK",
      size: "2495 sq.ft.",
      price: "On Request",
      features: [
        "4 Bedrooms with Attached Bathrooms",
        "Large Living & Dining Area",
        "Modular Kitchen with Utility",
        "Two Balconies with Views",
        "Premium Wooden Flooring",
        "Smart Home Automation",
        "Walk-in Closet in Master Bedroom"
      ],
      popular: true
    }
  ];

  return (
    <section id="price-list" className="py-10 bg-gradient-to-b from-gray-50 to-white">
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
              Price List
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unlock the Door to Affordable Luxury
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our premium selection of apartments designed for modern living
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                plan.popular 
                  ? 'shadow-2xl transform scale-105' 
                  : 'shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-b-lg z-10">
                  <div className="flex items-center space-x-1">
                    <FiStar className="fill-current" />
                    <span className="font-bold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`relative p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200'
                  : 'bg-white border border-gray-100'
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <MdKingBed className="text-2xl text-amber-600" />
                    <h3 className="text-3xl font-bold text-gray-900">
                      {plan.type}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
                    <MdSquareFoot className="text-xl" />
                    <span className="text-lg font-medium">{plan.size}</span>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-gray-500 mb-2">Starting Price</div>
                    <div className="text-4xl font-bold text-amber-600">
                      {plan.price}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                        plan.popular
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <FiCheck className="text-sm" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Amenities Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <MdKingBed className="text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-500">{plan.type}</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <MdBathtub className="text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-500">Attached Bath</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <MdSquareFoot className="text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-500">Spacious</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal('price-breakup')}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <span>View Price Breakup</span>
                  <FiChevronRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;