import clsx from "clsx";

import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={clsx(css.container)}>
      <h1 className={clsx(css.title)}>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
