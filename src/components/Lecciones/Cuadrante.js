import React from "react";
import styled from "styled-components";
import ElementoCuadrante from "./ElementoCuadrante";

const Cuadrante = ({ elementos }) => {
  return (
    <>
      <StyledContainer>
        {elementos.map((elemento, index) => (
          <ElementoCuadrante
            key={index}
            img={elemento.icon}
            title={elemento.title}
            description={elemento.description}
          />
        ))}
      </StyledContainer>
      <StyledLineDivider />
    </>
  );
};

export default Cuadrante;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas de igual ancho */
  gap: 16px; /* Espacio entre elementos */
`;

const StyledLineDivider = styled.p`
  width: 100%;
  height: 4px;
  background: #e5e5e5;
`;
