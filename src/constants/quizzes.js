import { icons } from "../assets/icons";

export const quizzes = [
  {
    idQuiz: 0,
    pregunta: "¿Cual de estas es una inversión de alto riesgo?",
    tipo: 2, // con imagen
    opciones: [
      {
        idOpcion: 0,
        texto: "Una letra del tesoro de USA",
        imagen: icons.letraTesoroIcon,
      },
      {
        idOpcion: 1,
        texto: "Una acción de Tesla",
        imagen: icons.teslaIcon,
      },
      {
        idOpcion: 2,
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
      {
        idOpcion: 0,
        texto: "Retiro mi inversión por las dudas",
      },
      {
        idOpcion: 1,
        texto: "Evaluo el largo plazo y mantengo o retiro en base a eso",
      },
      {
        idOpcion: 2,
        texto: "Si bajó mucho, la retiro, si no, la mantengo",
      },
    ],
    respuestaCorrecta: 1, // posicion en el array de opciones
  },
  {
    idQuiz: 2,
    pregunta: "La inversión nace del ahoroo, NO al revés",
    tipo: 1, // multiple choice
    opciones: [
      {
        idOpcion: 0,
        texto: "Verdadero",
      },
      {
        idOpcion: 1,
        texto: "Falso",
      },
    ],
    respuestaCorrecta: 0, // posicion en el array de opciones
  },
  {
    idQuiz: 3,
    pregunta: "¿Qué podemos hacer con nuestro dinero?",
    tipo: 1, // multiple choice
    opciones: [
      {
        idOpcion: 0,
        texto: "Gastarlo",
      },
      {
        idOpcion: 1,
        texto: "Ahorrarlo",
      },
      {
        idOpcion: 2,
        texto: "Invertirlo",
      },
      {
        idOpcion: 3,
        texto: "Todas son correctas",
      },
    ],
    respuestaCorrecta: 3, // posicion en el array de opciones
  },
  {
    idQuiz: 4,
    pregunta: "¿Cual no es un ejemplo de ahorro resguardado?",
    tipo: 2, // con imagen
    opciones: [
      {
        idOpcion: 0,
        texto: "Dinero en caja fuerte",
        imagen: icons.cajaFuerteIcon,
      },
      {
        idOpcion: 1,
        texto: "Dolares debajo del colchón",
        imagen: icons.colchonUSDIcon,
      },
      {
        idOpcion: 2,
        texto: "Una acción de Coca Cola",
        imagen: icons.cocaColaIcon,
      },
    ],
    respuestaCorrecta: 2, // posicion en el array de opciones
  },
  {
    idQuiz: 5,
    pregunta:
      "¿Cuál de estas no es una caracteristica de invertir en renta variable?",
    tipo: 1, // multiple choice
    opciones: [
      {
        idOpcion: 0,
        texto: "No sabemos cual es su rentabilidad",
      },
      {
        idOpcion: 1,
        texto: "No tiene un tiempo de finalizacion",
      },
      {
        idOpcion: 2,
        texto: "Nos asegura un 7% anual",
      },
    ],

    respuestaCorrecta: 2, // posicion en el array de opciones
  },
  {
    idQuiz: 6,
    pregunta: "¡Marca el instrumento de renta variable!",
    tipo: 2, // con imagen
    opciones: [
      {
        idOpcion: 0,
        texto: "Plazo Fijo en el Banco",
        imagen: icons.plazoFijoIcon,
      },
      {
        idOpcion: 1,
        texto: "Bitcoin",
        imagen: icons.bitcoinIcon,
      },
      {
        idOpcion: 2,
        texto: "Bonos de empresa",
        imagen: icons.bonosIcon,
      },
    ],
    respuestaCorrecta: 1, // posicion en el array de opciones
  },
  {
    idQuiz: 7,
    pregunta: "¿Qué NO hace el análisis técnico?",
    tipo: 2, // con imagen
    opciones: [
      {
        idOpcion: 0,
        texto: "Estudio las velas japonesas",
        imagen: icons.dojiIcon,
      },
      {
        idOpcion: 1,
        texto: "Detectar tendencias de mercado",
        imagen: icons.tendenciaIcon,
      },
      {
        idOpcion: 2,
        texto: "Estudiar los fundamentos de una empresa",
        imagen: icons.analisisFundamentalIcon,
      },
    ],
    respuestaCorrecta: 2, // posicion en el array de opciones
  },
  {
    idQuiz: 8,
    pregunta: "El análisis técnico nos dice...",
    tipo: 1, // multiple choice
    opciones: [
      {
        idOpcion: 0,
        texto: "Que comprar",
      },
      {
        idOpcion: 1,
        texto: "Cuando comprar",
      },
      {
        idOpcion: 2,
        texto: "Cuanto comprar",
      },
    ],
    respuestaCorrecta: 1, // posicion en el array de opciones
  },
];

export const coordenadasRuta = [
  {
    id: 1,
    left: "0",
    icono: icons.starIcon,
  },
  {
    id: 2,
    left: "-50px",
    icono: icons.starIcon,
  },
  {
    id: 3,
    left: "50px",
    icono: icons.starIcon,
  },
];

export const logros = [
  {
    idLogro: 0,
    titulo: "Incendio forestal",
    descripcion: "Alcanzá una racha de 3 dias",
    icon: icons.logro1,
  },
  {
    idLogro: 1,
    titulo: "Sabio",
    descripcion: "Obtené 100 XP",
    icon: icons.logro2,
  },
  {
    idLogro: 2,
    titulo: "Erudito",
    descripcion: "Termina tu primer modulo",
    icon: icons.logro3,
  },
];

export const amigos = [
  {
    idAmigo: 0,
    titulo: "Encontrá amigos",
    descripcion: "Busca a otros alumnos",
    icon: icons.searchIcon,
  },
  {
    idAmigo: 1,
    titulo: "Invitá amigos",
    descripcion: "¡Y diviertánse aprendiendo con Finny!",
    icon: icons.warrenLeccion,
  },
];
