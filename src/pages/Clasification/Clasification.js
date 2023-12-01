import React from "react";
import styles from "./Clasification.module.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ClasificationPage from "../../components/Clasification/Clasification.js";
function Clasification(){
    return(
        <div>
        <Header />
  
        <div className={styles.homeContainer}>
          {/* Navbar */}
          <Navbar />
  
          {/* Unidades */}
          <div className={styles.unidadesContainer}>
            <ClasificationPage/>
          </div>
        </div>
      </div>
    );
}
export default Clasification