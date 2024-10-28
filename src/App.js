import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import Exercises from './components/Exercises';
import CaseStudy from './components/CaseStudy';
import ConcretCase from './components/ConcretCase';
import './components/style/App.css'; 

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('fr');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  const translations = {
    en: {
      home: "Home",
      about: "About",
      contact: "Contact",
      works: "Works",
      toggleLang: "Switch to French",
      toggleTheme: "Night Mode",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      contact: "Contact",
      works: "Travaux",
      toggleLang: "Passer en anglais",
      toggleTheme: "Mode Nuit",
    }
  };

  const t = translations[lang];

  return (
    <div className={`app ${theme}`}>
      <Router>
        <header>
          <h1>Portfolio de John Doe</h1>
          <nav>
            <ul>
              <li><Link to="/">{t.home}</Link></li>
              <li><Link to="/about">{t.about}</Link></li>
              <li><Link to="/contact">{t.contact}</Link></li>
              <li><Link to="/works">{t.works}</Link></li>
            </ul>
          </nav>
          {/* Utilisation correcte de l'image dans le dossier public */}
          <a href="https://github.com/maximelodato?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="/git.svg" alt="GitHub logo" style={{ width: '30px' }} />
          </a>
          <button onClick={toggleTheme}>{theme === 'light' ? t.toggleTheme : "Mode Jour"}</button>
          <button onClick={toggleLang}>{t.toggleLang}</button>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
            <Route path="/works" element={<Works lang={lang} />}>
              <Route path="exercises" element={<Exercises lang={lang} />} />
              <Route path="case-study" element={<CaseStudy lang={lang} />} />
              <Route path="concret-case" element={<ConcretCase lang={lang} />} />
            </Route>
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 John Doe</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
