import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../redux/auth/selectorauth";
import {
  selectContacts,
  selectIsLoading,
} from "../redux/contacts/selectorContacts";
import { Container, Paper } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";

const Contacts = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <div>
      <div
      style={{
        minHeight: "80vh",
        maxWidth: "60vw",
        margin:"0 auto" ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#202020",
      }}
    >
          <h1>Phonebook</h1>
          
          <div style={{ width:"50%", backgroundColor: "#2D2D2D", padding:"50px"  }}>
            <ContactForm />
          </div>
          <div style={{ width:"50%", backgroundColor: "#2D2D2D", padding:"50px"  }}>
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              Contacts
            </h2>
            <Filter />

            <ContactList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
