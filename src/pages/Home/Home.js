import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Unidad from "../../components/Unidad/Unidad";

function Home() {
  return (
    <div>
      <Header />

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
