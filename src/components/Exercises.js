import React from 'react';

const Exercises = ({ lang = 'fr' }) => {
  const exercises = {
    en: ['Video Game informations', 'The notepad', 'React Router'],
    fr: ['Informations sur les jeux vidéo', 'Le bloc-notes', 'React Router']
  };

  return (
    <div>
      <h2>{lang === 'fr' ? 'Exercices' : 'Exercises'}</h2>
      <div className="cards">
        {exercises[lang].map((exercise, index) => (
          <div key={index} className="card">
            <h3>{exercise}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
