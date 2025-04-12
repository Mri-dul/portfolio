import React, { useState } from 'react';
import '../Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start in the middle project
  const projects = [
    { title: 'Weather Forecast', description: 'A dynamic app that provides accurate weather updates using APIs.' },
    { title: 'To-Do List', description: 'A task management app to organize daily activities efficiently.' },
    { title: 'Portfolio Website', description: 'A personal portfolio showcasing my skills and projects.' },
    { title: 'Project 4', description: 'A project with advanced features.' },
    { title: 'Project 5', description: 'A project that integrates advanced technologies for better user experience.' },
  ];

  // Go Left: Move to the previous project
  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Go Right: Move to the next project
  const goRight = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row justify-content-center position-relative">
          {/* Left Button */}
          <button className="nav-btn left-btn" onClick={goLeft}>❮</button>

          {/* Cards Container */}
          <div className="card-container">
            {projects.map((project, index) => {
              const isCenter = index === currentIndex;
              const isLeft = index === (currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
              const isRight = index === (currentIndex === projects.length - 1 ? 0 : currentIndex + 1);

              return (
                <div
                  key={index}
                  className={`project-card ${isCenter ? 'center' : ''} ${isLeft ? 'left' : ''} ${isRight ? 'right' : ''}`}
                >
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Button */}
          <button className="nav-btn right-btn" onClick={goRight}>❯</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
