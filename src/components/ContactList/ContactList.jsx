import styles from './ContactList.module.css';
import Notification  from 'components/Notification/Notification';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ContactList extends Component {
  render() {
    const { contacts, removeContact } = this.props;
    const { contactList__wrapper, contactList__text, contactList__button } = styles;

    return (
      <>
        {contacts.length > 0 ? (
          <ul className={contactList__wrapper}>
            {contacts.map(contact => {
              
              return (
                <li className={contactList__text} key={contact.id}>
                  <span>{`${contact.name}: ${contact.number}`}</span>
                  <button
                    type="button"
                    className={contactList__button}
                    onClick={() => removeContact(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <Notification message="You don't have this contact" />
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func,
};

export default ContactList;