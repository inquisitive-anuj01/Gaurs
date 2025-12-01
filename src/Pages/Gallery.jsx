import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight, FiVideo } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'exterior',
      title: 'Project Exterior',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800',
      thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400'
    },
    {
      id: 2,
      type: 'image',
      category: 'interior',
      title: 'Luxury Living Room',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800',
      thumbnail: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400'
    },
    {
      id: 3,
      type: 'image',
      category: 'amenities',
      title: 'Swimming Pool',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800',
      thumbnail: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=400'
    },
    {
      id: 4,
      type: 'image',
      category: 'interior',
      title: 'Modern Kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400'
    },
    {
      id: 5,
      type: 'image',
      category: 'amenities',
      title: 'Gymnasium',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400'
    },
    {
      id: 6,
      type: 'video',
      category: 'promotional',
      title: 'Project Walkthrough',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800',
      thumbnail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400'
    },
    {
      id: 7,
      type: 'image',
      category: 'exterior',
      title: 'Garden View',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800',
      thumbnail: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400'
    },
    {
      id: 8,
      type: 'image',
      category: 'interior',
      title: 'Master Bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800',
      thumbnail: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'promotional', label: 'Videos' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openImage = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-10 bg-gradient-to-b from-white to-gray-50">
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
              Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Your Dream Home
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our stunning collection of images showcasing luxury living at Gaur Chrysalis
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterItem.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
                filter === filterItem.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-400'
              }`}
            >
              {filterItem.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => openImage(item, index)}
              className="group relative cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Video Indicator */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <FiVideo className="text-white text-xl" />
                  </div>
                )}
                
                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiZoomIn className="text-white text-2xl" />
                  </div>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={closeImage}
                className="absolute top-8 right-8 text-white text-2xl z-10"
              >
                <FiX />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
              >
                <FiChevronRight />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedImage.type === 'video' ? (
                  <div className="aspect-video bg-black rounded-xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <FiVideo className="text-6xl text-white mb-4 mx-auto" />
                        <p className="text-white text-xl">{selectedImage.title}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                  />
                )}
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                  <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="text-gray-300 capitalize">{selectedImage.category}</p>
                </div>
              </motion.div>

              {/* Counter */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
                {currentIndex + 1} / {filteredItems.length}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;