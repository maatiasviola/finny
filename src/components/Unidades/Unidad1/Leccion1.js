import IntroLeccion from "../../IntroLeccion/IntroLeccion";
import { icons } from "../../../assets/icons";
import SubtituloLeccion from "../../Lecciones/SubtituloLeccion";
import TituloLeccion from "../../Lecciones/TituloLeccion";
import TextoLeccion from "../../Lecciones/TextoLeccion";
import styled from "styled-components";
import HorizontalContainer from "../../Lecciones/HorizontalContainer";
import ImageTextContainer from "../../Lecciones/ImageTextContainer";
import BulletLeccion from "../../Lecciones/BulletLeccion";
import TipContainer from "../../Lecciones/TipContainer";

const Leccion1 = () => {
  return (
    <>
      {/* Intro leccion */}
      <IntroLeccion
        personajeUnidadIcon={icons.warrenLeccion}
        tituloLeccion="Guia Unidad 1"
        descripcionLeccion="Aprendé los conceptos básicos que tenemos que tener en cuenta a la hora de empezar en el mundo de las inversiones, conceptos como gasto, ahorro, inversión, colchón financiero, riesgos, plazo fijo, y un largo etc"
      />
      {/* Leccion */}
      <SubtituloLeccion subtitulo="Conceptos clave" />
      <TituloLeccion titulo="La inversión nace del ahorro, NO al revés" />
      <TextoLeccion texto="Ya sea que lo hayamos ganado trabajando, vendiendo cosas que no necesitamos o guardando el sobre con plata que nuestra abuela 👵siempre nos da en nuestro cumpleaños, una vez nosotros tenemos ese ingreso existen 3 cosas que podemos hacer con el:" />
      <StyledLessonContainer>
        <HorizontalContainer
          icon={icons.gastarIcon}
          titulo="Gastarlo"
          descripcion="¡Podemos usarlo para consumir otros productos o servicios!"
        />
        <HorizontalContainer
          icon={icons.ahorrarIcon}
          titulo="Ahorrarlo"
          descripcion="Sacrificamos el consumo de hoy para un consumo futuro"
        />
        <HorizontalContainer
          icon={icons.invertirIcon}
          titulo="Invertirlo"
          descripcion="Invertimos nuestros ahorros para que este vaya generando intereses"
        />
      </StyledLessonContainer>
      {/* Seccion */}
      <TituloLeccion titulo="Lo que nadie te cuenta del ahorro" />
      <ImageTextContainer
        rightImage={icons.objetivosIcon}
        text="Irnos de viaje ✈️, comprar una casa 🏠 o ir a ver a nuestro artista favorito 🎤, todos tenemos una idea de que es aquello que deseamos hacer con nuestro dinero.|Para la mayoría de personas, las opciones de ahorro más comunes tienen que ver con cajas de seguridad, colchones, cajones en fin, con tener el dinero bien guardado y quietito en un lugar.|Y ojo, no estoy hablando de que este tipo de ahorro esté mal o tenga algún problema… ¿o sí?"
      />
      {/* Seccion */}
      <TituloLeccion titulo="El costo de oportunidad" />
      <ImageTextContainer
        leftImage={icons.costoOportunidadIcon}
        text="Con el ahorro resguardado estas perdiendo plata, estas perdiendo lo que se llama el costo de oportunidad. 

    Es el coste que vos estas pagando por no tomar la oportunidad que hay disponible en el mercado. Ahora…
    "
      />
      {/* Seccion */}
      <TituloLeccion titulo="¿En que invertimos?" />
      <TextoLeccion texto="En el mundo de las inversiones vos podes invertir tanto en renta fija como en renta variable, te cuento un poco mas:" />
      <BulletLeccion
        titulo="Renta fija"
        texto="Conjunto de instrumentos en los que sabemos"
        opciones={[
          "cuanto vas a ganar",
          "en que plazo",
          "plazo fijo, cauciones, obligaciones negociables",
        ]}
      />
      <BulletLeccion
        titulo="Renta variable"
        texto="Conjunto de instrumentos en los que no sabemos"
        opciones={[
          "cual es su rentabilidad",
          "no tiene un tiempo de finalizacion",
          "acciones, ETFs, criptomonedas",
        ]}
      />
      {/* Seccion */}
      <TipContainer>
        <SubtituloLeccion subtitulo="Tip" />
        <TituloLeccion titulo="La mejor inversion de todas 🤑 🤑 🤑" />
        <TextoLeccion
          texto="Ahora que tengo tu atencion: no existe. No hay un instrumento de
      inversion mejor que otro.|Lo mas importante en el mundo de las
      inversiones es tener un portafolio diversificado. La diversificacion
      hace que nosotros no nos suicidemos a los 2 meses que arrancamos a
      invertir.|Por ende, es importante que aprendamos a combinar ambos
      mundos. Y de eso se tratara el proximo capitulo."
        />
      </TipContainer>
      ;
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
