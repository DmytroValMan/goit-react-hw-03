import clsx from "clsx";

import css from "./Notification.module.css";

const Notification = () => {
  return <p className={clsx(css.text)}>No feedback yet</p>;
};

export default Notification;
