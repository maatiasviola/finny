import React from "react";
import styles from "./LineDivider.module.css";

function LineDivider() {
  return (
    <div className={styles.lineContainer}>
      <div className={styles.line} />
      <div className={styles.o}>o</div>
      <div className={styles.line} />
    </div>
  );
}

export default LineDivider;
