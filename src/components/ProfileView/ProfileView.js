// ...

import React, { useState } from 'react';
import styles from "./ProfileView.module.css";
import PressableButton from '../../components/PressableButton/PressableButton';
import ImageWithText from '../../components/achievements/Logros';
import Cookies from 'universal-cookie';
import styleInput from "../StyledInput/StyledInput.module.css";
import StyledInput from '../StyledInput/StyledInput';

const ProfileView = () => {
    const [redirecting,setRedirecting] = useState(false);
    const [persona, setPersona] = useState({});
    const [personaForUpdate, setPersonaForUpdate] = useState({});
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const cookie = new Cookies();
    const [errorShow,setErrorShow] = useState(false);
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
      .then(d=> {setPersona(d); setEdad(d.edad); setNombre(d.nombre); setEmail(d.email); setPass(d.contrasenia);});
    },[])

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{position:"absolute", top:0,left:0, width:"100%",height:"100%",backgroundColor:"rgb(230, 230, 230,0.2)", display: (redirecting?"flex":"none"), justifyContent: "center", alignItems:"center"}}>
                <div style={{width: 400, height: 600, backgroundColor:"white", borderRadius:15, borderColor:"green", border: "1px solid green"}}>
                <div style={{width:"100%",height:"100%",display: "flex", justifyContent: "space-evenly", alignItems:"center", flexDirection:"column"}}>
                    <h1 style={{textAlign:"center", color:"black"}}>Editar Perfil</h1>
                    <h2>{(persona)?persona.usuario:""}</h2><br></br>
                    {(errorShow)?<h3>Error al actualizar los datos, reintente.</h3>:null}
                    <p>Nombre</p>
                    <input
                        className={styleInput.input2}
                        style={{borderColor:"black"}}
                        placeholder={"Nombre"}
                        value={nombre}
                        onChange={(e) => {setNombre(e.target.value);}}
                    />
                    <p>Edad</p>
                    <input
                        className={styleInput.input2}
                        style={{borderColor:"black"}}
                        placeholder={"Edad"}
                        value={edad}
                        onChange={(e) => {setEdad(e.target.value);}}
                    />
                    <p>Email</p>
                    <input
                        className={styleInput.input2}
                        style={{backgroundColor:"gray"}}
                        placeholder={"Email"}
                        value={email}
                        onChange={(e) => {setEmail(e.target.value);}}
                        disabled
                    />
                    <p>Contraseña</p>
                    <input
                        className={styleInput.input2}
                        style={{borderColor:"black"}}
                        placeholder={"Contraseña"}
                        value={pass}
                        onChange={(e) => {setPass(e.target.value);}}
                    />
                    <div style={{display:"flex", gap:10}}>
                        <PressableButton
                                text="CERRAR"
                                buttonStyle={{
                                    backgroundColor: '#DA0D0D',
                                    borderRadius: '8px',
                                    marginRight: '10px',
                                    width: 'fit-content',  
                                    fontSize: '12px',     
                                }}
                                textStyle={{
                                    color: '#fff',
                                }}
                                onClick={async () => {
                                    setErrorShow(false);
                                    setRedirecting(false);                                
                                }}
                            />
                        <PressableButton
                            text="Actualizar"
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
                            onClick={async () => {
                                const response = await fetch(`http://localhost:8080/Persona/Update`,
                                {
                                method:"PUT",
                                mode:"cors",
                                headers:{
                                    "Content-Type":"application/json",
                                    "Accept-Encoding":"gzip, deflate, br"
                                },
                                body: JSON.stringify({ usuario: persona.usuario, contrasenia: pass, edad:edad,nombre:nombre, email:email}) 
                                })
                                const status = await response.status;
                                if(status == 200){
                                    setErrorShow(false);
                                    setRedirecting(false);
                                    window.location.href = "/profile";
                                }
                                if (status == 400){
                                    setErrorShow(true);
                                }
                                
                            }}
                        />
                    </div>
                </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"flex-start"}}>
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
                
                                setRedirecting(!redirecting);
                            }}
                        />
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <h1>{(persona)?persona.nombre:""}</h1>
                    <p>{(persona)?persona.usuario:""}</p>
                </div>
                
                
            </div>
            
            
            <div style={{ borderTop: '1px solid #ccc', margin: '20px 0' }}></div>
            <div className={styles.profileContainer}>
                <div className={styles.profileText}>
                    <h2>Estadisticas</h2>
                    <div className={styles.recuadrosContainer}>
                        <div className={styles.recuadroEstadistica}>
                            <img src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1699114125/Vector_2_aqptul.png" alt="Foto fuego" />
                                <div>
                                <h4>0</h4>
                                <h4>  Rachá de días</h4>
                                </div>

                        </div>
                        <div className={styles.recuadroEstadistica}>
                            <img src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1699114129/Icon_wy1q9u.png" alt="Foto rayo" />
                            <div>
                                <h4>22</h4>
                                <h4>Xp Total</h4>

                            </div>

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
