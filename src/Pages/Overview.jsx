import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const Overview = ({openModal}) => {
  return (
    <section id="overview" className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Images */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2070"
                alt="Gaur Chrysalis Overview"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=2070"
                alt="Interior"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center mb-6">
              <div className="w-12 h-1 bg-amber-500 rounded-full mr-4" />
              <span className="text-amber-600 font-semibold tracking-widest uppercase">
                Overview
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Drive yourself to luxurious living standards
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Gaurs Group introduces Gaur Chrysalis (Phase 1) at Yamuna Expressway. 
                It is a thoughtfully designed RERA-approved residential project on 12-acres. 
                With world-class amenities that envelop luxury, the lush green landscape 
                here offers serenity.
              </p>
              <p>
                Here, 7 towers, and 75000 sq.ft modern clubhouse, captivate residents with 
                a majestic skyline and city view. Also, the voluminous layout offers the best 
                3BHK and 4BHK apartments at the Yamuna Expressway.
              </p>
              <p>
                The premium conveniences and advanced security amplify an elegant living standard. 
                The gated community has a play area and recreational sphere too.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal('know More')}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Know More</span>
              <FiChevronRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;