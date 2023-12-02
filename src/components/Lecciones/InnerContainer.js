import React from "react";
import styled from "styled-components";

const InnerContainer = ({ titulo, texto, img }) => {
  return (
    <Container>
      <InfoContainer>
        <StyledTitle>{titulo}</StyledTitle>
        <StyledTextContainer>
          {texto.map((texto, index) => {
            return <StyledText key={index}>→ {texto}</StyledText>;
          })}
        </StyledTextContainer>
      </InfoContainer>
      <StyledImage src={img} />
    </Container>
  );
};

export default InnerContainer;

const Container = styled.div`
  display: flex;
  padding: 26px 26px 26px 18px;
  align-items: center;
  border-radius: 16px;
  border: 2px solid #fff;
  background: #fff;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const StyledTitle = styled.p`
  color: #72a657;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
`;

const StyledText = styled.p`
  color: #afafaf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
`;

const StyledImage = styled.img`
  width: 139px;
  height: 139px;
  margin-left: 20px;
`;

const StyledTextContainer = styled.div`
  margin-left: 20px;
`;
