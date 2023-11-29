import React from "react";
import styled from "styled-components";
import PressableButton from "../PressableButton/PressableButton";
import { useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons";

function Nivel({idNivel,nivelAJugar,left,colorFondo}) {
  const navigate = useNavigate();
const StyledDiv = styled.div`
  margin-bottom: 0px;
  margin-top: 20px;
  display: flex;
  position: relative;
  cursor: pointer;
  left: ${left};
  z-index: 20;
`;
  return (
    <StyledDiv>
      <PressableButton
        onClick={() => {navigate("/lesson",{state:{nivelAJugar}});}}
        icon={icons.starIcon}
        idNivel={idNivel}
        iconStyle={{
          width: "42px",
          height: "34px",
        }}
        buttonStyle={{
          backgroundColor: colorFondo,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.20)",
          boxShadow:
          `0px 8px 0px 0px ${colorFondo}, 0px 8px 0px 0px rgba(0, 0, 0, 0.20)`,
          borderRadius: "50%",
          width: "70px",
          height: "65px",
          position:"relative"
        }}
      />
    </StyledDiv>
  );
}

export default Nivel;


