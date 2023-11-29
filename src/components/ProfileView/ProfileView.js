// ...

import React, { useState } from 'react';
import styles from "./ProfileView.module.css";
import PressableButton from '../../components/PressableButton/PressableButton';
import ImageWithText from '../../components/achievements/Logros';
import Cookies from 'universal-cookie';

const ProfileView = () => {
    const [persona, setPersona] = useState({});
    const cookie = new Cookies();
    React.useEffect(()=>{
        const idPersona = cookie.get("idPersona");
        fetch(`http://localhost:8080/Persona/getPersona/${idPersona}`,
        {
          method:"GET",
          mode:"cors",
          headers:{
              "Content-Type":"application/json",
              "Accept-Encoding":"gzip, deflate, br"
          }
      })
      .then(r=>r.json())
      .then(d=> setPersona(d));
    },[])

    console.log(persona);
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <h1>{(persona)?persona.nombre:""}</h1>
                    <p>{(persona)?persona.usuario:""}</p>
                </div>
                
                <div className={styles.userInfo}>
                    <div className={styles.userImage}>
                        <img src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1699113659/Avatar_jcqvt9.png" alt="Foto de perfil" className={styles.profileImage} />
                    </div>
                    <div className={styles.userInfoText}>

                    <PressableButton
                            text="Editar Perfil"
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
                
                                console.log('Botón "Editar" presionado');
                            }}
                        />
                    </div>
                </div>
            </div>
            
            
            <div style={{ borderTop: '1px solid #ccc', margin: '20px 0' }}></div>
            <div className={styles.profileContainer}>
                <div className={styles.profileText}>
                    <h2>Estadisticas</h2>
                    <div className={styles.recuadrosContainer}>
                        <div className={styles.recuadro}>
                            <img src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1699114125/Vector_2_aqptul.png" alt="Foto fuego" />
                            <h4>0 Rachá de días</h4>
                        </div>
                        <div className={styles.recuadro}>
                            <img src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1699114129/Icon_wy1q9u.png" alt="Foto rayo" />
                            <h4> 22 Xp Total</h4>
                        </div>
                    </div>
                    <h3>Logros</h3>
                    <div className={styles.grayBorder}>
                      <ImageWithText
                        imageUrl="https://res.cloudinary.com/dgvlsnajj/image/upload/v1701045117/IncendioForestal_q3vfrc.png"
                        text="Texto del logro"
                        achievementName="Incendio Forestal"
                        achievementProgress={25}  
                        streakText="Alcanza una racha de 3 días"
                      />
                    </div>

                    <div className={`${styles.grayBorder} grayBorder`}>
                      <ImageWithText
                        imageUrl="https://res.cloudinary.com/dgvlsnajj/image/upload/v1701045117/Sabio_keugpt.png"
                        text="Texto del logro"
                        achievementName="Sabio"
                        achievementProgress={75} 
                        streakText="Obtene 100 xp"
                      />
                    </div>

                    <div className={`${styles.grayBorder} grayBorder`}>
                      <ImageWithText
                        imageUrl="https://res.cloudinary.com/dgvlsnajj/image/upload/v1701045117/Erudito_u9w1lh.png"
                        text="Texto del logro"
                        achievementName="Erudito"
                        achievementProgress={50}  
                        streakText="Termina tu primer modelo"
                      />
                    </div>
                    <p className={`${styles.grayBorder} grayBorder`}>
                      Ver todos 
                    </p>
                </div>
                <div>

                <div>

                    <div className={styles.statsItem}>
                        <h3>Amigos</h3>
                    </div>

                    <div className={styles.recuadro}>
                        <img src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1701044349/foto_icon_ipp3vq.png" alt="Encontrar Amigos" />
                        <h4>Encontra Amigos</h4>
                        <p>Busca a otros alumnos</p>
                    </div>

                    <div className={styles.recuadro}>
                        <img src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1701044349/foto_lupa_aeefxj.png" alt="Invitar Amigos" />
                        <h4>Invita Amigos</h4>
                        <p>Contale a tus amigos que aprender con Finny es gratis y divertido.</p>
                    </div>
                </div>

                </div>
            </div>


        </div>
    );
}

export default ProfileView;
