import styled from "styled-components";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className={styles.container}>
      {/* Barra completa */}
      <div className={styles.progressBar}>
        {/* Decorado */}
        <StyledDecorated percentage={percentage} />
      </div>

      {/* Progreso */}
      <StyledProgressBarFill percentage={percentage} />
    </div>
  );
};

export default ProgressBar;

const StyledDecorated = styled.div`
  background: #ffffff;
  border-radius: inherit;
  height: 30%;
  max-width: calc(100%- 16px);
  left: 8px;
  opacity: 0.2;
  position: absolute;
  top: 25%;
  z-index: 100;
  width: ${(props) => `calc(${props.percentage}% - 16px)`};
`;

const StyledProgressBarFill = styled.div`
  opacity: 1;
  bottom: 0;
  max-width: 100%;
  position: absolute;
  height: 16px;
  border-radius: inherit;
  background-color: #58cb02;
  transition: width 0.5s ease-out;
  width: ${(props) => `${props.percentage}%`};
`;
