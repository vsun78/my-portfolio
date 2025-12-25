import FaultyTerminal from './FaultyTerminal';
import { Link } from 'react-router-dom';
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
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
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work center-image">
            <img src="images/Inventory.png" alt="Project 1" />
            <div className="layer">
              <h3>Inventra</h3>
              <p>Inventory Tracking Application for McAsphalt</p>
              <a href="#projects" className="circle-link">
              <i className="fas fa-external-link-alt"></i>
              <img src="images/externallink.png" alt="External Link" className="link-image" />
            </a>
            </div>
          </div>
          <div className="work">
            <img src="images/DermaAI.png" alt="Project 2" />
            <div className="layer">
              <h3>DermaAI</h3>
              <p>AI model using YOLOv8 & Roboflow to detect melanoma</p>
              <a href="#projects">
  <i className="fas fa-external-link-alt"></i>
</a>
            </div>
          </div>
          <div className="work">
            <img src="images/RPG.png" alt="Project 3" />
            <div className="layer">
              <h3>Hollowspire</h3>
              <p>2D action-packed game made in Unity and C#</p>
              <a href="#projects">
  <i className="fas fa-external-link-alt"></i>
</a>
            </div>
          </div>
        </div>

        <Link className="btn" to="/projects-page">See More</Link>
      </div>
    </div>
  );
}

export default Projects;
