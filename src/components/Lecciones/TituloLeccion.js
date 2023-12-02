import styled from "styled-components";

const TituloLeccion = ({ titulo }) => {
  return <StyledTitulo>{titulo}</StyledTitulo>;
};

export default TituloLeccion;

const StyledTitulo = styled.p`
  margin-top: 20px;
  margin-bottom: 16px;
  color: #4b4b4b;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
`;
