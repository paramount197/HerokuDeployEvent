import React from "react";
import "../styles/checkbox.css";

const Checkbox = (props) => {
  return (
    <div className={props.className}>
      {props.checkboxOptions.map((checkboxValueName) => (
        <label for={checkboxValueName} className={props.className}>
          <input
            type="checkbox"
            id={props.name}
            name={checkboxValueName}
            value={checkboxValueName}
            onChange={props.onChange}
          />
          {checkboxValueName}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
