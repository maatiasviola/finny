import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavbarItem from "../NavbarItem/NavbarItem";
import { icons } from "../../assets/icons";

function Navbar() {
  const [active, setActive] = useState("Aprender");

  React.useEffect(()=>{
    if (window.location.href.includes("profile")){
      setActive("Perfil");
    }
  },[])

  return (
    <div className={styles.navbarContainer}>
      <NavbarItem
        onClick={() => {setActive("Aprender"); window.location.href="/home"}}
        active={active === "Aprender"}
        icon={icons.homeIcon}
        text="Aprender"
      />
      <NavbarItem
        onClick={() => {setActive("Clasificacion");  window.location.href="/clasification"}}
        active={active === "Clasificacion"}
        icon={icons.leaderboardIcon}
        text="Clasificación"
      />
      <NavbarItem
        onClick={() => {setActive("Perfil"); window.location.href="/profile"}}
        active={active === "Perfil"}
        icon={icons.userIcon}
        text="Mi Perfil"
      />
    </div>
  );
}

export default Navbar;
