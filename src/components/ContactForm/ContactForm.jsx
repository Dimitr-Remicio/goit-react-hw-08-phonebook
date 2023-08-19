import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import style from "./ContactForm.module.css";

import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectorContacts";
import { addContact } from "../../redux/contacts/contactOperations";
import { Alert } from "@mui/material";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let contactForAdd = { name: form.name.value, number: form.number.value };
    console.log("Form ", contactForAdd);
    if (contacts.some(({ name }) => name === contactForAdd.name)) {
      // Usar una alerta de MUI en lugar de un alert del navegador
      Alert.error(`${contactForAdd.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contactForAdd));
    form.reset();
  };

  return (
    <div className={style.inputContent}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputsCont}>
          <p style={{ color: "white" }}>Nombre </p>
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p style={{ color: "white" }}>Numero</p>

          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <br></br>
        <button type="submit" className={style.buttonEditor}>
          {isLoading ? "Loading..." : "Add contact"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
