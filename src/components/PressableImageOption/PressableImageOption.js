import React from "react";
import styles from "./PressableImageOption.module.css";
import styled from "styled-components";

function PressableImageOption({ image, text, number, active, onClick }) {
  return (
    <StyledOption active={active} onClick={onClick}>
      <div className={styles.optionImageContainer}>
        <img className={styles.optionImage} src={image} alt={text} />
      </div>
      <div className={styles.optionTextContainer}>
        <StyledText active={active}>{text}</StyledText>
        <StyledNumber active={active}>{number}</StyledNumber>
      </div>
    </StyledOption>
  );
}

export default PressableImageOption;

const StyledOption = styled.div`
  display: flex;
  padding: 26px;
  border-radius: 12px;
  border-style: solid;
  border-width: 2px 2px 4px;
  cursor: pointer;
  box-shadow: 0px 2px 0px 0px #e5e5e5;
  color: #4b4b4b;
  border-color: ${(props) => (props.active ? "#84d8ff" : "#e5e5e5")};
  background-color: ${(props) => (props.active ? "#ddf4ff" : "#fff")};
  flex-direction: column;
  font-size: 19px;
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
  &:hover {
    background-color: ${(props) => props.active === false && "#f7f7f7"};
  }
`;

const StyledText = styled.span`
  text-align: left;
  color: ${(props) => (props.active ? "#1cb0f6" : "#4b4b4b")};
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  flex: 1;
  margin-right: 5px;
`;

const StyledNumber = styled.span`
  display: inline-flex;
  align-items: center;
  border: 2px solid;

  border-color: ${(props) => (props.active ? "#84d8ff" : "#e5e5e5")};
  border-radius: 8px;
  color: ${(props) => (props.active ? "#1cb0f6" : "#afafaf")};
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  justify-content: center;
  width: 30px;
  flex-shrink: 0;
  cursor: pointer;
`;
