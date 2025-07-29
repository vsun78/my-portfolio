import { useState } from 'react';

function Contact() {
  const [msg, setMsg] = useState('');

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

      setMsg('Message sent successfully');
      setTimeout(() => setMsg(''), 5000);
      form.reset();
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fas fa-paper-plane"></i> ontariovictor@gmail.com</p>
            <p><i className="fas fa-phone-square-alt"></i> 647-687-8668</p>
            <div className="social-icons">
              <a href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
              <a href="https://x.com/"><i className="fab fa-twitter-square"></i></a>
              <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com/"><i className="fab fa-linkedin"></i></a>
            </div>
            <a href="images/VictorResume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn2">View Resume</a>
          </div>

          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
