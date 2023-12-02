import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Profile.module.css";
import Cookies from "universal-cookie";

import ProfiileView from "../../components/ProfileView/ProfileView";
function Profile() {
  document.title = "Finny - Profile";
  const cookie = new Cookies();
  React.useEffect(() => {
    const cookieGetted = cookie.get("idPersona");
    if (!cookieGetted) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <Header />

      <div className={styles.homeContainer}>
        {/* Navbar */}
        <Navbar />

        {/* Unidades */}
        <div className={styles.profileContainer}>
          <ProfiileView />
        </div>
      </div>
    </div>
  );
}

export default Profile;
