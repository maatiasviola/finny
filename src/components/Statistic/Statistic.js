import styled from "styled-components";
import styles from "./Statistic.module.css";

function Statistic({ label, icon, value, color }) {
  return (
    <div className={styles.container}>
      <StyledInnerContainer color={color} />
      <div className={styles.label}>{label}</div>
      <StyledStatContainer color={color}>
        <img className={styles.icon} src={icon} alt={label} />
        <StyledValue color={color}>{value}</StyledValue>
      </StyledStatContainer>
    </div>
  );
}

export default Statistic;

const StyledInnerContainer = styled.div`
  animation-delay: 900ms;
  animation: aparecer 0.2s ease-in-out;
  animation-fill-mode: both;
  border-radius: 16px;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
  background-color: ${(props) => (props.color ? props.color : "#58cc02")};

  @keyframes aparecer {
    0%,
    50% {
      background-color: #ffffff;
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const StyledStatContainer = styled.div`
  font-size: 20px;
  align-items: center;
  animation: aparicionStat 0.1s ease-in-out;
  background-color: #ffffff;
  border: 2px solid;
  border-color: ${(props) => (props.color ? props.color : "#58cc02")};
  border-radius: 16px;
  color: ${(props) => (props.color ? props.color : "#58cc02")};
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
  height: 70px;
  justify-content: center;
  transition: border-color 0.2s;

  @keyframes aparicionStat {
    0% {
      border-color: rgb(229, 229, 229);
      opacity: 0;
      transform: scale(0);
    }
    50% {
      border-color: rgb(229, 229, 229);
      opacity: 1;
      transform: scale(1);
    }
    100% {
      border-color: rgb(255, 200, 0);
    }
  }
`;

const StyledValue = styled.span`
  font-size: 20px;
  color: ${(props) => (props.color ? props.color : "#58cc02")};
  font-weight: 700;
`;
