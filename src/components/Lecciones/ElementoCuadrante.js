import React from "react";
import styled from "styled-components";

const ElementoCuadrante = ({ img, title, description }) => {
  return (
    <ElementoContainer>
      <StyledIcon src={img} />
      <InfoContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </InfoContainer>
    </ElementoContainer>
  );
};

export default ElementoCuadrante;

const ElementoContainer = styled.div`
  display: flex;
  gap: 10px;
  flex: 1 0 48%; /* Distribuye el espacio disponible, con un máximo del 48% de ancho */
  margin: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 10px;
`;

const StyledTitle = styled.p`
  color: #3c3c3c;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const StyledDescription = styled.p`
  color: #777;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.8px;
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
`;
