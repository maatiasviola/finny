import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../Home/Home.module.css";
import Cookies from "universal-cookie";

import ProfiileView from "../../components/ProfileView/ProfileView";
function Profile() {
  const cookie = new Cookies();
  React.useEffect(()=>{
    const cookieGetted = cookie.get("idPersona");
    if(!cookieGetted){
      window.location.href = "/";
    }
  },[]);
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
