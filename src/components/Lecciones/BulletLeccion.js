import React from "react";
import styled from "styled-components";

const BulletLeccion = ({ titulo, texto, opciones }) => {
  return (
    <StyledContainer>
      <StyledTitle>{titulo}</StyledTitle>

      <StyledInfoContainer>
        <StyledText>{texto}</StyledText>

        {opciones.map((opcion, index) => {
          return <StyledText key={index}>✅ {opcion}</StyledText>;
        })}
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default BulletLeccion;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin-top: 20px;
`;

const StyledTitle = styled.p`
  color: #4b4b4b;
  text-align: right;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  width: 30%;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 40px;
`;

const StyledText = styled.p`
  color: #777;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
