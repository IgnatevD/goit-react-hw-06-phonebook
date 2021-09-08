/** @format */

import s from "./ContactList.module.css";
import { connect } from "react-redux";
import allActions from "../../redux/contacts/contacts-actions";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts?.map(({ id, name, number }) => (
        <li key={id} className={s.contact}>
          <p className={s.listName}>{name}</p>
          <p className={s.listNumber}>{number}</p>
          <button
            className={s.contactDelete}
            type="button"
            onClick={() => deleteContact(id)}
          >
            удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateProp = ({ contacts, filters }) => {
  const normalFilter = filters.toLowerCase();
  const visibleContacns = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalFilter)
  );
  return {
    contacts: visibleContacns,
  };
};

const mapDisp = (disp) => ({
  deleteContact: (id) => disp(allActions.deleteContact(id)),
});

export default connect(mapStateProp, mapDisp)(ContactList);
