import React, { useEffect, useState } from 'react';
import '../SkillsSection.css';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector('#skills');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skills = [
    { name: 'HTML', level: '80%', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS', level: '75%', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'JavaScript', level: '70%', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'Python', level: '85%', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'React', level: '80%', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Node.js', level: '75%', icon: 'fab fa-node-js', color: '#68A063' },
    { name: 'SQL', level: '65%', icon: 'fas fa-database', color: '#00758F' },
    { name: 'C++', level: '75%', icon: 'fas fa-code', color: '#00599C' },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className={`text-center mb-5 ${isVisible ? 'fade-in' : ''}`}>Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-3 skill-card-wrapper ${
                isVisible ? 'slide-in' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Stagger effect
            >
              <div className="skill-card shadow">
                <div className="skill-header">
                  <i
                    className={`${skill.icon} skill-icon`}
                    style={{ color: skill.color }}
                  ></i>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="skill-level">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
