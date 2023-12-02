import styles from "./Logros.module.css";
const Logro = ({ icon, title, description, achievementProgress }) => {
  return (
    <div className={styles.logroContainer}>
      {/* Logro image */}
      <div className={styles.iconContainer}>
        <img src={icon} alt={title} className={styles.logroIcon} />
        <p className={styles.logroIconText}>Nivel 1</p>
      </div>

      {/* Logro Info */}
      <div className={styles.logroInfoContainer}>
        {/* Title */}
        <span className={styles.logroTitle}>{title}</span>

        {/* Progress bar */}
        <div
          value={achievementProgress}
          max="100"
          className={styles.progressBar}
        />

        {/* Description */}
        <p className={styles.logroDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Logro;
