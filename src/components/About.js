import React from 'react';

const About = ({ lang = 'fr' }) => {
  // Définir les traductions pour anglais et français
  const translations = {
    en: {
      title: "About Me",
      description: "This is the About page where you can learn more about me.",
    },
    fr: {
      title: "À propos de moi",
      description: "Ceci est la page À propos où vous pouvez en apprendre plus sur moi.",
    }
  };

  // Utiliser les traductions en fonction de la langue actuelle
  const t = translations[lang];

  // Si la langue n'est pas valide, afficher un message d'erreur ou une langue par défaut
  if (!t) {
    return <div>Erreur: langue non supportée</div>;
  }

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
    </div>
  );
};

export default About;
