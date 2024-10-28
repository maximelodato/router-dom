import React from 'react';

const CaseStudy = ({ lang = 'fr' }) => {
  const caseStudies = {
    en: ['Nike, the new website', 'Paypal, how their data are stored'],
    fr: ['Nike, le nouveau site web', 'Paypal, comment leurs données sont stockées']
  };

  return (
    <div>
      <h2>{lang === 'fr' ? 'Étude de cas' : 'Case Study'}</h2>
      <div className="cards">
        {caseStudies[lang].map((study, index) => (
          <div key={index} className="card">
            <h3>{study}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
