import React from 'react';
import Particles from 'react-tsparticles';  // You need to install 'react-tsparticles'
import { loadFull } from 'tsparticles';

const FloatingParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1, direction: 'none', random: true, outModes: { default: 'out' } },
    },
  };

  return (
    <div className="particles-container">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    </div>
  );
};

export default FloatingParticles;
