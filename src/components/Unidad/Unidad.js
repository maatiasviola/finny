import React from "react";
import styled from "styled-components";
import styles from "./Unidad.module.css";
import PressableButton from "../PressableButton/PressableButton";
import { icons } from "../../assets/icons";
import Nivel from "../Nivel/Nivel";

function Unidad() {

  const levels= Array(10).fill(
    {
      nivel:{
        idNivel:"1",
        juegos:[
          {}
        ],
        lecciones:[
          {}
        ],
      },
      hecho:false
    }
    );

  let actualLeft=11;
  let flip=false;

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
            marginLeft: "10px",
          }}
        />
      </Seccion>
      {/* Seccion Niveles */}
      <div className={styles.nivelesContainer}>
        {levels.map((level) => {
        if(actualLeft==11 || actualLeft==-11){
          actualLeft=0;
        }
        else{
          if(flip){
            actualLeft=-11;
            flip=false;
          }
          else{
            actualLeft=11;
            flip=true;
          }
        }
        return (<Nivel idNivel={level.nivel.idNivel} left={`${actualLeft}vw`} />);})}
        
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
