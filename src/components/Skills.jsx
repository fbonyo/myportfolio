import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [openSection, setOpenSection] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Vite', level: 85 },
      { name: 'Tailwind CSS', level: 80 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'API Integration', level: 80 },
      { name: 'Performance Optimization', level: 75 },
      { name: 'Web Accessibility', level: 70 }
    ]
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <div className="section-header">
          <h2>Skills</h2>
          <p className="subtitle">My technical level</p>
        </div>
        <div className="skills-categories">
          <div className="skill-category">
            <div
              className="category-header"
              onClick={() => toggleSection('frontend')}
            >
              <div className="category-title">
                <span className="category-icon">{'{ }'}</span>
                <span>Frontend Developer</span>
              </div>
              {openSection === 'frontend' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openSection === 'frontend' && (
              <div className="category-content">
                {skillsData.frontend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="skill-category">
            <div
              className="category-header"
              onClick={() => toggleSection('tools')}
            >
              <div className="category-title">
                <span className="category-icon">🛠️</span>
                <span>Tools & Other Skills</span>
              </div>
              {openSection === 'tools' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openSection === 'tools' && (
              <div className="category-content">
                {skillsData.tools.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
