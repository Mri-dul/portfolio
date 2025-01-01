import React from 'react';
import './index.css'; // Import Tailwind styles
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ProjectsSection from './components/Projects';
import SkillsSection from './components/Skills';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import Dcomp from './components/Dcomp';
import ThreeDCube from './components/ThreeDCube';
const App = () => {
 

  return (
    <div className="text-gray-800">
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Dcomp/>
   
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
