import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Unidad.module.css";
import PressableButton from "../PressableButton/PressableButton";
import { icons } from "../../assets/icons";
import Nivel from "../Nivel/Nivel";
import { ip } from "../../constants/ip";
import Cookies from "universal-cookie";
import { coordenadasRuta } from "../../constants/quizzes";

function Unidad({ mostrarUnidad }) {
  const [persona, setPersona] = useState(null);
  //const [levels,setLevels]=useState([]);

  const cookie = new Cookies();

  const usuario = persona ? persona.usuario : null; //CAMBIAR CUANDO ESTÉ TERMINADO EL LOGIN (TODO!!)

  const [avoidLoop, setAvoidLoop] = useState(false);

  const handleGuia = (nroGuia) => {
    mostrarUnidad(nroGuia);
  };
  /* 
  
  async function fetchUsuario(){
    const idPersona = cookie.get("idPersona");
        await fetch(`http://localhost:8080/Persona/getPersona/${idPersona}`,
        {
          method:"GET",
          mode:"cors",
          headers:{
              "Content-Type":"application/json",
              "Accept-Encoding":"gzip, deflate, br"
          }
      })
      .then(r=> r.json())
      .then(d=> setPersona(d));
  }
  
  
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
      
      if(persona == null && !avoidLoop){
        fetchUsuario();
        setAvoidLoop(true);
      }
      if(persona!={} && avoidLoop){
        fetchUnidades();
        setAvoidLoop(false);
      }
    }
  ,[persona?persona:null]);
*/

  return (
    <div className={styles.container}>
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
          onClick={() => handleGuia(1)}
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
        {coordenadasRuta.map((item, index) => {
          return <Nivel colorFondo="#CE82FF" left={item.left} key={index} />;
        })}
      </div>

      {/* Unidad 2 */}
      <Seccion backgroundColor="#58CC02" marginTop="30px">
        {/* Seccion Heading */}
        <div className={styles.unidadInfo}>
          <h1 className={styles.unidadTitulo}>Unidad 2</h1>
          <span className={styles.unidadDescripcion}>
            Mente rica, mente pobre
          </span>
        </div>
        <PressableButton
          text="Guía"
          icon={icons.bookIcon}
          onClick={() => handleGuia(2)}
          buttonStyle={{
            backgroundColor: "#58CC02",
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
        {coordenadasRuta.map((item, index) => {
          return <Nivel colorFondo="#58CC02" left={item.left} key={index} />;
        })}
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
  background-color: ${(props) => props.backgroundColor || "#ce82ff"};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  color: #ffffff;
  margin-bottom: 20px;
`;
