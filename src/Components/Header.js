// Header.js
import { useEffect } from 'react';
import FaultyTerminal from './FaultyTerminal';

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
    <div id="header" style={{ position: 'relative' }}>
      {/* Global terminal effect fixed to the viewport.  This single instance serves as the background for all sections. */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={0.3}
          glitchAmount={0.6}
          flickerAmount={0.4}
          noiseAmp={0.4}
          chromaticAberration={0}
          dither={0.2}
          curvature={0.1}
          tint="#81ae7a"
          mouseReact={true}
          mouseStrength={0.3}
          pageLoadAnimation={false}
          brightness={0.8}
        />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
          <h1>Hi, I'm <span>Victor Sun</span><br /> from Western University</h1>
        </div>

        {/* Star field animation remains on top of the terminal effect */}
        <div className="wrapper">
          <canvas id="effect"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Header;
