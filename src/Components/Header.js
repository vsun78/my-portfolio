import { useEffect } from 'react';
import TextType from './TextType';

function Header() {


  useEffect(() => {
    const canvas = document.getElementById('effect');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    function initStars() {
      for (let i = 0; i < 1500; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
        star.x += star.speed;
        if (star.x > canvas.width) star.x = 0;
      }
      requestAnimationFrame(drawStars);
    }

    initStars();
    drawStars();
    
    return () => cancelAnimationFrame(drawStars);
  }, []);

  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src="/images/logo1.png" className="logo" alt="logo" />
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fas fa-times"></i>
          </ul>
          <i className="fas fa-bars"></i>
        </nav>

         <div className="header-text">
          <p>Software Engineer</p>
          <h1>
            <TextType
              text={["Hi, I'm Victor Sun", "from Western University","Welcome to my website!"]}
              typingSpeed={75}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>
        </div>

        <div className="wrapper">
          <canvas id="effect"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Header;
