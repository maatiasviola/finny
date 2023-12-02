import React from "react";
import IntroLeccion from "../../IntroLeccion/IntroLeccion";
import { icons } from "../../../assets/icons";
import SubtituloLeccion from "../../Lecciones/SubtituloLeccion";
import TituloLeccion from "../../Lecciones/TituloLeccion";
import TextoLeccion from "../../Lecciones/TextoLeccion";
import styled from "styled-components";
import HorizontalContainer from "../../Lecciones/HorizontalContainer";
import LineDivider from "../../LineDivider/LineDivider";
import ImageTextContainer from "../../Lecciones/ImageTextContainer";
import Cuadrante from "../../Lecciones/Cuadrante";

const elementosCuadrante = [
  {
    title: "Liquidez y solvencia",
    description:
      "Capacidad de la empresa de pagar sus deudas en el corto y largo plazo",
    icon: icons.liquidezIcon,
  },
  {
    title: "Eficiencia",
    description: "Capacidad de la empresa de generar ingresos",
    icon: icons.eficienciaIcon,
  },
  {
    title: "Rentabilidad",
    description: "Capacidad de la empresa de generar ganacias",
    icon: icons.rentabilidadIcon,
  },
  {
    title: "Valuación",
    description:
      "Medir la empresa en relacion a otras empresas del mismo sector",
    icon: icons.valuacionIcon,
  },
];

const Leccion1 = () => {
  return (
    <>
      {/* Intro leccion */}
      <IntroLeccion
        personajeUnidadIcon={icons.warrenLeccion}
        tituloLeccion="Guia Unidad 2"
        descripcionLeccion="Cuando uno decide entrar al mundo de las inversiones hay 2 grandes familias, la de los analistas tecnicos y la de los analistas fundamentales. Dejame enseñarte en esta unidad que mirada nos puede aportar cada tipo de analisis y como sacar el maximo provecho de ambos."
      />
      {/* Leccion */}
      <SubtituloLeccion subtitulo="Conceptos clave" />
      <TituloLeccion titulo="Análisis técnico" />
      <TextoLeccion texto="Es el estudio de las velas, es el estudio de los movimientos del mercado para tomar mejores decisiones. Entre los objetivos principales de un analista tecnico encontramos:" />

      <StyledLessonContainer>
        <HorizontalContainer
          icon={icons.detectarTendenciaIcon}
          titulo="Detectar tendencias"
          descripcion="Entender cual es el sentido del mercado ¿va hacia arriba? ¿hacia abajo?"
        />
        <HorizontalContainer
          icon={icons.etfsIcon}
          titulo="ETFs"
          descripcion="Un ETF es como una canasta que incluye diferentes acciones, permitiéndote invertir en varias empresas a la vez de manera sencilla."
        />
        <HorizontalContainer
          icon={icons.detectarSoportesResistenciasIcon}
          titulo="Detectar soportes y resistencias"
          descripcion="Puntos clave que hacen que el precio suba o baje de esa zona"
        />
      </StyledLessonContainer>
      <LineDivider estiloPunteado={false} />

      {/* Seccion */}
      <TituloLeccion titulo="Analisis fundamental" />
      <ImageTextContainer
        rightImage={icons.fundamentalIcon}
        text="Es el analisis que estudia los fundamentos de aquello que vamos a comprar. Nos permite identificar si un activo tiene o no una base solida que prometa estabilidad y crecimiento futuro. Indica QUE comprar"
      />

      {/* Cuadrante */}
      <TituloLeccion titulo="4 aspectos para analizar una empresa fundamentalmente" />
      <Cuadrante elementos={elementosCuadrante} />
    </>
  );
};

export default Leccion1;

const StyledLessonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;
