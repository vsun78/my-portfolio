import { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

function AboutSection() {
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

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">About</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-in' : ''}`}>
            <p className="about-intro">
              I'm a Software Engineering student at Western University with a passion for building 
              innovative solutions that make a real impact. I enjoy tackling complex problems at the 
              intersection of AI and software engineering.
            </p>
            
            <p className="about-description">
              I have experience developing with <strong>Java, JavaScript, Python, SQL, HTML, and CSS</strong> using 
              frameworks like <strong>Spring Boot, React, Node.js, AWS, and PostgreSQL</strong>. I have led teams to develop 
              AI models and full-stack applications, demonstrating both technical expertise and leadership.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3>3.7/4.0</h3>
                <p>GPA</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>

          <div className={`education-card ${isVisible ? 'animate-in' : ''}`}>
            <div className="card-icon">🎓</div>
            <h3>Education</h3>
            <h4>Western University</h4>
            <p className="degree">Bachelor's in Software Engineering</p>
            <p className="date">September 2023 – April 2027</p>
            <p className="gpa">Dean's Honour List</p>
            <div className="coursework">
              <h5>Relevant Coursework:</h5>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Object Oriented Programming</li>
                <li>Software Construction & Design</li>
                <li>Discrete Structures</li>
                <li>Multivariable Calculus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

