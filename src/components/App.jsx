import styles from './App.module.css';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactList from 'components/ContactList/ContactList';
import Notification  from 'components/Notification/Notification';
import Filter from 'components/Filter/Filter';
import { load, save } from 'services/localStorage';
import contactsItems from 'data/contactsItems';

const localStorageKey = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

   getContactFromLocalStorage = () => {
    const localPhonebookContacts = load(localStorageKey);
    return localPhonebookContacts
      ? localPhonebookContacts
      : this.setContactsInLocalStorage(contactsItems);
  };

  setContactsInLocalStorage = contactsArray => {
    save(localStorageKey, contactsArray);
  };

  onSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      const filteredNumber = contacts.filter(
        contact => contact.number === number
      )[0].name;
      console.log(filteredNumber);
      alert(`${number} is already in contact with ${filteredNumber} `);
      return;
    }
    const newContactArray = [newContact, ...contacts];

    this.setContactsInLocalStorage(newContactArray);
    this.setState(() => ({
      contacts: newContactArray,
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  removeContact = id => {
    const newContactList = this.state.contacts.filter(
      contact => contact.id !== id
    );
    save(localStorageKey, newContactList);
    this.setState({ ...this.state, contacts: newContactList });
  };

  setFilterContacts = (filterValue, contactsArray) => {
    if (!filterValue) {
      return contactsArray;
    } else {
      return contactsArray.filter(contact => {
        return contact.name
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase());
      });
    }
  };

  componentDidMount() {
    const myPhonebookContacts = this.getContactFromLocalStorage();
    this.setState(oldState => ({ ...oldState, contacts: myPhonebookContacts }));
  }

  render() {
    const { appWrapper } = styles;
    const { filter } = this.state;
    const phonebookContacts = this.getContactFromLocalStorage();
    return (
      <div className={appWrapper}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          {phonebookContacts.length > 0 ? (
            <>
              <Filter onChange={this.handleFilter} />
              <ContactList
                contacts={this.setFilterContacts(filter, phonebookContacts)}
                removeContact={this.removeContact}
              />
            </>
          ) : (
            <Notification message="There is no contacts !" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;