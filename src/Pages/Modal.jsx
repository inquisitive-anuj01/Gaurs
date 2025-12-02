import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiMail, FiChevronDown, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

const Modal = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const cities = [
    'Select City',
    'Noida',
    'Greater Noida',
    'Delhi',
    'Ghaziabad',
    'Faridabad',
    'Gurgaon',
    'Other'
  ];

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const downloadPDF = () => {
    // Direct download link from Google Drive
    const pdfUrl = "https://drive.google.com/uc?export=download&id=1LCPxo3irMesU7ul3XbamzJqfD708KqiI";
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Gaur-Chrysalis-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send data to backend
      const response = await fetch('https://gaurs-back.vercel.app/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: type,
          timestamp: new Date().toISOString(),
          source: 'modal'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        
        // Download PDF if it's a brochure request
        if (type === 'brochure') {
          setTimeout(() => {
            downloadPDF();
          }, 1000);
        }
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            details: ''
          });
          setIsSubmitted(false);
          onClose();
        }, 3000);
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 z-50 p-2 sm:p-4 flex items-center justify-center">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
              style={{
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {/* Glass Effect Container */}
              <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-amber-500/30 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                {/* Header - Sticky on Mobile */}
                <div className="sticky top-0 z-10 p-4 sm:p-6 border-b border-amber-500/30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        {isSubmitted ? (
                          <FiCheckCircle className="text-white text-lg sm:text-xl" />
                        ) : type === 'brochure' ? (
                          <FiDownload className="text-white text-lg sm:text-xl" />
                        ) : (
                          <FiMail className="text-white text-lg sm:text-xl" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-2xl font-bold text-white truncate">
                          {isSubmitted 
                            ? 'Thank You!' 
                            : type === 'brochure' 
                              ? 'Download Brochure' 
                              : 'Get More Details'}
                        </h3>
                        <p className="text-amber-300 text-xs sm:text-sm mt-0.5 truncate">
                          {isSubmitted 
                            ? 'We\'ll contact you soon!' 
                            : 'Fill the form below and we\'ll get in touch'}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onClose}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:text-red-300 transition-all cursor-pointer flex-shrink-0 ml-2"
                    >
                      <FiX className="text-base sm:text-xl" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Body - Scrollable on Mobile */}
                <div className="p-4 sm:p-6">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiCheckCircle className="text-white text-3xl" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        Thank You!
                      </h4>
                      <p className="text-gray-300 mb-6">
                        Your information has been submitted successfully.
                        {type === 'brochure' && ' The brochure has been sent to your email.'}
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                        <p className="text-green-300 text-sm">
                          ✓ Our team will contact you within 24 hours
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        {/* Name */}
                        <div>
                          <label className="block text-amber-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              required
                              disabled={isSubmitting}
                              className="w-full px-4 py-2.5 sm:py-3.5 bg-white/10 border border-amber-500/30 rounded-lg sm:rounded-xl text-white placeholder-amber-100/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 transition-all text-sm sm:text-base disabled:opacity-50"
                            />
                          </div>
                        </div>
                        
                        {/* Email */}
                        <div>
                          <label className="block text-amber-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              required
                              disabled={isSubmitting}
                              className="w-full px-4 py-2.5 sm:py-3.5 bg-white/10 border border-amber-500/30 rounded-lg sm:rounded-xl text-white placeholder-amber-100/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 transition-all text-sm sm:text-base disabled:opacity-50"
                            />
                          </div>
                        </div>
                        
                        {/* Phone */}
                        <div>
                          <label className="block text-amber-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                            Mobile Number *
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter mobile number"
                              required
                              disabled={isSubmitting}
                              className="w-full px-4 py-2.5 sm:py-3.5 bg-white/10 border border-amber-500/30 rounded-lg sm:rounded-xl text-white placeholder-amber-100/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 transition-all text-sm sm:text-base disabled:opacity-50"
                            />
                          </div>
                        </div>
                        
                        {/* City */}
                        <div>
                          <label className="block text-amber-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                            City *
                          </label>
                          <div className="relative">
                            <select
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              required
                              disabled={isSubmitting}
                              className="w-full px-4 py-2.5 sm:py-3.5 bg-white/10 border border-amber-500/30 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 transition-all appearance-none text-sm sm:text-base disabled:opacity-50"
                            >
                              {cities.map((city, index) => (
                                <option 
                                  key={index} 
                                  value={city}
                                  className="bg-gray-800 text-white"
                                  disabled={index === 0}
                                >
                                  {city}
                                </option>
                              ))}
                            </select>
                            <FiChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-amber-400 pointer-events-none" />
                          </div>
                        </div>
                        
                        {/* Additional Details */}
                        <div>
                          <label className="block text-amber-200 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                            Any other details you need
                          </label>
                          <div className="relative">
                            <textarea
                              name="details"
                              value={formData.details}
                              onChange={handleChange}
                              placeholder="Tell us what you're looking for, preferred time for site visit, etc."
                              rows="2"
                              disabled={isSubmitting}
                              className="w-full px-4 py-2.5 sm:py-3.5 bg-white/10 border border-amber-500/30 rounded-lg sm:rounded-xl text-white placeholder-amber-100/50 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 transition-all resize-none text-sm sm:text-base disabled:opacity-50"
                            />
                            <FiMessageSquare className="absolute right-3 sm:right-4 top-3 text-amber-400/50" />
                          </div>
                        </div>
                        
                        {/* Error Message */}
                        {error && (
                          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <p className="text-red-300 text-sm">{error}</p>
                          </div>
                        )}
                        
                        {/* Submit Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:shadow-xl hover:shadow-amber-500/20 transition-all cursor-pointer relative overflow-hidden group text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            <span className="relative z-10">
                              {type === 'brochure' 
                                ? 'Download Brochure Now' 
                                : 'Submit Your Request'}
                            </span>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                      </form>
                      
                      {/* Assurance Message */}
                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg sm:rounded-xl">
                        <p className="text-center text-amber-200 text-xs sm:text-sm">
                          <span className="font-semibold">✓ Your information is secure</span>
                          <br />
                          We'll contact you within 24 hours. No spam, guaranteed.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;