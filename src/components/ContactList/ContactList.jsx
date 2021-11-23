import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts";

import ContactItem from "./ContactItem";

function ContactList({ contacts, onDeleteContact }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
