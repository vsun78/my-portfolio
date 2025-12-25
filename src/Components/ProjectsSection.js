import { useEffect, useRef, useState } from 'react';
import './ProjectsSection.css';

function ProjectsSection() {
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

  const projects = [
    {
      title: 'CalorieKarma',
      description: 'Full-Stack social accountability and calorie tracker built with a Java/Spring Boot API and JS/HTML/CSS front-end. Implemented a high-stakes group challenge system where users assign and view punishments for peers who fail to meet daily caloric goals. Utilized PostgreSQL/JPA for persistence, secured with BCrypt authentication.',
      tech: ['Java', 'Spring Boot', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'Postman', 'BCrypt', 'Railway', 'Netlify'],
      image: '/images/CalorieKarmaLogo.png',
      color: 'linear-gradient(135deg, #00ff88 0%, #00d9ff 100%)',
      link: 'https://github.com/vsun78/CalorieFlow.git'
    },
    {
      title: 'DermaAI',
      description: 'Deep learning model to detect early-stage melanoma from skin lesion images using Python, YOLOv8, and custom-labeled training datasets. Achieved a detection accuracy of 92% on test images, demonstrating strong potential for assisting dermatologists with early cancer screening.',
      tech: ['Python', 'React', 'JavaScript', 'YOLOv8', 'Deep Learning'],
      image: '/images/DermaAI.png',
      color: 'linear-gradient(135deg, #00ffcc 0%, #00ff88 100%)',
      link: 'https://github.com/vsun78/DermaAI.git'
    },
    {
      title: 'VoluCast',
      description: 'Predictive AI Dashboard for asphalt shipment volumes. Full-stack web application using React, JavaScript, CSS, and Recharts to deliver an interactive analytics dashboard. Deployed on Netlify and Azure (backend/ML pipeline). Projected to serve hundreds of McAsphalt employees, reducing manual data entry and improving decision-making transparency.',
      tech: ['React', 'JavaScript', 'CSS', 'Azure', 'Recharts', 'Netlify'],
      image: '/images/mcaiLogo1.png',
      color: 'linear-gradient(135deg, #00d9ff 0%, #0088ff 100%)',
      link: 'https://github.com/vsun78/VoluCast.git'
    },
    {
      title: 'Hollowspire',
      description: '2D action-packed RPG game developed in Unity with immersive gameplay mechanics and stunning visuals.',
      tech: ['Unity', 'C#', 'Game Design'],
      image: '/images/Hollowspire.png',
      color: 'linear-gradient(135deg, #00ff88 0%, #00ffaa 100%)',
      link: null
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Featured</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">A selection of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const ProjectWrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {};
            
            return (
              <ProjectWrapper
                key={index}
                className={`project-card ${isVisible ? 'animate-in' : ''}`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                {...wrapperProps}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-overlay" style={{ background: project.color }}></div>
              </ProjectWrapper>
            );
          })}
        </div>

        <div className={`projects-footer ${isVisible ? 'animate-in' : ''}`}>
          <p>Have a project in mind? Let's build something amazing together!</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

