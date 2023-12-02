import styled from "styled-components";

const HorizontalContainer = ({ icon, titulo, descripcion }) => {
  return (
    <StyledContainer>
      <StyledIcon src={icon} />
      <StyledInfoContainer>
        <StyledTitle>{titulo}</StyledTitle>
        <StyledDescription>{descripcion}</StyledDescription>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default HorizontalContainer;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  gap: 15px;
  border-radius: 16px;
  border: 2px solid #e5e5e5;
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledTitle = styled.p`
  color: #3c3c3c;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`;

const StyledDescription = styled.p`
  color: #777;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.8px;
`;
