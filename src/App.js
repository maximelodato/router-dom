import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import Exercises from './components/Exercises';
import CaseStudy from './components/CaseStudy';
import ConcretCase from './components/ConcretCase';
import '/home/maxim/THP/dev++_semaine_5/router-dom/src/App.js'; // Chemin de ton fichier CSS

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/works">Works</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />}>
          <Route path="exercises" element={<Exercises />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="concret-case" element={<ConcretCase />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
