import IntroLeccion from "../../IntroLeccion/IntroLeccion";
import { icons } from "../../../assets/icons";
import SubtituloLeccion from "../../Lecciones/SubtituloLeccion";
import TituloLeccion from "../../Lecciones/TituloLeccion";
import TextoLeccion from "../../Lecciones/TextoLeccion";
import TipContainer from "../../Lecciones/TipContainer";
import styled from "styled-components";
import InnerContainer from "../../Lecciones/InnerContainer";

const Leccion2 = () => {
  return (
    <>
      {/* Intro leccion */}
      <IntroLeccion
        personajeUnidadIcon={icons.warrenLeccion}
        tituloLeccion="Guia Unidad 1"
        descripcionLeccion="En la leccion anterior aprendimos como lo mas importante en el mundo de las inversiones es tener un portafolio diversificado, que nos salve de un suicidio financiero. Pero…¿a que se refiere? Y mas importante: ¿como podemos implementarlo?"
      />
      <TextoLeccion texto="Alguien una vez dijo que el all in es el camino mas cercano al suicidio financiero. Si nosotros no tenemos una correcta diversificacion de nuestro portafolio lo mas probable es que perdamos todo a pequeño, mediano o largo plazo." />
      {/* Seccion */}
      <TipContainer>
        <SubtituloLeccion subtitulo="Tip" />
        <TituloLeccion titulo="Nuestro perfil de riesgo" />
        <TextoLeccion texto="Antes de entrar de lleno al armado de portafolio, una de las cosas mas importantes a la hora de empezar a invertir es definir cual es nuestro perfil de riesgo. Veamos cuales hay y que caracteristicas los definen:" />
        <StyledContainer>
          <InnerContainer
            titulo="Conservador"
            texto={[
              "Prioriza seguridad",
              "Corto plazo",
              "Bajo riesgo",
              "Objetivo: Preservar capital",
            ]}
            img={icons.conservadorIcon}
          />
          <InnerContainer
            titulo="Moderado"
            texto={[
              "Equilibrio riesgo-rendimiento",
              "Diversificación",
              "Mediano plazo",
              "Tolerancia moderada al riesgo",
            ]}
            img={icons.moderadoIcon}
          />
          <InnerContainer
            titulo="Arriesgado"
            texto={[
              "Busca rendimientos altos",
              "Largo plazo",
              "Alta tolerancia al riesgo",
              "Activo en investigación",
            ]}
            img={icons.agresivoIcon}
          />
        </StyledContainer>
      </TipContainer>
      ;
    </>
  );
};

export default Leccion2;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
