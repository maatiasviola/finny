import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavbarItem from "../NavbarItem/NavbarItem";
import { icons } from "../../assets/icons";

function Navbar() {
  const [active, setActive] = useState("Aprender");

  return (
    <div className={styles.navbarContainer}>
      <NavbarItem
        onClick={() => setActive("Aprender")}
        active={active === "Aprender"}
        icon={icons.homeIcon}
        text="Aprender"
      />
      <NavbarItem
        onClick={() => setActive("Clasificacion")}
        active={active === "Clasificacion"}
        icon={icons.leaderboardIcon}
        text="Clasificación"
      />
      <NavbarItem
        onClick={() => setActive("Perfil")}
        active={active === "Perfil"}
        icon={icons.userIcon}
        text="Mi Perfil"
      />
    </div>
  );
}

export default Navbar;
