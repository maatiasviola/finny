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
  const [levels,setLevels]=useState([]);
  const [ultimaUnidad,setUltimaUnidad]=useState(-1);
  const [ultimoIndice,setUltimoIndice]=useState(-1);

  const cookie = new Cookies();

  const usuario = persona ? persona.usuario : null; //CAMBIAR CUANDO ESTÉ TERMINADO EL LOGIN (TODO!!)

  const [avoidLoop, setAvoidLoop] = useState(false);

  const handleGuia = (nroGuia) => {
    mostrarUnidad(nroGuia);
  };

  var empiezoABloquear=-1;
  
  let actualLeft=11;
  let beforeLeft=0;
  let flip=false;
  
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
      indiceABloquear(await data.unidades);
    } catch (error) {
      console.log("Error en el fetch de las unidades");
      console.log(error);
    }
  }
  
  function indiceABloquear(unidades) {
    var ultimaUnidadLocal=ultimaUnidad;
    var ultimoIndiceLocal=ultimoIndice;
    
    
    unidades?.map((unidad, index) => {
      
      unidad.niveles.map((nivel,indexNivel) => {
        if (!nivel.hecho) {
          if (ultimaUnidadLocal == -1) {
            console.log("ULTIMO INDICE: "+indexNivel);
            console.log("ULTIMA UNIDAD: "+unidad.numero);
            ultimoIndiceLocal=indexNivel;
            ultimaUnidadLocal=unidad.numero;
            setUltimoIndice(indexNivel);
            setUltimaUnidad(unidad.numero);
          }
        }
      })

    });
  
    // Si la unidad actual es la unidad 1 y quieres desbloquear la unidad 2,
    // establece el indice de bloqueo al final de la unidad 1
    // if (unidad.numero === 1) {
    //   return lista.length; // Esto hará que todos los niveles de la unidad 1 estén desbloqueados
    // }
  
    return ultimoIndice + 1;
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


  return (
    <div className={styles.container}>
      {(levels) ? levels.map((unidad) => {return <div> <Seccion>
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
          onClick={() => handleGuia(unidad.numero)}
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
        {unidad.niveles.map((nivel, index) => {
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
        
        
          return <Nivel key={index} colorFondo={nivel.hecho ? "#58cc02" : "#CE82FF"} permitir= {(ultimaUnidad>unidad.numero)?true:((ultimaUnidad==unidad.numero)?((ultimoIndice>=index)?true:false):false)} nivelAJugar={nivel.juegos} idNivel={nivel.idNivel} left={`${actualLeft}vw`} />;
        })}
      </div>
      </div>}):null}
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
  margin-top: 20px;
`;
