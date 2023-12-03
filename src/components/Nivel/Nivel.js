import React from "react";
import styled from "styled-components";
import PressableButton from "../PressableButton/PressableButton";
import { useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons";

function Nivel({ idNivel, nivelAJugar, left, colorFondo }) {
  const navigate = useNavigate();

  return (
    <PressableButton
      onClick={() => {navigate("/lesson",{state:{nivelAJugar,idNivel}});}}
      idNivel={idNivel}
      icon={icons.starIcon}
      iconStyle={{
        width: "42px",
        height: "34px",
      }}
      buttonStyle={{
        backgroundColor: colorFondo,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.20)",
        boxShadow: `0px 8px 0px 0px ${colorFondo}, 0px 8px 0px 0px rgba(0, 0, 0, 0.20)`,
        position: "relative",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        padding: "20px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        left: left,
      }}
    />
  );
}

export default Nivel;
