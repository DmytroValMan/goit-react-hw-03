import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

const contactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsListJson = localStorage.getItem("contactsList");
    if (contactsListJson !== null) {
      return JSON.parse(contactsListJson);
    }
    return [];
  });
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contacts));
  }, [contacts]);

  const handleContacts = (newContact) => {
    newContact.id = nanoid();
    setContacts((actualContacts) => [...actualContacts, newContact]);
  };

  const seachedContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const deleteContact = (contactId) => {
    setContacts(() => contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleContacts} />
      <SearchBox value={searchField} onSearch={setSearchField} />
      <ContactList contacts={seachedContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
