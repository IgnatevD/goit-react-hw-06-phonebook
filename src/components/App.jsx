/** @format */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import s from "../components/App.module.css";

import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const saveState = JSON.parse(window.localStorage.getItem("contacts"));
    if (saveState) setContacts(saveState);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    const newContact = { id: uuidv4(), name, number };

    const arryFindName = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (arryFindName)
      return alert(`Ошибка, контакт с данным именем ${name} существует`);
    setContacts((state) => [...state, newContact]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (id) => {
    setContacts(contacts?.filter((contact) => contact.id !== id));
  };

  const newContactsFilter = () => {
    const normalFilter = filter?.toLowerCase();
    return contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  return (
    <>
      <section className={s.section}>
        <div className={s.divConteiner}>
          <h1>Телефонная книга</h1>
          <ContactForm onSubmit={formSubmit} />
        </div>
      </section>
      <section className={s.section}>
        <div className={s.divContactList}>
          <h2>Контакты</h2>
          <Filter handleFilterChange={handleFilterChange} value={filter} />
          <ContactList
            contacts={newContactsFilter()}
            deleteContact={deleteContact}
          />
        </div>
      </section>
    </>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.string,
};
