import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '/home/maxim/THP/dev++_semaine_5/router-dom/src/components/style/Works.css';

const Works = ({ lang }) => {
  const translations = {
    en: {
      intro: "Below is a list of my projects. Some were created during my training with The Hacking Project, and others are personal projects.",
      project1: "Project 1: A website image + a brief description of your choice.",
      project2: "Project 2: Another website image + a brief description of your choice.",
      project3: "Project 3: A brief description of your choice.",
    },
    fr: {
      intro: "Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.",
      project1: "Projet 1 : Une image de site web + un mini texte au choix.",
      project2: "Projet 2 : Une image d'un autre site web + un mini texte au choix.",
      project3: "Projet 3 : Un mini texte au choix.",
    }
  };

  const t = translations[lang];

  return (
    <div>
      <h2>{t.intro}</h2>
      <ul>
        <li>{t.project1}</li>
        <li>{t.project2}</li>
        <li>{t.project3}</li>
      </ul>
      <nav>
        <ul>
          <li><Link to="exercises">Exercises</Link></li>
          <li><Link to="case-study">Case Study</Link></li>
          <li><Link to="concret-case">Concret Case</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Works;
