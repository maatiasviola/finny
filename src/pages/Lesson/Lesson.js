import React, { useState } from "react";
import styles from "./Lesson.module.css";
import { icons } from "../../assets/icons";
import PressableButton from "../../components/PressableButton/PressableButton";
import PressableImageOption from "../../components/PressableImageOption/PressableImageOption";

function Lesson() {
  const [active, setActive] = useState("");

  const handleOption = (idSelected) => {
    setActive(idSelected);
  };
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerItems}>
            <img className={styles.icon} src={icons.closeIcon} alt="Cerrar" />
            <div className={styles.progressBar}></div>
            <div className={styles.lifesContainer}>
              <img src={icons.heartIcon} className={styles.heart} alt="Vidas" />
              <span className={styles.heartText}>5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson */}
      <div className={styles.lessonContainer}>
        <div className={styles.lessonInnerContainer}>
          <div className={styles.lessonItemsContainer}>
            {/* Question */}
            <h1 className={styles.question}>
              ¿Cual de estas es una inversión de alto riesgo?
            </h1>

            {/* Options */}
            <div className={styles.optionsContainer}>
              <div className={styles.optionsInnerContainer}>
                <PressableImageOption
                  image={icons.letraTesoroIcon}
                  text="Letra tesoro de USA"
                  number="1"
                  onClick={() => handleOption("1")}
                  active={active === "1"}
                />

                <PressableImageOption
                  image={icons.teslaIcon}
                  text="Una accion de Tesla"
                  number="2"
                  onClick={() => handleOption("2")}
                  active={active === "2"}
                />

                <PressableImageOption
                  image={icons.casaIcon}
                  text="Una propiedad"
                  number="3"
                  onClick={() => handleOption("3")}
                  active={active === "3"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footerContainer}>
        <div className={styles.footerInnerContainer}>
          {/* SALTAR */}
          <div className={styles.saltarContainer}>
            <PressableButton
              text="Saltar"
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

          {/* COMPROBAR */}
          <div className={styles.comprobarContainer}>
            <PressableButton
              text="Comprobar"
              buttonStyle={{ height: "30px", minWidth: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
