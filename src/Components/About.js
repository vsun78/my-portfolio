import TagSphere from './TagSphere';

function About() {
  const sphereTags = [
    'Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'NodeJS', 'Angular',
    'React', 'HTML', 'CSS', 'C#', 'SQL', 'PostgreSQL',
     'TensorFlow', 'PyTorch', 'Unity', 'Spring Boot',
    'Git', 'Figma', 'MATLAB', 'JavaFX', 'NumPy', 'Pandas', 'YOLOv8', 'Rest API',
    'Postman', 'Netlify', 'Railway'
  ];

  const description = `I'm a Software Engineering student at Western University with a passion for building innovative solutions that make a real impact. I enjoy tackling complex problems at the intersection of AI and software engineering and have experience developing with Java, JavaScript, Python, C#, SQL and TypeScript using frameworks such as React and Spring Boot. I have led teams to develop AI models and games, demonstrating both technical expertise and leadership.`;

  return (
    <div id="about" style={{ position: 'relative' }}>
      <div className="container">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div className="about-left-col" style={{ flex: '1 1 35%', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="/images/VictorPFP.JPG"
              alt="Victor"
              style={{ width: '100%', maxWidth: '280px', borderRadius: '1rem', marginBottom: '1rem' }}
            />
            <h1 className="sub-title" style={{ textAlign: 'center' }}>About Me</h1>
            <p style={{ textAlign: 'center', lineHeight: '1.5' }}>
              currently working as a full stack developer &amp; IT intern @ McAsphalt.
            </p>
            <p style={{ textAlign: 'center', lineHeight: '1.5', marginTop: '0.75rem' }}>{description}</p>
          </div>
          <div className="about-right-col" style={{ flex: '1 1 55%', minWidth: '300px' }}>
            {/* Education card */}
            <div
              className="education-card"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '1rem',
                marginBottom: '1rem',
              }}
            >
              <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Education</h3>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Western University</p>
              <p style={{ margin: 0 }}>Bachelor's in Software Engineering</p>
              <p style={{ margin: 0 }}>3.7/4.0 GPA • Sep 2023 – Apr 2027</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.3' }}>
                Coursework: Data Structures &amp; Algorithms, Object Oriented Programming, Scripting Programming Language, Software Construction, Software Design, Discrete Structures, Multivariable Calculus
              </p>
            </div>
            {/* Languages card */}
            <div
              className="languages-card"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '1rem',
                marginBottom: '1rem',
              }}
            >
              <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Languages</h3>
              <div
                className="languages-list"
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
              >
                {['JavaScript', 'Python', 'Java', 'C#', 'TypeScript', 'SQL', 'CSS/HTML', 'Assembly'].map(
                  (lang) => (
                    <span
                      key={lang}
                      style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        fontSize: '0.8rem',
                      }}
                    >
                      {lang}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div
              style={{
                marginTop: '4rem',
                minHeight: '350px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TagSphere tags={sphereTags} radius={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;