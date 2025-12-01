import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Hero from './Pages/Hero';
import Overview from './Pages/Overview';
import Highlights from './Pages/Highlights';
import Amenities from './Pages/Amenities';
import PriceList from './Pages/PriceList';
import FloorPlan from './Pages/FloorPlan';
import Gallery from './Pages/Gallery';
import Location from './Pages/Location';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Modal from './Pages/Modal';
import Home from './Pages/Home';
import Disclaimer from './Pages/Discalaimer';
import PrivacyPolicy from './Pages/Privacy';



function App() {
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
<>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/disclaimer' element = {<Disclaimer/>} />
        <Route path='/privacy' element = {<PrivacyPolicy/>} />
      </Routes>
    </Router>
</>
    
  );
}

export default App;