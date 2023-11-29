import React, { useState } from "react";
import styles from "./Header.module.css";
import { icons } from "../../assets/icons";
import PressableButton from '../../components/PressableButton/PressableButton';
import Cookies from "universal-cookie";
function Header() {
  const [redirecting, setRedirecting] = useState(false);
  return (
    <div className={styles.header}>
      {/* Logo */}
      <img src={icons.finnyIcon} alt="finny" className={styles.logo} />

      {/* Icons */}
      <div className={styles.iconsContainer}>
        {/* Racha */}
        <div className={styles.singleIconContainer}>
          <img className={styles.icon} src={icons.fireIcon} alt="Racha" />
          <p className={styles.fireText}>1</p>
        </div>

        {/* Super */}
        <div className={styles.singleIconContainer}>
          <img className={styles.icon} src={icons.superIcon} alt="Super" />
          <p className={styles.superText}>Ir Super</p>
        </div>

        {/* Avatar */}
        <img className={styles.avatar} src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1699113659/Avatar_jcqvt9.png" alt="Avatar" onClick={()=> {setRedirecting(!redirecting); setTimeout(()=>{setRedirecting(false)},5000)}}/>
      
        <div style={{position:"absolute",top:30,right:10, width:"200px",height:"220px",backgroundColor:"rgb(230, 230, 230,0.2)", display: (redirecting?"flex":"none"), justifyContent: "center", alignItems:"center"}}>
          <div style={{width: 200, height: 150, backgroundColor:"white", borderRadius:15, borderColor:"gray", border: "1px solid green"}}>
            <div style={{width:"100%",height:"100%",display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
            <PressableButton
                text="Mi Perfil"
                buttonStyle={{
                    backgroundColor: '#007bff',
                    borderRadius: '8px',
                    marginRight: '10px',
                    width: 'fit-content',  
                    fontSize: '12px',     
                }}
                textStyle={{
                    color: '#fff',
                }}
                onClick={() => {
    
                  window.location.href = "/profile";
                }}
            /> <br></br>
            <PressableButton
                text="Cerrar Sesion"
                buttonStyle={{
                    backgroundColor: '#007bff',
                    borderRadius: '8px',
                    marginRight: '10px',
                    width: 'fit-content',  
                    fontSize: '12px',     
                }}
                textStyle={{
                    color: '#fff',
                }}
                onClick={() => {
                  const cookie = new Cookies();
                  cookie.remove("idPersona");
                  window.location.href = "/";
                }}
            />
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
