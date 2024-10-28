import React from 'react';

const Home = ({ lang = 'fr' }) => {
  const translations = {
    en: {
      title: 'Home Page',
      welcomeMessage: 'Welcome to my portfolio website!',
      description: 'Here you will find all the projects I have worked on.',
    },
    fr: {
      title: 'Page d\'accueil',
      welcomeMessage: 'Bienvenue sur mon site portfolio !',
      description: 'Vous trouverez ici tous les projets sur lesquels j\'ai travaillé.',
    }
  };

  const t = translations[lang];

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.welcomeMessage}</p>
      <p>{t.description}</p>
    </div>
  );
};

export default Home;
