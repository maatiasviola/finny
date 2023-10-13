import React from "react";
import styles from "./StyledInput.module.css";

function StyledInput({ placeholder, value, setValue }) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default StyledInput;
