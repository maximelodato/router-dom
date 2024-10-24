// src/components/Exercises.js
import React from 'react';

const Exercises = () => {
  const exercises = [
    'Video Game informations',
    'The notepad',
    'React Router'
  ];

  return (
    <div>
      <h2>Exercises</h2>
      <div className="cards">
        {exercises.map((exercise, index) => (
          <div key={index} className="card">
            <h3>{exercise}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
