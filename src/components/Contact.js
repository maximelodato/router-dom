import React, { useState } from 'react';

const Contact = ({ lang = 'fr' }) => {
  // Textes de traduction pour anglais et français
  const translations = {
    en: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
    },
    fr: {
      title: 'Contactez-nous',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      submit: 'Envoyer',
    }
  };

  // Utiliser la langue actuelle pour les traductions
  const t = translations[lang];

  // Gérer les états pour les champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Fonction pour mettre à jour l'état des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission
    console.log('Form submitted:', formData);
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h1>{t.title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{t.name}:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">{t.email}:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
