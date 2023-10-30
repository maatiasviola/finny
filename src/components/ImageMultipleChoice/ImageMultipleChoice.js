import PressableImageOption from "../PressableImageOption/PressableImageOption";
import styles from "./ImageMultipleChoice.module.css";

function ImageMultipleChoice({ quiz, active, handleOption }) {
  return (
    <>
      {/* Question */}
      <h1 className={styles.question}>{quiz.pregunta}</h1>

      {/* Options */}
      <div className={styles.optionsContainer}>
        <div className={styles.optionsInnerContainer}>
          {quiz.opciones.map((opcion, index) => (
            <PressableImageOption
              image={opcion.imagen}
              text={opcion.texto}
              number={index}
              onClick={() => handleOption(index)}
              active={active === index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageMultipleChoice;
