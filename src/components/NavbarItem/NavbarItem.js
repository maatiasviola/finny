import React from "react";
import styled from "styled-components";

function NavbarItem({ icon, text, active, onClick }) {
  return (
    <ItemContainer active={active} onClick={onClick}>
      <ItemIcon src={icon} alt={text} />
      <ItemText active={active}>{text}</ItemText>
    </ItemContainer>
  );
}

export default NavbarItem;

const ItemContainer = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.active ? "#84d8ff" : "transparent")};
  background-color: ${(props) => props.active && "#ddf4ff"};
  border-radius: 12px;
  padding: 4px 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.active === false && "#f7f7f7"};
  }
`;

const ItemIcon = styled.img`
  margin-right: 20px;
  height: 32px;
  width: 32px;
`;

const ItemText = styled.p`
  color: ${(props) => (props.active ? "#1cb0f6" : "#777777")};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 27.5px;
  text-align: center;
  font-family: Inter;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;
