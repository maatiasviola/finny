import React from "react";
import styled from "styled-components";
import PressableButton from "../PressableButton/PressableButton";
import { icons } from "../../assets/icons";

function Nivel({idNivel,left}) {
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
        onClick={() => {window.location=`/lesson?idNivel=${idNivel}`;}}
        icon={icons.starIcon}
        iconStyle={{
          width: "42px",
          height: "34px",
        }}
        buttonStyle={{
          backgroundColor: "#CE82FF",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.20)",
          boxShadow:
            "0px 8px 0px 0px #CE82FF, 0px 8px 0px 0px rgba(0, 0, 0, 0.20)",
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


