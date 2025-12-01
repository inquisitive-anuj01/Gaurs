import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiShield, FiHome, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Gaur Chrysalis</h1>
                <p className="text-gray-300 text-sm">Phase 1</p>
              </div>
            </Link>
            <nav className="flex space-x-6">
              <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                Home
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Hero Section */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl mb-6">
              <FiAlertTriangle className="text-4xl text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Disclaimer
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Important information about our website content and terms
            </p>
          </div>

          {/* Warning Banner */}
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-l-4 border-red-500 rounded-r-xl p-6">
            <div className="flex items-start space-x-4">
              <FiAlertTriangle className="text-2xl text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700">
                  Please read this disclaimer carefully before using our website or making any decisions based on the information provided.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            {/* Channel Partner Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiShield className="text-2xl text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Website Ownership</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The website belongs to Authorized Channel Partner <span className="font-semibold text-amber-600">"A Square Technologies"</span> UP RERA NO <span className="font-semibold">UPRERAAGT23089</span> of <span className="font-semibold">"Gaur Group"</span>.
                </p>
              </div>
            </div>

            {/* Content Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiHome className="text-2xl text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Content Purpose</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>The content of the website is for information purposes only.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Images are for representation purpose only.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Prices mentioned are subject to change without notice.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Properties mentioned are subject to availability.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Important Disclaimer */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiAlertTriangle className="text-2xl text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Important Disclaimer</h2>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  By accessing this website, the viewer confirms that the information including brochures and marketing collateral on this website is solely for informational purposes and the viewer has not relied on this information for making any booking/purchase in any project of the company.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/ information on this website.
                </p>
              </div>
            </div>

            {/* RERA Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiFileText className="text-2xl text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">RERA Compliance</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Please also note that the company has verified the information and the compliances of the projects. Further, the company has checked the RERA (Real Estate Regulation Act 2016) registration status of the real estate projects listed herein.
                </p>
                <div className="mt-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Important Note</h3>
                  <p className="text-gray-200">
                    The company does not make any representation in regards to the compliances done against these projects. You should make yourself aware about:
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-200">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span>The RERA registration status of the listed real estate projects before purchasing property.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span>All necessary approvals and clearances from relevant authorities.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span>Project completion timelines and delivery schedules.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need More Information?</h3>
              <p className="text-gray-700 mb-4">
                For accurate and updated information about the project, please contact our sales team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+917055670556"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Call Sales Team
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-amber-400 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Gaur Chrysalis (Phase 1). All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link to="/disclaimer" className="text-gray-400 hover:text-amber-400 transition-colors">
                Disclaimer
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Disclaimer;