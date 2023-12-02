import styled from "styled-components";
import styles from "./AgregarAmigo.module.css";
const AgregarAmigo = ({ idAmigo, icon, title, description }) => {
  return (
    <StyledContainer idAmigo={idAmigo}>
      {/* Logro image */}
      <img src={icon} alt={title} className={styles.icon} />

      {/* Logro Info */}
      <div className={styles.infoContainer}>
        {/* Title */}
        <span className={styles.title}>{title}</span>

        {/* Description */}
        <p className={styles.description}>{description}</p>
      </div>
    </StyledContainer>
  );
};

export default AgregarAmigo;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
  gap: 5px;
  border-bottom: ${(props) =>
    props.idAmigo !== 1 ? "2px solid #e5e5e5" : "none"};
`;
