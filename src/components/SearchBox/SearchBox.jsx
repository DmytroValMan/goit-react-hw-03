import { useId } from "react";

import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  const searchFieldId = useId();

  const handleSearsh = (evt) => {
    onSearch(evt.target.value);
  };

  return (
    <>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        value={value}
        onChange={handleSearsh}
      ></input>
    </>
  );
};

export default SearchBox;
