import React from "react";
import styles from "./Header.module.css";
import { icons } from "../../assets/icons";

function Header() {
  return (
    <div className={styles.header}>
      {/* Logo */}
      <img src={icons.finnyIcon} alt="finny" className={styles.logo} />

      {/* Icons */}
      <div className={styles.iconsContainer}>
        {/* Racha */}
        <div className={styles.singleIconContainer}>
          <img className={styles.icon} src={icons.fireIcon} alt="Racha" />
          <p className={styles.fireText}>1</p>
        </div>

        {/* Super */}
        <div className={styles.singleIconContainer}>
          <img className={styles.icon} src={icons.superIcon} alt="Super" />
          <p className={styles.superText}>Ir Super</p>
        </div>

        {/* Avatar */}
        <img className={styles.avatar} src={icons.avatarIcon} alt="Avatar" onClick={()=> window.location.href = "/profile"}/>
      </div>
    </div>
  );
}

export default Header;
