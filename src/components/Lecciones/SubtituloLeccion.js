import styled from "styled-components";

const SubtituloLeccion = ({ subtitulo }) => {
  return <StyledSubtitulo>{subtitulo}</StyledSubtitulo>;
};

export default SubtituloLeccion;

const StyledSubtitulo = styled.p`
  color: #72a657;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  text-transform: uppercase;
  z-index: 100;
`;
