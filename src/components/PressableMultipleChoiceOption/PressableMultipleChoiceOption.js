import styled from "styled-components";

function PressableMultipleChoiceOption({ text, number, active, onClick }) {
  return (
    <StyledContainer onClick={onClick} active={active}>
      <StyledNumber active={active}>{number}</StyledNumber>
      <StyledText active={active}>{text}</StyledText>
    </StyledContainer>
  );
}

export default PressableMultipleChoiceOption;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.4;
  padding: 12px 16px;
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  box-shadow: 0px 2px 0px 0px #e1e1e1;
  color: #4b4b4b;
  border-color: ${(props) => (props.active ? "#84d8ff" : "#e1e1e1")};
  background-color: ${(props) => (props.active ? "#ddf4ff" : "#ffffff")};
  font-size: 19px;

  &:active {
    box-shadow: none;
    transform: translateY(2px);
  }
  &:hover {
    background-color: ${(props) => props.active === false && "#f7f7f7"};
  }
`;

const StyledNumber = styled.span`
  display: inline-flex;
  align-items: center;
  border: 2px solid;

  border-color: ${(props) => (props.active ? "#84d8ff" : "#e5e5e5")};
  border-radius: 8px;
  color: ${(props) => (props.active ? "#1cb0f6" : "#afafaf")};
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  justify-content: center;
  width: 30px;
  flex-shrink: 0;
  cursor: pointer;
`;

const StyledText = styled.div`
  margin-left: 12px;
  margin-right: 14px;
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  text-align: center;
  justify-content: center;
  color: #4b4b4b;
`;
