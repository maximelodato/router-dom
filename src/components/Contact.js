import React, { useState } from 'react';
import '/home/maxim/THP/dev++_semaine_5/router-dom/src/components/style/Contact.css';

const Contact = ({ lang }) => {
  const translations = {
    en: {
      contactText: 'Would you like to discuss with me, whether to offer me a job or just to pass the time during this confinement? Fill out the form below, and I will contact you as soon as possible.',
      subject: 'Subject',
      message: 'Message',
      submit: 'Submit',
    },
    fr: {
      contactText: 'Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.',
      subject: 'Sujet',
      message: 'Message',
      submit: 'Envoyer',
    }
  };

  const t = translations[lang];
  const [formData, setFormData] = useState({ subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission à ajouter si nécessaire
    console.log('Form Data:', formData);
    setFormData({ subject: '', message: '' });
  };

  return (
    <div>
      <p>{t.contactText}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">{t.subject}:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">{t.message}:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{t.submit}</button>
      </form>
    </div>
  );
};

export default Contact;
