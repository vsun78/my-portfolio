import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import FullProjects from './Components/FullProjects';

import './Style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={(
            <>
              <Header />
              <About />
              <Projects />
              <Contact />
            </>
          )}
        />
        {/* Dedicated full projects page */}
        <Route path="/projects-page" element={<FullProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
