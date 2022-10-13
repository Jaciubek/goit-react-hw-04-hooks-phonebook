import styles from './ContactForm.module.css';
import { Button } from 'components/Button/Button';
import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};


class ContactForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
      const { name, number } = this.state;
      const { contactForm, contactForm__field, contactLabel, contactInput } = styles;
      return (
        <form className={contactForm} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            required
          />
        </div>

        <Button type="submit" title="Add contact"></Button>
      </form>
    );
  }
}


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;