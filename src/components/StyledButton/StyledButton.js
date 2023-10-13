import React from "react";
import styles from "./StyledButton.module.css";

function StyledButton({ text, icon, buttonStyle }) {
  return (
    <div className={styles.buttonContainer} style={buttonStyle}>
      {icon && <img className={styles.buttonIcon} alt={text} src={icon} />}
      <span className={styles.buttonText}>{text}</span>
    </div>
  );
}

export default StyledButton;
