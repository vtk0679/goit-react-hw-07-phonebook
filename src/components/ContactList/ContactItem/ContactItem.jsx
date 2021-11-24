import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts";
import s from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      <li className={s.item}>
        <p className={s.message}>
          {contact.name}: {contact.number}
        </p>
        <button
          className={s.btnDelete}
          onClick={(e) => dispatch(deleteContact(e.target.id))}
          id={contact.id}
        >
          Delete
        </button>
      </li>
    </>
  );
}
