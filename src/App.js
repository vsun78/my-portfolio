import './App.css';
import Hero from './Components/Hero';
import AboutSection from './Components/AboutSection';
import ExperienceSection from './Components/ExperienceSection';
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';
import './Style.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
