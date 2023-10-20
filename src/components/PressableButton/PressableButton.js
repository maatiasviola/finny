import React from "react";
import styled from "styled-components";

function PressableButton({
  text,
  icon,
  buttonStyle,
  textStyle,
  iconStyle,
  onClick,
}) {
  return (
    <ButtonContainer buttonStyle={buttonStyle} onClick={onClick}>
      {icon && <StyledImage iconStyle={iconStyle} src={icon} alt={text} />}
      {text && <ButtonText textStyle={textStyle}>{text}</ButtonText>}
    </ButtonContainer>
  );
}

export default PressableButton;

const ButtonContainer = styled.div`
  position: ${(props) =>
    props.buttonStyle ? props.buttonStyle.position || "initial" : "initial"};
  right: ${(props) =>
    props.buttonStyle ? props.buttonStyle.right || "initial" : "initial"};
  top: ${(props) =>
    props.buttonStyle ? props.buttonStyle.top || "initial" : "initial"};
  width: ${(props) =>
    props.buttonStyle ? props.buttonStyle.width || "auto" : "auto"};
  min-width: ${(props) =>
    props.buttonStyle ? props.buttonStyle.minWidth || "auto" : "auto"};
  height: ${(props) =>
    (props.buttonStyle && props.buttonStyle.height) || "auto"};

  margin-top: ${(props) =>
    props.buttonStyle ? props.buttonStyle.marginTop || "0" : "0"};
  background-color: ${(props) =>
    props.buttonStyle
      ? props.buttonStyle.backgroundColor || "#42C62F"
      : "#42C62F"};
  border-radius: ${(props) =>
    props.buttonStyle ? props.buttonStyle.borderRadius || "16px" : "16px"};
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-width: ${(props) =>
    props.buttonStyle ? props.buttonStyle.borderWidth || "auto" : "auto"};
  border-style: ${(props) =>
    props.buttonStyle ? props.buttonStyle.borderStyle || "auto" : "auto"};
  border-color: ${(props) =>
    props.buttonStyle ? props.buttonStyle.borderColor || "auto" : "auto"};
  box-shadow: ${(props) =>
    props.buttonStyle
      ? props.buttonStyle.boxShadow || "0px 4px 0px 0px #489D26"
      : "0px 4px 0px 0px #489D26"};

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;

const ButtonText = styled.div`
  color: ${(props) => (props.textStyle ? props.textStyle.color : "#fff")};
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 27.5px;
  text-transform: uppercase;
  margin-left: ${(props) => props.textStyle?.marginLeft || "0px"};
`;

const StyledImage = styled.img`
  width: ${(props) => (props.iconStyle ? props.iconStyle.width : "24px")};
  height: ${(props) => (props.iconStyle ? props.iconStyle.height : "24px")};
`;
