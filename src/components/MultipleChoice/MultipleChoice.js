import PressableMultipleChoiceOption from "../PressableMultipleChoiceOption/PressableMultipleChoiceOption";
import styles from "./MultipleChoice.module.css";

function MultipleChoice({ quiz, handleOption, active }) {
  return (
    <>
      {/* Question */}
      <h1 className={styles.question}>{quiz.pregunta}</h1>

      {/* Options */}
      <div className={styles.optionsContainer}>
        <div className={styles.optionsInnerContainer}>
          {quiz.opciones.map((opcion, index) => (
            <PressableMultipleChoiceOption
              text={opcion}
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

export default MultipleChoice;
