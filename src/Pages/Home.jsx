import React, { useState } from 'react'
import Header from './Header';
import Hero from './Hero';
import Overview from './Overview';
import Highlights from './Highlights';
import Amenities from './Amenities';
import PriceList from './PriceList';
import FloorPlan from './FloorPlan';
import Gallery from './Gallery';
import Location from './Location';
import Footer from './Footer';
import Modal from './Modal';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalType, setModalType] = useState('brochure');
    
      const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className="min-h-screen bg-gray-100 w-full overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      <Hero openModal={openModal} />
      <Overview openModal={openModal}/>
      <Highlights />
      <Amenities />
      <PriceList openModal={openModal} />
      <FloorPlan openModal={openModal} />
      <Gallery />
      <Location />
      {/* <Contact openModal={openModal} /> */}
      <Footer />
      
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            type={modalType}
          />
        )}
      </AnimatePresence>

    
    </div>
  )
}

export default Home