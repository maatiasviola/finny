import styled from "styled-components";

const StatContainer = ({ icon, title, description }) => {
  return (
    <Container>
      <StyledIcon src={icon} />
      <InfoContainer>
        <StyledStat>{title}</StyledStat>
        <StyledDescription>{description}</StyledDescription>
      </InfoContainer>
    </Container>
  );
};

export default StatContainer;

const Container = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 15px;
  border-radius: 16px;
  border: 2px solid #e5e5e5;
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledStat = styled.p`
  color: #afafaf;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const StyledDescription = styled.p`
  color: #afafaf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
