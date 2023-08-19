import React, { useEffect, useState } from "react";
import style from "./ContactList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { EditModal } from "../Modal/Modal";
import {
  selectContacts,
  selectVisibleContacts,
} from "../../redux/contacts/selectorContacts";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contactOperations";
import { SelectFilter } from "../../redux/filter/selectorFilter";
import css from "./ContactList.module.css";

const ContactList = ({ id, name, number }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(SelectFilter);
  const dispatch = useDispatch();
  const [showModalId, setShowModalId] = useState(null);

  const deleteId = (contacts) => {
    dispatch(deleteContact(contacts));
  };

  const toggleModal = (contactId) => {
    setShowModalId(contactId === showModalId ? null : contactId);
  };

  const filterArr = (fArr) => {
    let newArr = fArr.filter((cur) => cur.name.toUpperCase().includes(filter));
    return newArr;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {filterArr(contacts)?.map(({ name, number, id }) => {
        return (
          <li key={id} className={style.item}>
            <div className={style.contDetail}>
              <p className={style.name}>{name}</p>
              <p className={style.number}>{number}</p>
            </div>
            <div style={{display:"flex", gap:"20px"}}>
              <button
                className={style.btn}
                type="submit"
                onClick={() => deleteId(id)}
              >
                Borrar
              </button>
              <button
                className={css["delete-contact"]}
                data-id={id}
                onClick={() => toggleModal(id)} // Pass the contact id to toggleModal
              >
                <EditIcon />
              </button>

              {showModalId === id && ( // Only show the modal if showModalId matches the contact id
                <EditModal
                  onClose={() => toggleModal(id)} // Pass the contact id to onClose
                  id={id}
                  name={name}
                  number={number}
                  isOpen={true}
                />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
