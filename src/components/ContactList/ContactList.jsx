import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete}></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
