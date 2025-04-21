import clsx from "clsx";

import css from "./Feedback.module.css";

const Feedback = ({ names, totalFeedback, positivePercent }) => {
  const arrKeyNames = Object.keys(names);
  return (
    <ul>
      {arrKeyNames.map((name, index) => {
        return (
          <li className={clsx(css.item)} key={index}>
            {name}: {names[name]}
          </li>
        );
      })}
      <li key={arrKeyNames.length}>Total: {totalFeedback}</li>
      <li key={arrKeyNames.length + 1}>Positive: {positivePercent()}</li>
    </ul>
  );
};

export default Feedback;
