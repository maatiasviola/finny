import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./LessonHeader.module.css";
import { icons } from "../../assets/icons";

function LessonHeader({ lifes, percentage }) {
  const handleClose = () => {
    window.location = `/home`;
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerItems}>
          {/* Close Button */}
          <img
            className={styles.icon}
            src={icons.closeIcon}
            onClick={handleClose}
            alt="Cerrar"
          />

          {/* Progress Bar */}
          <ProgressBar percentage={percentage} />

          {/* Lifes */}
          <div className={styles.lifesContainer}>
            <img src={icons.heartIcon} className={styles.heart} alt="Vidas" />
            <span className={styles.heartText}>{lifes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonHeader;
