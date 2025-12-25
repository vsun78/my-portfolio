import { useEffect, useRef, useState } from 'react';
import './ExperienceSection.css';

function ExperienceSection() {
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

  const experiences = [
    {
      title: 'Full Stack Developer | IT Intern',
      company: 'McAsphalt',
      location: 'Toronto, ON',
      period: 'May 2025 – August 2025',
      description: 'Lead developer for AI-driven analytics and inventory management systems.',
      achievements: [
        'Worked as the lead developer to develop a predictive AI dashboard for asphalt shipment volumes by implementing a React-based analytics dashboard to integrate machine learning models',
        'Developed an inventory tracking application in <2 months to help users at McAsphalt keep track of serial numbers, orders, and item availability using Java, JavaScript, React, and MySQL',
        'Used the ServiceNow ticketing system to solve issues for users across 25+ locations in North America'
      ]
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Muzi Dessert',
      location: 'Markham, ON',
      period: 'Feb 2025 – May 2025',
      description: 'Designed and developed a responsive business website for enhanced customer engagement.',
      achievements: [
        'Designed, developed, and shipped a responsive business website',
        'Helped 400+ users contact the business and learn about its product and services through interactive designs'
      ]
    },
    {
      title: 'DAQ Software Engineer',
      company: 'Western Formula Racing (WFR) Club',
      location: 'London, ON',
      period: 'Sept 2024 – Oct 2025',
      description: 'Developing live data analysis and visualization systems for the formula racing car.',
      achievements: [
        'Worked on live data analysis on the formula car and displayed it on a website using TypeScript and React',
        'Utilized MongoDB for database management and real-time data storage'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Work</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${isVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    {exp.location && <p className="experience-location">{exp.location}</p>}
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={`experience-cta ${isVisible ? 'animate-in' : ''}`}>
          <p>Want to learn more about my professional journey?</p>
          <a href="images/VictorResume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
            <span>View My Resume</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

