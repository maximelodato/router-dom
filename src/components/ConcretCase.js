import React from 'react';

const ConcretCase = ({ lang = 'fr' }) => {
  const concretCases = {
    en: ['My grandparent bridge club website', 'My friend bakery'],
    fr: ['Le site web du club de bridge de mes grands-parents', 'La boulangerie de mon ami']
  };

  return (
    <div>
      <h2>{lang === 'fr' ? 'Cas concrets' : 'Concret Case'}</h2>
      <div className="cards">
        {concretCases[lang].map((concretCase, index) => (
          <div key={index} className="card">
            <h3>{concretCase}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcretCase;
