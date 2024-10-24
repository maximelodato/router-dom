// src/components/ConcretCase.js
import React from 'react';

const ConcretCase = () => {
  const concretCases = [
    'My grandparent bridge club website',
    'My friend bakery'
  ];

  return (
    <div>
      <h2>Concret Case</h2>
      <div className="cards">
        {concretCases.map((concretCase, index) => (
          <div key={index} className="card">
            <h3>{concretCase}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcretCase;
