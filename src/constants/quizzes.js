import { icons } from "../assets/icons";

export const quizzes = [
  {
    idQuiz: 0,
    pregunta: "¿Cual de estas es una inversión de alto riesgo?",
    tipo: 2, // con imagen
    opciones: [
      {
        texto: "Una letra del tesoro de USA",
        imagen: icons.letraTesoroIcon,
      },
      {
        texto: "Una acción de Tesla",
        imagen: icons.teslaIcon,
      },
      {
        texto: "Una propiedad",
        imagen: icons.casaIcon,
      },
    ],
    respuestaCorrecta: 1, // posicion en el array de opciones
  },
  {
    idQuiz: 1,
    pregunta:
      "¿Como procederías si el valor de una de tus acciones baja repentinamente?",
    tipo: 1, // multiple choice
    opciones: [
      "Retiro mi inversión por las dudas",
      "Evaluo el largo plazo y mantengo o retiro en base a eso",
      "Si bajó mucho, la retiro, si no, la mantengo",
    ],
    respuestaCorrecta: 1, // posicion en el array de opciones
  },
];
