import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Unidad from "../../components/Unidad/Unidad";
import Chatbot from "../../components/Chatbot/Chatbot";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Chatbot chatbotStyle={{ position: "fixed" }} />

      <div className={styles.homeContainer}>
        {/* Navbar */}
        <Navbar />

        {/* Unidades */}
        <div className={styles.unidadesContainer}>
          <Unidad />
        </div>
      </div>
    </div>
  );
}

export default Home;
