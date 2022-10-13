// import { nanoid } from 'nanoid';
// import React from 'react';



// class Phonebook extends React.Component {
//     state = {
//         contacts: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//             {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         filter: '',
//         name: '',
//         number: '',
//     };
//     handleFormSubmit = e => {
//         e.preventDefault();
//         const form = e.currentTarget;
//         const name = form.elements.name.value;
//         const number = form.elements.number.value;
//         this.setState({
//             ...this.state,
//             contacts: [...this.state.contacts, {
//                 id: nanoid(), name,
//             number }],
//             name: '',
//         });
//     };
//     renderContacts = (filterValue, contactsArray) => {
//         if (!filterValue)
//             return contactsArray.map(contact => {
//                 return (
//                     <li key={contact.id}>
//                         {contact.name}: {contact.number}
//                     </li>
//                 );
//             });
//         return contactsArray
//             .filter((el, id) =>
//                 el.name.toLowerCase().includes(filterValue.toLowerCase())  
//             )
//             .map(contact => {
//                 return (
//                     <li key={contact.id}>
//                         {contact.name}: {contact.number}
//                     </li>
//                 );
//             })
//     };
//     render() {
//         const { filter, contacts } = this.state;
//         return (
//             <div>
//                 <div>
//                   <form onSubmit={this.handleFormSubmit}>  
//                     <p>Name</p>
//                         <input
//                           type="text"
//                           name="name"
//                           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                           required
//                         />
//                         <br />
//                     <p>Number</p>
//                         <input
//                           type="tel"
//                           name="number"
//                           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                           required
//                         />
//                     <button onClick={() => { }}>Add contact</button>
//                   </form>  
//                 </div>
//                 <div>
//                     <p>Contacts</p>
//                     <input
//                         onChange={e => {
//                             this.setState({ ...this.state, filter: e.target.value });
                            
//                         }}
//                     />
//                     <ul>
//                         {this.renderContacts(filter, contacts)}
//                     </ul>
//                 </div>
//             </div>
//         )
            
//     }
// }

// export default Phonebook;