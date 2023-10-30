import React, { useState } from "react";
import styles from "./Lesson.module.css";
import { quizzes } from "../../constants/quizzes";
import PressableButton from "../../components/PressableButton/PressableButton";
import PressableImageOption from "../../components/PressableImageOption/PressableImageOption";
import LessonHeader from "../../components/LessonHeader/LessonHeader";
import ImageMultipleChoice from "../../components/ImageMultipleChoice/ImageMultipleChoice";
import MultipleChoice from "../../components/MultipleChoice/MultipleChoice";
import { icons } from "../../assets/icons";
import styled from "styled-components";
import LessonFooter from "../../components/LessonFooter/LessonFooter";

function Lesson() {
  const [active, setActive] = useState(-1); // opcion elegida
  const [lifes, setLifes] = useState(5); // vidas
  const [percentage, setPercentage] = useState(48);

  const [comprobar, setComprobar] = useState(true); // saber si hay que comprobar o continuar respuesta
  const [estadoRespuesta, setEstadoRespuesta] = useState("");

  const handleOption = (idSelected) => {
    setActive(idSelected);
  };

  const handleComprobar = () => {
    // verificar si respuesta fue correcta
    // si fue correcta o incorrecta hacer un setLifes +- 1
    // verificar que vidas sea mayor que 0, sino se acabo el juego
    // aumentar progress bar dependiendo de la respuesta
    setEstadoRespuesta("incorrecta");
    setComprobar(false);
  };

  const handleContinuar = () => {
    // permite continuar con el juego
    setEstadoRespuesta("");
    setComprobar(true);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <LessonHeader lifes={lifes} percentage={percentage} />

      {/* Lesson */}
      <div className={styles.lessonContainer}>
        <div className={styles.lessonInnerContainer}>
          <div className={styles.lessonItemsContainer}>
            {/*  Image Multiple Choice ejemplo
                        
            <ImageMultipleChoice
              quiz={quizzes[0]}
              handleOption={handleOption}
              active={active}
            />
            */}

            <MultipleChoice
              quiz={quizzes[1]}
              handleOption={handleOption}
              active={active}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <LessonFooter
        estadoRespuesta={estadoRespuesta}
        buttonText={comprobar ? "Comprobar" : "Continuar"}
        onClick={comprobar ? handleComprobar : handleContinuar}
        solucionCorrecta={quizzes[1].opciones[quizzes[1].respuestaCorrecta]}
      />
    </div>
  );
}

export default Lesson;
