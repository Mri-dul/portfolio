import React, { useEffect, useState } from 'react';
import heroImage from './me.png'; // Importing the image

const Hero = () => {
  const [isImageVisible, setIsImageVisible] = useState(false); // Controls when the image starts sliding
  const [areButtonsVisible, setAreButtonsVisible] = useState(false); // Controls when buttons are visible

  useEffect(() => {
    // Image will slide in after 0.5 seconds
    setTimeout(() => setIsImageVisible(true), 500);

    // Buttons will appear after 1.5 seconds (after image slides in)
    setTimeout(() => setAreButtonsVisible(true), 1500);
  }, []);

  return (
    <section id="home" className="hero text-center py-5 text-white">
   
      {/* Image Sliding Section */}
      <div
        className={`hero-image ${isImageVisible ? 'slide-in' : ''}`}
        style={{ backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(110, 203, 221, 0.9) 70%), url(${heroImage}` }}
      ></div>

      {/* Text Section */}
      <div className="hero-text">
        <h1 className="display-4 fw-bold">Hi, I'm Mridul Bhakta</h1>
        <p className="lead">Aspiring Software Engineer | Web Developer</p>
               {/* Buttons Section */}
               <div className={`hero-buttons ${areButtonsVisible ? 'fade-in' : ''}`}>
        <a href="mailto:dahakakali@gmail.com" className="btn btn-light btn-lg mx-2 shadow">Contact Me</a>
        <a href="#projects" className="btn btn-outline-light btn-lg mx-2 shadow">View My Work</a>
      </div>
      </div>
  

    </section>
  );
};

export default Hero;
