import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [openSection, setOpenSection] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'Javascript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Vue JS', level: 75 },
      { name: 'Bootstrap', level: 85 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 }
    ],
    designer: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Photoshop', level: 75 },
      { name: 'Illustrator', level: 70 }
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
              onClick={() => toggleSection('designer')}
            >
              <div className="category-title">
                <span className="category-icon">🎨</span>
                <span>Designer</span>
              </div>
              {openSection === 'designer' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openSection === 'designer' && (
              <div className="category-content">
                {skillsData.designer.map((skill, index) => (
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
              onClick={() => toggleSection('backend')}
            >
              <div className="category-title">
                <span className="category-icon">💻</span>
                <span>Backend Developer</span>
              </div>
              {openSection === 'backend' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openSection === 'backend' && (
              <div className="category-content">
                {skillsData.backend.map((skill, index) => (
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
