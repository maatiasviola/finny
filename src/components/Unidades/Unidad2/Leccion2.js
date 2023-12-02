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
import TipContainer from "../../Lecciones/TipContainer";
import InnerContainer from "../../Lecciones/InnerContainer";

const Leccion2 = () => {
  return (
    <>
      {/* Intro leccion */}
      <IntroLeccion
        personajeUnidadIcon={icons.warrenLeccion}
        tituloLeccion="Guia Unidad 2"
        descripcionLeccion="Si queres empezar a invertir, queres empezar en el trading o queres armarte tu portafolio a largo plazo hay algo que es el ABC, hay algo que no podes no saberlo para poder tomar mejores decisiones en el mercado financiero."
      />
      {/* Leccion */}
      <SubtituloLeccion subtitulo="Conceptos clave" />
      <TituloLeccion titulo="El ABC de las inversiones" />
      <ImageTextContainer
        rightImage={icons.warren1}
        text="Cuando nosotros analizamos un activo es muy importante establecer soportes y resistencias. Son una de las herramientas mas importantes dentro del analisis tecnico para poder determinar cuando es el momento clave para poder comprar o vender una accion."
      />

      {/* Leccion */}
      <TituloLeccion titulo="Soportes" />
      <ImageTextContainer
        leftImage={icons.soporteIcon}
        text="Es todo nivel del precio debajo de la cotizacion actual. Cuando el precio se encuentra en un soporte,se lo considera una oportunidad de compra al estar barato."
      />

      {/* Leccion */}
      <TituloLeccion titulo="Resistencias" />
      <ImageTextContainer
        rightImage={icons.resistenciaIcon}
        text="Es todo nivel del precio por encima de la cotizacion actual. Es una zona del precio considerada cara y por lo tanto representa una oportunidad de venta."
      />

      {/* Seccion */}
      <TipContainer>
        <SubtituloLeccion subtitulo="Tip" />
        <TituloLeccion titulo="El mood del mercado" />
        <TextoLeccion
          texto="Algo que tambien es muy importante tener en cuenta cuando analizamos un activo es la tendencia que esta esta siguiendo. Esta, no es mas que la direccion en la que se esta moviendo nuestro activo durante un intervalo de tiempo determinado.

Siempre tenemos 3 tipos de tendencias:"
        />
        <StyledContainer>
          <InnerContainer
            titulo="Tendencia alcista"
            texto={[
              "Aumento sostenido del precio",
              "Sentimiento de optimismo y confianza",
              "Conocido como Bull Market",
            ]}
            img={icons.alcistaIcon}
          />
          <InnerContainer
            titulo="Tendencia bajista"
            texto={[
              "Descenso sostenido del precio",
              "Aparecen el pesimismo y el miedo",
              "Conocido como Bear Market",
            ]}
            img={icons.bajistaIcon}
          />
          <InnerContainer
            titulo="Tendencia lateral"
            texto={[
              "Ni alcista ni bajista",
              "Oscilación del precio",
              "Rentabilidad baja",
            ]}
            img={icons.lateralIcon}
          />
        </StyledContainer>
      </TipContainer>
    </>
  );
};

export default Leccion2;

const StyledLessonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
