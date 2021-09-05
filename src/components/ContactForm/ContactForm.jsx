/** @format */

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from "../ContactForm/ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);

    setName("");
    setNumber("");
  };

  const handleIputChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const handleIputChangeNumber = (e) => {
    setNumber(e.currentTarget.value);
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor={nameInputId}>Имя</label>
      <input
        id={nameInputId}
        className={s.formInputName}
        type="text"
        name="name"
        value={name}
        onChange={handleIputChangeName}
        placeholder="Имя Фамилия"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        minLength="2"
        maxLength="40"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />

      <label htmlFor={numberInputId}>Телефон</label>
      <input
        id={numberInputId}
        className={s.formInputNumber}
        type="tel"
        name="number"
        value={number}
        onChange={handleIputChangeNumber}
        placeholder="Номер телефона"
        pattern="\+?[0-9\s\-\(\)]+"
        minLength="10"
        maxLength="13"
        title="+380223332222 или (044)7881000"
      />

      <button type="submit" className={s.formSubmitButton}>
        Добавить контакт
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
