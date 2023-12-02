import IntroLeccion from "../../IntroLeccion/IntroLeccion";
import { icons } from "../../../assets/icons";
import SubtituloLeccion from "../../Lecciones/SubtituloLeccion";
import TituloLeccion from "../../Lecciones/TituloLeccion";
import TextoLeccion from "../../Lecciones/TextoLeccion";
import TipContainer from "../../Lecciones/TipContainer";
import styled from "styled-components";
import InnerContainer from "../../Lecciones/InnerContainer";
import Cuadrante from "../../Lecciones/Cuadrante";
import HorizontalContainer from "../../Lecciones/HorizontalContainer";

const elementosCuadrante = [
  {
    title: "Plazo fijo",
    description:
      "Colocamos nuestro dinero en el banco por un tiempo determinado para que, concluido ese tiempo, el banco nos devuelva el dinero invertido mas los intereses generados.",
    icon: icons.plazoIcon,
  },
  {
    title: "Staking de criptomonedas",
    description:
      "Proceso por el cual nos retienen una cantidad determinada de criptomonedas a cambio de obtener una comisón.",
    icon: icons.stakingIcon,
  },
  {
    title: "Obligaciones Negociables",
    description:
      "Bonos emitidos por empresas que nosotros podemos comprar y estas se comprometen a pagarnos un interes por un tiempo determinado.",
    icon: icons.onIcon,
  },
  {
    title: "Bonos",
    description:
      "Deuda emitida por instituciones publicas para financiar sus actividades que nosotros podemos adquirir y a cambio recibir el pago de intereses.",
    icon: icons.bonoIcon,
  },
];

const Leccion3 = () => {
  return (
    <>
      {/* Intro leccion */}
      <IntroLeccion
        personajeUnidadIcon={icons.warrenLeccion}
        tituloLeccion="Guia Unidad 1"
        descripcionLeccion="Ahora que conocemos los distintos perfiles de riesgo que existen, estamos en condiciones de empezar a segmentar los activos que existen entre renta fija y renta variable.
        En esta leccion, vamos a entender cuales son los mejores instrumentos para cada perfil."
      />
      {/* Seccion */}
      <TituloLeccion titulo="Elementos de renta fija" />
      <Cuadrante elementos={elementosCuadrante} />

      {/* Seccion */}
      <TituloLeccion titulo="Elementos de renta variable" />
      <StyledLessonContainer>
        <HorizontalContainer
          icon={icons.accionesIcon}
          titulo="Acciones"
          descripcion="Una acción es como una pequeña porción de propiedad en una empresa. Si tienes acciones, eres dueño de una parte de esa empresa y puedes ganar dinero cuando le va bien."
        />
        <HorizontalContainer
          icon={icons.etfsIcon}
          titulo="ETFs"
          descripcion="Un ETF es como una canasta que incluye diferentes acciones, permitiéndote invertir en varias empresas a la vez de manera sencilla."
        />
        <HorizontalContainer
          icon={icons.criptomonedasIcon}
          titulo="Criptomonedas"
          descripcion="Las criptomonedas son monedas digitales descentralizadas que puedes usar para intercambiar bienes y servicios en línea, y su valor puede cambiar bastante rápido."
        />
      </StyledLessonContainer>
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
