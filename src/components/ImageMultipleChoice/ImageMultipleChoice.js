import PressableImageOption from "../PressableImageOption/PressableImageOption";
import styles from "./ImageMultipleChoice.module.css";

function ImageMultipleChoice({ quiz, active, handleOpcion }) {
  return (
    <>
      {/* Question */}
      <h1 className={styles.question}>{quiz.pregunta}</h1>

      {/* Options */}
      <div className={styles.optionsContainer}>
        <div className={styles.optionsInnerContainer}>
          {quiz.opciones.map((opcion) => (
            <PressableImageOption
              key={opcion.idOpcion}
              image={opcion.imagen}
              text={opcion.texto}
              number={opcion.idOpcion+1}
              onClick={() => handleOpcion(opcion.idOpcion)}
              active={active === opcion.idOpcion}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageMultipleChoice;
