import React, { useEffect, useState } from "react";
import styles from "./Lesson.module.css";
import { quizzes } from "../../constants/quizzes";
import LessonHeader from "../../components/LessonHeader/LessonHeader";
import ImageMultipleChoice from "../../components/ImageMultipleChoice/ImageMultipleChoice";
import MultipleChoice from "../../components/MultipleChoice/MultipleChoice";

import LessonFooter from "../../components/LessonFooter/LessonFooter";
import LeccionTerminada from "../../components/LeccionTerminada/LeccionTerminada";
import Chatbot from "../../components/Chatbot/Chatbot";

function Lesson() {
  const [active, setActive] = useState(-1); // opcion elegida
  const [lifes, setLifes] = useState(5); // vidas
  const [percentage, setPercentage] = useState(0);
  const [leccionTerminada, setLeccionTerminada] = useState(false);

  const [preguntas, setPreguntas] = useState([]);
  const [preguntasFalladas, setPreguntasFalladas] = useState([]); // array de posiciones
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [rondaFalladas, setRondaFalladas] = useState(false);

  const [contadorAcertadas, setContadorAcertadas] = useState(0);
  const [comprobar, setComprobar] = useState(true); // saber si hay que comprobar o continuar respuesta
  const [estadoRespuesta, setEstadoRespuesta] = useState("");

  useEffect(() => {
    setPreguntas(quizzes);
  }, []);

  const handleOpcion = (idSelected) => {
    setActive(idSelected);
  };

  const handleSiguientePregunta = () => {
    setPreguntaActual(preguntaActual + 1);

    if (preguntaActual === preguntas.length - 1 || rondaFalladas) {
      if (!rondaFalladas) {
        setRondaFalladas(true);
      }
      const numeroAleatorio = Math.floor(
        Math.random() * preguntasFalladas.length
      );
      setPreguntaActual(preguntasFalladas[numeroAleatorio]);
      let nuevasPreguntasFalladas = preguntasFalladas.filter(
        (pregunta) => pregunta !== preguntasFalladas[numeroAleatorio]
      );
      setPreguntasFalladas(nuevasPreguntasFalladas);
    }
  };

  const handleComprobar = () => {
    let respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;

    if (respuestaCorrecta === active) {
      setContadorAcertadas(contadorAcertadas + 1);
      setEstadoRespuesta("correcta");
    } else {
      setPreguntasFalladas([...preguntasFalladas, preguntaActual]);
      setLifes(lifes - 1);
      setEstadoRespuesta("incorrecta");
    }

    setComprobar(false);
  };

  const handleContinuar = () => {
    // verificar que vidas sea mayor que 0, sino se acabo el juego
    // aumentar progress bar dependiendo de la respuesta
    // permite continuar con el juego
    let progreso = (contadorAcertadas * 100) / preguntas.length;
    setPercentage(progreso);
    if (progreso === 100) {
      setLeccionTerminada(true);
    }
    !leccionTerminada && handleSiguientePregunta();
    setActive(-1);
    setEstadoRespuesta("");
    setComprobar(true);
  };

  const handleFooterButton = () => {
    if (leccionTerminada) {
      window.location = `/`;
    } else if (comprobar) {
      handleComprobar();
    } else {
      handleContinuar();
    }
  };

  const handleSaltar = () => {
    setActive(-1);
    setPreguntasFalladas([...preguntasFalladas, preguntaActual]);
    !leccionTerminada && handleSiguientePregunta();
  };

  if (preguntas.length === 0) {
    return <></>; //loader
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      {!leccionTerminada && (
        <LessonHeader lifes={lifes} percentage={percentage} />
      )}

      {/* Lesson */}
      <div className={styles.lessonContainer}>
        <div className={styles.lessonInnerContainer}>
          <Chatbot />
          <div className={styles.lessonItemsContainer}>
            {/* Finished Lesson */}
            {leccionTerminada && <LeccionTerminada />}
            {!leccionTerminada && (
              <>
                {preguntas[preguntaActual].tipo === 1 ? (
                  <MultipleChoice
                    quiz={preguntas[preguntaActual]}
                    handleOpcion={handleOpcion}
                    active={active}
                  />
                ) : (
                  <ImageMultipleChoice
                    quiz={preguntas[preguntaActual]}
                    handleOpcion={handleOpcion}
                    active={active}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <LessonFooter
        estadoRespuesta={estadoRespuesta}
        leccionTerminada={leccionTerminada}
        buttonText={leccionTerminada || !comprobar ? "Continuar" : "Comprobar"}
        onClick={handleFooterButton}
        handleSaltar={handleSaltar}
        solucionCorrecta={
          !leccionTerminada
            ? preguntas[preguntaActual].opciones[
                preguntas[preguntaActual].respuestaCorrecta
              ].texto
            : ""
        }
      />
    </div>
  );
}

export default Lesson;
