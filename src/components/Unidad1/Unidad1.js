import { useState } from "react";
import { icons } from "../../assets/icons";
import styles from "./Unidad1.module.css";
import PressableButton from "../PressableButton/PressableButton";
import Leccion1 from "../Unidades/Unidad1/Leccion1";
import Leccion2 from "../Unidades/Unidad1/Leccion2";
import Leccion3 from "../Unidades/Unidad1/Leccion3";

const Unidad1 = ({ mostrarUnidad }) => {
  const [leccionActual, setLeccionActual] = useState(1);

  const handleVolver = () => {
    mostrarUnidad(0);
  };

  const handleChangeLeccion = (nroLeccion) => {
    setLeccionActual(nroLeccion);
  };

  let contenidoRenderizado;

  if (leccionActual === 1) {
    contenidoRenderizado = <Leccion1 />;
  } else if (leccionActual === 2) {
    contenidoRenderizado = <Leccion2 />;
  } else {
    contenidoRenderizado = <Leccion3 />;
  }
  return (
    <div className={styles.container}>
      {/* Go back */}
      <div className={styles.headerContainer}>
        <div className={styles.volverContainer} onClick={handleVolver}>
          <img alt="Home" src={icons.leftArrow} className={styles.volverIcon} />
          <p className={styles.volverText}>Home</p>
        </div>
        <div className={styles.cambiarLeccionContainer}>
          <PressableButton text="1" onClick={() => handleChangeLeccion(1)} />
          <PressableButton text="2" onClick={() => handleChangeLeccion(2)} />
          <PressableButton text="3" onClick={() => handleChangeLeccion(3)} />
        </div>
      </div>

      {contenidoRenderizado}
    </div>
  );
};

export default Unidad1;
