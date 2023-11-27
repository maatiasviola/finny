import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../Home/Home.module.css";


import ProfiileView from "../../components/ProfileView/ProfileView";
function Profile() {
  return (
    <div>
      <Header />

      <div className={styles.homeContainer}>
        {/* Navbar */}
        <Navbar />

        {/* Unidades */}
        <div className={styles.unidadesContainer}>
          <ProfiileView />
        </div>
      </div>
    </div>
  );
}

export default Profile;
