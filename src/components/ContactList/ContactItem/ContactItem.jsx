import s from "./ContactItem.module.css";

export default function ContactItem({ contact, onDeleteContact }) {
  return (
    <>
      <li className={s.item}>
        <p className={s.message}>
          {contact.name}: {contact.number}
        </p>
        <button
          className={s.btnDelete}
          onClick={(e) => onDeleteContact(e.target.id)}
          id={contact.id}
        >
          Delete
        </button>
      </li>
    </>
  );
}
