import styles from "./IntroLeccion.module.css";
import LineDivider from "../LineDivider/LineDivider";

const IntroLeccion = ({
  personajeUnidadIcon,
  tituloLeccion,
  descripcionLeccion,
}) => {
  return (
    <>
      <div className={styles.introContainer}>
        <img alt="" src={personajeUnidadIcon} className={styles.personajeImg} />

        <div className={styles.infoContainer}>
          <p className={styles.titulo}>{tituloLeccion}</p>
          <p className={styles.descripcion}>{descripcionLeccion}</p>
        </div>
      </div>
      <LineDivider estiloPunteado={false} />
    </>
  );
};

export default IntroLeccion;
