import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Unidad.module.css";
import PressableButton from "../PressableButton/PressableButton";
import { icons } from "../../assets/icons";
import Nivel from "../Nivel/Nivel";
import { ip } from "../../constants/ip";

function Unidad() {

  const [levels,setLevels]=useState([]);

  const usuario="juancito"; //CAMBIAR CUANDO ESTÉ TERMINADO EL LOGIN (TODO!!)

  async function fetchUnidades(){
    try {
      console.log("Fetch unidades");

      const response= await fetch(
        ip+"/Home?usuarioEmail="+usuario,{
          method:"GET",
          mode:"cors"
        }
      );
      const data= await response.json();
      setLevels(await data.unidades);
    } catch (error) {
      console.log("Error en el fetch de las unidades");
      console.log(error);
    }
  }

  React.useEffect(
    () => {
      fetchUnidades();
    }
  ,[]);


  let actualLeft=11;
  let beforeLeft=0;
  let actualTop=-70;
  let flip=false;
  let drawSvg=true;
  let lineHeight=70;

  console.log("Niveles");
  console.log(levels);
  let numeroNivel=0;

  return (
    <div>
      {levels?.map((unidad,index) => {
        return (
      <div>
      <Seccion>
        {/* Seccion Heading */}
        <div className={styles.unidadInfo}>
          <h1 className={styles.unidadTitulo}>Unidad {unidad.numero}</h1>
          <span className={styles.unidadDescripcion}>
            {unidad.subtitulo}
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
        {unidad.niveles.map((level,index) => {
        beforeLeft=actualLeft;
        actualTop+=lineHeight;
        if(index<unidad.niveles.length-2){
          drawSvg=true;
        }
        else{
          drawSvg=false;
        }
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

        numeroNivel++;

          return (<div><Nivel key={index} colorFondo={level.hecho ? "#58cc02" : "#CE82FF"} nivelAJugar={level.juegos} idNivel={numeroNivel} left={`${actualLeft}vw`} /></div>);

        })}
       

      </div>
      </div>)
      })
      }

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
