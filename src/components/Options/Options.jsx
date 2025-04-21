import clsx from "clsx";

import css from "./Options.module.css";

const Options = ({ names, updateFeedback, totalFeedback, resetFeedback }) => {
  const arrKeyNames = Object.keys(names);
  return (
    <ul className={clsx(css.list)}>
      {arrKeyNames.map((name, index) => {
        return (
          <li key={index}>
            <button
              className={clsx(css.btn)}
              onClick={() => updateFeedback(name)}
            >
              {name}
            </button>
          </li>
        );
      })}
      {totalFeedback > 0 && (
        <li key={arrKeyNames.length}>
          <button onClick={resetFeedback}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
