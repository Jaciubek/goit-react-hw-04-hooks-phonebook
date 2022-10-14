import styles from './ContactForm.module.css';
import Button from 'components/Button/Button';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const { contactForm, contactForm__field, contactLabel, contactInput } = styles;

  const [contact, setContact] = useState({ ...INITIAL_STATE });

  const { name, number } = contact;

  const handleChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
    setContact({ ...INITIAL_STATE });
  };

  return (
    <form className={contactForm} onSubmit={handleSubmit}>
      <div className={contactForm__field}>
        <label htmlFor="contactName" className={contactLabel}>
          Name
        </label>
        <input
          className={contactInput}
          id="contactName"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </div>
      <div className={contactForm__field}>
        <label htmlFor="contactTel" className={contactLabel}>
          Number
        </label>
        <input
          className={contactInput}
          id="contactTel"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" title="Add contact"></Button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm