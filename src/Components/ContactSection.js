import { useEffect, useRef, useState } from 'react';
import './ContactSection.css';

function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxufYluBjf9TzgS8r2UOGit6RkzEJfbNJgZJ_ira4TG4h1hVGXWqtZWzZQHQgJ34UeH/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
      });

      setMsg('Message sent successfully! I\'ll get back to you soon.');
      setTimeout(() => setMsg(''), 5000);
      form.reset();
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setMsg('Oops! Something went wrong. Please try again.');
      setTimeout(() => setMsg(''), 5000);
      console.error('Error!', error.message);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ontariovictor@gmail.com',
      link: 'mailto:ontariovictor@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '647-687-8668',
      link: 'tel:647-687-8668'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Markham, Ontario',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/victorsun2' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/vsun78' }
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Get In</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'animate-in' : ''}`}>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.label}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h3>Connect With Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="images/VictorResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download-btn"
            >
              <span>Download Resume</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3v10M6 9l4 4 4-4M3 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <form
            className={`contact-form ${isVisible ? 'animate-in' : ''}`}
            name="submit-to-google-sheet"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="Name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="Message"
                rows="6"
                placeholder="Your message here..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18 2L9 11M18 2l-6 16-3-7-7-3 16-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {msg && <div className={`form-message ${msg.includes('successfully') ? 'success' : 'error'}`}>{msg}</div>}
          </form>
        </div>

        <footer className={`site-footer ${isVisible ? 'animate-in' : ''}`}>
          <p>&copy; 2024 Victor Sun. Built with React. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

export default ContactSection;

