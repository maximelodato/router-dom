// src/components/CaseStudy.js
import React from 'react';

const CaseStudy = () => {
  const caseStudies = [
    'Nike, the new website',
    'Paypal, how their data are stored'
  ];

  return (
    <div>
      <h2>Case Study</h2>
      <div className="cards">
        {caseStudies.map((study, index) => (
          <div key={index} className="card">
            <h3>{study}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
