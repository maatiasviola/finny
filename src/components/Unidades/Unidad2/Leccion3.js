import React from "react";
import IntroLeccion from "../../IntroLeccion/IntroLeccion";
import { icons } from "../../../assets/icons";
import SubtituloLeccion from "../../Lecciones/SubtituloLeccion";
import TituloLeccion from "../../Lecciones/TituloLeccion";
import TextoLeccion from "../../Lecciones/TextoLeccion";
import styled from "styled-components";
import ImageTextContainer from "../../Lecciones/ImageTextContainer";
import TipContainer from "../../Lecciones/TipContainer";
import InnerContainer from "../../Lecciones/InnerContainer";

const Leccion3 = () => {
  return (
    <>
      {/* Intro leccion */}
      <IntroLeccion
        personajeUnidadIcon={icons.warrenLeccion}
        tituloLeccion="Guia Unidad 2"
        descripcionLeccion="“Es bueno aprender de tus errores, pero mejor es aprender de los errores de los demás”

        A lo largo de los años dentro del mercado cometí muchos errores y aciertos, en esta unidad te voy a contar las unicas 6 reglas que necesitas saber para ser un inversor de exito y batir el mercado"
      />
      {/* Leccion */}
      <SubtituloLeccion subtitulo="Conceptos clave" />
      <TituloLeccion titulo="Invierte en lo que entiendes" />
      <ImageTextContainer
        rightImage={icons.warren1}
        text="Nunca pongas tu dinero en algo que no comprendas. Si no puedes explicar la inversión a un niño de manera simple, es posible que estés jugando un juego que no entiendes."
      />

      {/* Leccion */}
      <TituloLeccion titulo="La paciencia es tu mejor amiga" />
      <ImageTextContainer
        leftImage={icons.warren2}
        text="Las mejores inversiones a menudo requieren tiempo para madurar. No te preocupes por los altibajos diarios del mercado; mantén la calma y piensa a largo plazo."
      />

      {/* Leccion */}
      <TituloLeccion titulo="Compra acciones como si fueran pizzas" />
      <ImageTextContainer
        rightImage={icons.warren3}
        text="Si te gusta algo y su precio es razonable, cómpralo. No te preocupes por los movimientos a corto plazo. Si te gustan las pizzas de una cadena, ¿no seguirías comprándolas si su precio bajara temporalmente?"
      />

      {/* Leccion */}
      <TituloLeccion titulo="La calidad es clave" />
      <ImageTextContainer
        leftImage={icons.warren4}
        text="Enfócate en compañías sólidas con ventajas competitivas a largo plazo. Busca aquellas con equipos de gestión fuertes y modelos de negocio sencillos y robustos."
      />

      {/* Leccion */}
      <TituloLeccion titulo="No sigas la multitud ciegamente" />
      <ImageTextContainer
        rightImage={icons.warren5}
        text="La opinión de la multitud no siempre es la correcta. A veces, las mejores oportunidades se encuentran yendo en contra de la corriente. Mantén tu independencia y piensa por ti mismo."
      />

      {/* Leccion */}
      <TituloLeccion titulo="El riesgo viene de no saber lo que estás haciendo" />
      <ImageTextContainer
        leftImage={icons.warren6}
        text="No temas al riesgo, teme a la ignorancia. Investiga a fondo antes de tomar decisiones y mantente siempre informado sobre tus inversiones."
      />

      {/* Leccion */}
      <SubtituloLeccion subtitulo="Conclusión" />
      <TituloLeccion titulo="Recuerda chico..." />
      <ImageTextContainer
        leftImage={icons.warren7}
        text="El camino hacia la riqueza a menudo es lento y constante. No busques ganancias rápidas, busca inversiones sólidas a largo plazo. ¡Buena suerte en tu viaje financiero!"
      />
    </>
  );
};

export default Leccion3;

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
