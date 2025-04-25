import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";

import css from "./Contact.module.css";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.contact}>
        <p>
          <HiUser className={css.icon} />
          {name}
        </p>
        <p>
          <HiPhone className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.btnWrapper}>
        <button className={css.btn} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
