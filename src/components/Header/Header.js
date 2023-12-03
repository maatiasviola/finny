import React, { useState } from "react";
import styles from "./Header.module.css";
import { icons } from "../../assets/icons";
import PressableButton from "../../components/PressableButton/PressableButton";
import Cookies from "universal-cookie";
import styled from "styled-components";
function Header() {
  const [redirecting, setRedirecting] = useState(false);
  return (
    <div className={styles.header}>
      {/* Logo */}
      <img src={icons.finnyIcon} alt="finny" className={styles.logo} />

      {/* Icons */}
      <div className={styles.iconsContainer}>

        {/* Avatar */}
        <img
          className={styles.avatar}
          src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1699113659/Avatar_jcqvt9.png"
          alt="Avatar"
          onClick={() => {
            setRedirecting(!redirecting);
            setTimeout(() => {
              setRedirecting(false);
            }, 5000);
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 60,
            right: 70,
            backgroundColor: "#fff",
            display: redirecting ? "flex" : "none",
            border: "2px solid #E5E5E5",
            borderRadius: 8,
            padding: "8px",
            zIndex: 100000,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <StyledModalItem
              onClick={() => {
                window.location.href = "/profile";
              }}
            >
              <StyledModalText>Mi perfil</StyledModalText>
            </StyledModalItem>

            <StyledModalItem
              onClick={() => {
                const cookie = new Cookies();
                cookie.remove("idPersona");
                window.location.href = "/";
              }}
            >
              <StyledModalText>Cerrar sesión</StyledModalText>
            </StyledModalItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

const StyledModalItem = styled.div`
  width: 100%;
  cursor: pointer;
  align-items: center;
  border-radius: 8px;
  padding: 8px 10px;
  transition: background-color 0.2s;
`;

const StyledModalText = styled.span`
  color: #afafaf;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
