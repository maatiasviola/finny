import styled from "styled-components";

const TextoLeccion = ({ texto }) => {
  const lineas = texto.split("|");
  return (
    <StyledTexto>
      {lineas.map((linea, index) => (
        <>
          <p key={index}>{linea}</p>
          {index !== lineas.length - 1 && <br />}
        </>
      ))}
    </StyledTexto>
  );
};

export default TextoLeccion;

const StyledTexto = styled.p`
  color: #4b4b4b;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 136.842% */
`;
