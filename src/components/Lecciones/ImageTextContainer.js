import styled from "styled-components";

const ImageTextContainer = ({ leftImage, rightImage, text }) => {
  const lineas = text.split("|");

  return (
    <>
      <StyledContainer>
        {leftImage && <StyledLeftImage src={leftImage} />}
        <StyledText>
          {lineas.map((linea, index) => (
            <>
              <p key={index}>{linea}</p>
              {index !== lineas.length - 1 && <br />}
            </>
          ))}
        </StyledText>
        {rightImage && <StyledRightImage src={rightImage} />}
      </StyledContainer>

      <StyledLineDivider />
    </>
  );
};

export default ImageTextContainer;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const StyledLeftImage = styled.img`
  width: 140px;
  height: 140px;
  margin-right: 10px;
`;

const StyledRightImage = styled.img`
  width: 160px;
  height: 160px;
  margin-left: 10px;
`;

const StyledText = styled.p`
  color: #777;
  flex: 1;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 25.5px;
  white-space: pre-line;
  word-break: break-word;
`;

const StyledLineDivider = styled.p`
  width: 100%;
  height: 4px;
  background: #e5e5e5;
  margin: 10px 0;
`;
