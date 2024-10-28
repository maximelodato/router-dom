import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Works = ({ lang = 'fr' }) => {
  // Définir les traductions
  const translations = {
    en: {
      title: 'Welcome to the works page. Please, select a category',
      exercises: 'Exercises',
      caseStudy: 'Case Study',
      concretCase: 'Concret Case',
    },
    fr: {
      title: 'Bienvenue sur la page des travaux. Veuillez sélectionner une catégorie',
      exercises: 'Exercices',
      caseStudy: 'Étude de cas',
      concretCase: 'Cas concrets',
    }
  };

  const t = translations[lang];

  return (
    <div>
      <h1>{t.title}</h1>
      <nav>
        <ul>
          <li><Link to="exercises">{t.exercises}</Link></li>
          <li><Link to="case-study">{t.caseStudy}</Link></li>
          <li><Link to="concret-case">{t.concretCase}</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Works;
