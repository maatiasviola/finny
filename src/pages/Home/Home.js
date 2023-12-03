import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Unidad from "../../components/Unidad/Unidad";
import Chatbot from "../../components/Chatbot/Chatbot";
import Cookies from "universal-cookie";
import Unidad1 from "../../components/Unidad1/Unidad1";
import Unidad2 from "../../components/Unidad2/Unidad2";

function Home() {
  const [unidad, mostrarUnidad] = useState(0);

  let contenidoRenderizado;

  if (unidad === 1) {
    contenidoRenderizado = <Unidad1 mostrarUnidad={mostrarUnidad} />;
  } else if (unidad === 2) {
    contenidoRenderizado = <Unidad2 mostrarUnidad={mostrarUnidad} />;
  }
  else{
    contenidoRenderizado = (
      <div className={styles.unidadesContainer}>
        <Unidad mostrarUnidad={mostrarUnidad} />
      </div>
    );
  }
  const cookie = new Cookies();
  document.title = "Finny - Home";

  React.useEffect(() => {
    const cookieGetted = cookie.get("idPersona");
    if (!cookieGetted) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Chatbot chatbotStyle={{ position: "fixed" }} />

      <div className={styles.homeContainer}>
        {/* Navbar */}
        <Navbar />

        {contenidoRenderizado}
      </div>
    </div>
  );
}

export default Home;
