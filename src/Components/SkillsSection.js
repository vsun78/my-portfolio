import { useEffect, useRef, useState } from 'react';
import './SkillsSection.css';

function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['JavaScript', 'Python', 'Java', 'C#', 'TypeScript', 'SQL', 'CSS/HTML']
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚡',
      skills: ['React', 'Spring Boot', 'NodeJS', 'PyTorch', 'NumPy', 'Pandas']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'PostgreSQL', 'MySQL', 'MongoDB', 'Unity', 'JavaFX', 'YOLOv8', 'REST API', 'Postman', 'Figma']
    },
    {
      title: 'Cloud & Deployment',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'Netlify', 'Railway']
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Technical</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-category ${isVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

