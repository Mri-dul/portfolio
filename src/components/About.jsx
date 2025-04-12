import React, { useState, useEffect } from 'react';
import profilePhoto from '../../src/assets/me-removebg-preview.png'; // Replace with the actual photo path

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

const AboutSection = () => {
  return (
    
    <section id="about" className="py-5 bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-12">
        {/* Left Side: About Text */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-center lg:text-left text-2xl font-bold mb-4">About Me</h2>
          <p className="text-center lg:text-left text-gray-700">
            I am a Computer Science and Engineering student at Gurunanak Institute of Technology, aiming to enhance my skills and solve real-world problems. 
            I have experience in web development and building interactive applications.
          </p>
        </div>

        {/* Right Side: Profile Photo and Typing Animation */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
             <div className="text-center text-lg font-medium text-gray-800 mt-4">
            <TypingEffect text="Passionate about solving problems with code. Always eager to learn and grow in technology!" />
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
