import PressableMultipleChoiceOption from "../PressableMultipleChoiceOption/PressableMultipleChoiceOption";
import styles from "./MultipleChoice.module.css";

function MultipleChoice({ quiz, handleOpcion, active }) {
  return (
    <>
      {/* Question */}
      <h1 className={styles.question}>{quiz.pregunta}</h1>

      {/* Options */}
      <div className={styles.optionsContainer}>
        <div className={styles.optionsInnerContainer}>
          {quiz.opciones.map((opcion) => (
            <PressableMultipleChoiceOption
              key={opcion.idOpcion}
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

export default MultipleChoice;
