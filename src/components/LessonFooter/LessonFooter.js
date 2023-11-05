import styles from "./LessonFooter.module.css";
import styled from "styled-components";
import { icons } from "../../assets/icons";
import PressableButton from "../PressableButton/PressableButton";

function LessonFooter({
  estadoRespuesta,
  buttonText,
  handleSaltar,
  onClick,
  solucionCorrecta,
  leccionTerminada,
}) {
  return (
    <StyledFooterContainer estadoRespuesta={estadoRespuesta}>
      <div className={styles.footerInnerContainer}>
        {!leccionTerminada &&
          (estadoRespuesta === "" ? (
            <>
              {/* SALTAR */}
              <div className={styles.saltarContainer}>
                <PressableButton
                  text="Saltar"
                  onClick={handleSaltar}
                  buttonStyle={{
                    backgroundColor: "#ffffff",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "#e1e1e1",
                    boxShadow: "0px 2px 0px 0px #e1e1e1",
                    height: "30px",
                    minWidth: "150px",
                  }}
                  textStyle={{
                    color: "#a6a6a6",
                  }}
                />
              </div>
            </>
          ) : (
            <div className={styles.respuestaValidadaContainer}>
              <div className={styles.respuestaValidadaInner}>
                {/* Icon */}
                <div className={styles.iconRespuestaValidadaContainer}>
                  <StyledValidacionIcon
                    className={styles.iconRespuestaValidada}
                    alt={estadoRespuesta}
                    src={
                      estadoRespuesta === "correcta"
                        ? icons.checkIcon
                        : icons.errorIcon
                    }
                    respuestaCorrecta={estadoRespuesta === "correcta"}
                  />
                </div>
                {/* Texto */}
                <div className={styles.respuestaValidadaInfoContainer}>
                  {/* ¡Excelente! /  */}
                  <div className={styles.respuestaValidadaInfoContainerTexto}>
                    <StyledTitle
                      respuestaCorrecta={estadoRespuesta === "correcta"}
                    >
                      {estadoRespuesta === "correcta"
                        ? "¡Excelente!"
                        : "Solución correcta:"}
                    </StyledTitle>
                    {estadoRespuesta !== "correcta" && (
                      <div className={styles.solucionCorrecta}>
                        {solucionCorrecta}
                      </div>
                    )}
                  </div>
                  {/* Reportar */}
                  <div className={styles.reportarContainer}>
                    <div className={styles.reportarButton}>
                      <div className={styles.reportarContainerInner}>
                        <StyledReportarIcon
                          respuestaCorrecta={estadoRespuesta === "correcta"}
                        />
                        <StyledReportarText
                          respuestaCorrecta={estadoRespuesta === "correcta"}
                        >
                          Reportar
                        </StyledReportarText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* COMPROBAR */}
        <div className={styles.comprobarContainer}>
          <PressableButton
            text={buttonText}
            onClick={onClick}
            buttonStyle={{
              height: "30px",
              minWidth: "150px",
              backgroundColor: estadoRespuesta === "incorrecta" && "#ff4b4b",
              boxShadow:
                estadoRespuesta === "incorrecta" && "0px 4px 0px 0px #ea2b2b",
            }}
          />
        </div>
      </div>
    </StyledFooterContainer>
  );
}

export default LessonFooter;

const StyledFooterContainer = styled.div`
  grid-column: 1;
  grid-row: 3;
  z-index: 100;
  display: flex;
  bottom: 0;
  position: absolute;
  border-top: 2px solid #e5e5e5;
  border-top: ${(props) => {
    if (props.estadoRespuesta === "correcta") {
      return "2px solid #a5ed6e"; // Verde claro para "correcta"
    } else {
      return "2px solid #e5e5e5;"; // Blanco para cualquier otro caso, incluyendo ""
    }
  }};
  background-color: ${(props) => {
    if (props.estadoRespuesta === "correcta") {
      return "#d7ffb8"; // Verde claro para "correcta"
    } else if (props.estadoRespuesta === "incorrecta") {
      return "#ffdfe0"; // Rojo para "incorrecta"
    } else {
      return "#fff"; // Blanco para cualquier otro caso, incluyendo ""
    }
  }};

  max-height: 110px;
  min-height: 110px;
  overflow: hidden;
  width: 100%;
`;

const StyledReportarIcon = styled.span`
  background-image: ${(props) =>
    props.respuestaCorrecta
      ? `url(${icons.greenFlagIcon})`
      : `url(${icons.redFlagIcon})`};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 20px;
  vertical-align: middle;
  width: 20px;
`;

const StyledReportarText = styled.span`
  display: inline;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) => (props.respuestaCorrecta ? "#59a700" : "#ea2b2b")};
`;

const StyledTitle = styled.h2`
  line-height: 30px;
  margin: 0;
  color: ${(props) => (props.respuestaCorrecta ? "#59a700" : "#ea2b2b")};
  font-size: 24px;
  font-weight: 700;
`;

const StyledValidacionIcon = styled.img`
  display: block;
  margin: ${(props) =>
    props.respuestaCorrecta ? "27px 0 0 20px" : "26px 0 0 25px"};
  height: 31px;
  width: ${(props) => (props.respuestaCorrecta ? "41px" : "31px")};
  border-style: none;
`;
