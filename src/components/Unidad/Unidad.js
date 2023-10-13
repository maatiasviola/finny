import React from "react";
import styled from "styled-components";
import styles from "./Unidad.module.css";
import PressableButton from "../PressableButton/PressableButton";
import { icons } from "../../assets/icons";
import Nivel from "../Nivel/Nivel";

function Unidad() {
  return (
    <div>
      <Seccion>
        {/* Seccion Heading */}
        <div className={styles.unidadInfo}>
          <h1 className={styles.unidadTitulo}>Unidad 1</h1>
          <span className={styles.unidadDescripcion}>
            Tus primeros pasos en las inversiones
          </span>
        </div>
        <PressableButton
          text="Guía"
          icon={icons.bookIcon}
          buttonStyle={{
            backgroundColor: "#CE82FF",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "rgba(0, 0, 0, 0.20)",
            boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.20)",
          }}
          textStyle={{
            color: "#FFF",
          }}
        />
      </Seccion>
      {/* Seccion Niveles */}
      <div className={styles.nivelesContainer}>
        <Nivel />
      </div>
    </div>
  );
}

export default Unidad;

const Seccion = styled.div`
  display: flex;
  border-radius: 13px;
  padding: 22px 16px;
  row-gap: 6px;
  align-items: center;
  column-gap: 16px;
  background-color: #ce82ff;
  color: #ffffff;
`;
