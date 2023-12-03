import React, { useEffect, useRef, useState } from "react";
import styles from "./Lesson.module.css";
import { quizzes } from "../../constants/quizzes";
import LessonHeader from "../../components/LessonHeader/LessonHeader";
import ImageMultipleChoice from "../../components/ImageMultipleChoice/ImageMultipleChoice";
import MultipleChoice from "../../components/MultipleChoice/MultipleChoice";

import LessonFooter from "../../components/LessonFooter/LessonFooter";
import LeccionTerminada from "../../components/LeccionTerminada/LeccionTerminada";
import Chatbot from "../../components/Chatbot/Chatbot";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { ip } from "../../constants/ip";

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

  const [puntos,setPuntos]=useState(0);
  const [bien,setBien]=useState(0);
  const [total,setTotal]=useState(0);
  const [exp,setExp]=useState(0);

  const location=useLocation();

  const correctoRef= useRef(null);
  const incorrectoRef= useRef(null);

  useEffect(() => {
    setPreguntas(location.state.nivelAJugar);
    setBien(location.state?.nivelAJugar?.length);
    setTotal(location.state?.nivelAJugar?.length);
    console.log(location.state.nivelAJugar);
  }, []);

  async function fetchPuntos(){
    const cookie=new Cookies();
    console.log("FETCHPUNTOS");
    try {
      fetch(ip+`/Persona/Puntaje`,
      {
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "idPersona":await cookie.get("idPersona"),
          "idNivel":location.state.idNivel,
          "puntaje":puntos
        }
        )
      }).then((data) =>
      {if(data.status!=200){
        window.alert("Error en la subida de la puntuación");
      }
    else{
      window.location = `/home`;
    }})
      
    } catch (error) {
      console.log("Error en la subida de puntos en Lesson.");
      console.log(error);
    }
  }

  const handleOpcion = (idSelected) => {
    setActive(idSelected);
  };

  const handleSiguientePregunta = () => {
    setPreguntaActual(preguntaActual + 1);

    if (preguntaActual === preguntas.length - 1 || rondaFalladas) {
      if (!rondaFalladas) {
        setBien((bien/total)*100+"%");
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
      correctoRef.current.play();
      setContadorAcertadas(contadorAcertadas + 1);
      if(!rondaFalladas){setPuntos(puntos+preguntas[preguntaActual].puntosPosibles);}
      setEstadoRespuesta("correcta");
    } else {
      incorrectoRef.current.play();
      if(!rondaFalladas){
        setBien(bien-1);
      }
      setPreguntasFalladas([...preguntasFalladas, preguntaActual]);
      if (lifes == 0){
        window.location.href = "/home";
      }
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
      setExp(puntos*5);
      setLeccionTerminada(true);
    }
    !leccionTerminada && handleSiguientePregunta();
    setActive(-1);
    setEstadoRespuesta("");
    setComprobar(true);
  };

  const handleFooterButton = () => {
    if (leccionTerminada) {
      fetchPuntos();
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
      <audio ref={correctoRef}>
        <source src={require("./correcto.mp3")} type="audio/mpeg"/>
      </audio>
      <audio ref={incorrectoRef}>
        <source src={require("./incorrecto.mp3")} type="audio/mpeg"/>
      </audio>
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
            {leccionTerminada && <LeccionTerminada exp={exp} bien={bien} />}
            {!leccionTerminada && (
              <>
                {preguntas[preguntaActual].tipo === "MULTIPLECHOICE" ? (
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
