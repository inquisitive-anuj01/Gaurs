import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiRefreshCw, FiMail, FiUser, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
              <Link to="/disclaimer" className="text-gray-300 hover:text-amber-400 transition-colors">
                Disclaimer
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=""
        >
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-lg sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Protecting your personal information is our priority
            </p>
          </div>

          {/* Commitment Banner */}
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-l-4 border-blue-500 rounded-r-xl p-4 sm:p-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <FiShield className="text-xl sm:text-2xl text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Our Commitment</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  In our endeavor and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
            {/* Privacy Policy Updates */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiRefreshCw className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Privacy Policy Updates</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.
                </p>
              </div>
            </div>

            {/* User Information */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiUser className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">User Information</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website.
                </p>
                
                <div className="mt-4 sm:mt-6 bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Information Collection</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          In some cases, while you visit our website, you may not need to provide any personal information.
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites.
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          Such links/pages may ask for your name, e-mail address, phone number etc.
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          The information furnished by you is used to provide relevant products and services.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 font-bold text-sm sm:text-base">✓</span>
                      <span className="text-sm sm:text-base">
                        To acknowledge receipt of your communication or to send out information and updates to you.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 font-bold text-sm sm:text-base">✓</span>
                      <span className="text-sm sm:text-base">
                        You have option of requesting removal from our mailing list.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 font-bold text-sm sm:text-base">✓</span>
                      <span className="text-sm sm:text-base">
                        We do not give away your personal information to any third party.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiLock className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Security</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6 border border-blue-200">
                  <p className="text-gray-700 leading-relaxed">
                    To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality.
                  </p>
                </div>
              </div>
            </div>

            {/* Use of Cookies */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiLock className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Use of Cookies</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <div className="bg-amber-50 rounded-xl p-4 sm:p-6 border border-amber-200">
                  <p className="text-gray-700 leading-relaxed">
                    We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiGlobe className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Third-Party Services</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to other websites. Please note that we are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of each and every website that collects personally identifiable information.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Third-Party Tools We Use:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Google Analytics for website analytics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Social media integrations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Payment processing services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiShield className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Children's Privacy</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <div className="bg-red-50 rounded-xl p-4 sm:p-6 border border-red-200">
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not directed to individuals under 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiRefreshCw className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Data Retention</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </div>
            </div>

            {/* Your Control Over Information */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiUser className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Control Over Information</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 sm:p-6 border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-3">You have the right to:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Access the personal information we hold about you</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Request correction of inaccurate personal information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Request deletion of your personal information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Object to processing of your personal information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Request restriction of processing your personal information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Request transfer of your personal information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Withdraw consent at any time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            {/* <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiMail className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Contact Information</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <div className="bg-gradient-to-r from-blue-900 to-gray-800 rounded-xl p-4 sm:p-6 text-white">
                  <p className="leading-relaxed mb-4">
                    In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-amber-300 mb-1">Authorized Channel Partner</h4>
                      <p className="text-blue-100">A Square Technologies</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-300 mb-1">UP RERA Number</h4>
                      <p className="text-blue-100">UPRERAAGT23089</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-300 mb-1">Project Developer</h4>
                      <p className="text-blue-100">Gaurs Group</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-300 mb-1">Contact Address</h4>
                      <p className="text-blue-100">
                        Plot-12, Sector 22D, Yamuna Expressway<br />
                        Greater Noida, Uttar Pradesh 201308
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Changes to This Policy */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FiRefreshCw className="text-xl sm:text-2xl text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 border border-yellow-200">
                  <p className="text-gray-700 leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                  <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                    <p className="text-yellow-800 text-sm font-medium">
                      <span className="font-bold">Last Updated:</span> {new Date().toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center"
              >
                Back to Home
              </Link>
              <Link
                to="/disclaimer"
                className="inline-flex items-center justify-center bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-amber-400 transition-all text-center"
              >
                View Disclaimer
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Gaur Chrysalis (Phase 1). All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-3">
              <Link to="/disclaimer" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Disclaimer
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;