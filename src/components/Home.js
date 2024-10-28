import React from 'react';
import '/home/maxim/THP/dev++_semaine_5/router-dom/src/components/style/Home.css';

const Home = ({ lang }) => {
  const translations = {
    en: {
      title: 'Hello, I\'m John Doe. Welcome to my portfolio!',
      intro: 'For the past few months, I have been learning web development with The Hacking Project. I have learned Ruby, Rails, JavaScript, and React.',
    },
    fr: {
      title: 'Bonjour, je m\'appelle John Doe. Bienvenue sur mon portfolio !',
      intro: 'Depuis quelques mois, j\'apprends le développement web grâce à The Hacking Project. J\'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.',
    }
  };

  const t = translations[lang];

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.intro}</p>
    </div>
  );
};

export default Home;
