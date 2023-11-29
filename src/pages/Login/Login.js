import React, { useState } from "react";
import StyledInput from "../../components/StyledInput/StyledInput";
import styles from "./Login.module.css";
import PressableButton from "../../components/PressableButton/PressableButton";
import LineDivider from "../../components/LineDivider/LineDivider";
import { icons } from "../../assets/icons";
import Cookies from 'universal-cookie';

function Login() {
  /* Cookies */
  const cookie = new Cookies();
  /* Modo */
  const [mode, setMode] = useState("login");

  /* Inputs */
  const [edad, setEdad] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [redirecting, setRedirecting] = useState(false);
  document.title = "Finny - Login";
  React.useEffect(()=>{
    if(cookie.get("idPersona")){
      
      window.location.href = "/home";
    }
  },[])
  /* Manejo de clicks */
  const handleMode = () => {
    mode === "login" ? setMode("registro") : setMode("login");
  };

  const handleLogin = async () => {

    if(user != "" && password != "" && email != ""){
      const response = await fetch("http://localhost:8080/Persona/Login",
        {
          method:"POST",
          mode:"cors",
          headers:{
              "Content-Type":"application/json",
              "Accept-Encoding":"gzip, deflate, br"
          },
          body: JSON.stringify({ usuario: user, email: email, contrasenia: password})  
      }).catch(e=>console.log(e));
      const status = await response.status;
      const idPersona = await response.json();
      if (status == 200){
        cookie.set("idPersona",idPersona);
        // console.log(cookie.get("idPersona"))
        setRedirecting(true);
        setTimeout(()=>{
          setRedirecting(false);
          window.location.href = "/home";
        }, 5000);
      } 
      
    }

    

    
  };

  const handleRegistro = async () => {
    if(user != "" && password != "" && email != "" && nombre != "" && edad>0){
      const response = await fetch("http://localhost:8080/Persona/Registro",
        {
          method:"POST",
          mode:"cors",
          headers:{
              "Content-Type":"application/json",
              "Accept-Encoding":"gzip, deflate, br"
          },
          body: JSON.stringify({ usuario: user, contrasenia: password, edad:edad,nombre:nombre, email:email})  
      }).catch(e=>console.log(e));
      const status = await response.status;
      const idPersona = await response.json();
      if (status == 200){
        cookie.set("idPersona",idPersona);
        // console.log(cookie.get("idPersona"))
        setRedirecting(true);
        setTimeout(()=>{
          setRedirecting(false);
          window.location.href = "/home";
        }, 5000);
      }
      
    }
  };

  return (
    
    <div className={styles.container}>
      <div style={{position:"absolute", width:"100%",height:"100%",backgroundColor:"rgb(230, 230, 230,0.2)", display: (redirecting?"flex":"none"), justifyContent: "center", alignItems:"center"}}>
        <div style={{width: 400, height: 200, backgroundColor:"white", borderRadius:15, borderColor:"green", border: "1px solid green"}}>
          <div style={{width:"100%",height:"100%",display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
            <h2 style={{textAlign:"center", color:"black"}}>Logueo satisfactorio</h2><br></br>
            <h4 style={{textAlign:"center", color:"black"}}>redirigiendote a la home...</h4>
          </div>
        </div>
      </div>
      <PressableButton
        text={mode === "login" ? "Registro" : "Ingresar"}
        onClick={handleMode}
        buttonStyle={{
          position: "absolute",
          right: "30px",
          top: "30px",
          backgroundColor: "#ffffff",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#e5e5e5",
          boxShadow: "0px 4px 0px 0px #e5e5e5",
        }}
        textStyle={{
          color: "#42c62f",
        }}
      />
      <div className={styles.loginContainer}>
        <h3 className={styles.loginTitle}>
          {mode === "login" ? "Ingresar" : "Crea tu perfil"}
        </h3>

        {mode === "registro" && (
          <>
            <StyledInput placeholder="Edad" value={edad} setValue={setEdad} />
            <StyledInput
              placeholder="Nombre (opcional)"
              value={nombre}
              setValue={setNombre}
            />
          </>
        )}

        <StyledInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <StyledInput
          placeholder="Usuario"
          value={user}
          setValue={setUser}
        />
        <StyledInput
          placeholder="Contraseña"
          value={password}
          setValue={setPassword}
        />

        <PressableButton
          text={mode === "login" ? "Ingresar" : "Crear cuenta"}
          onClick={mode === "login" ? handleLogin : handleRegistro}
          buttonStyle={{
            marginTop: "12px",
            width: "100%",
          }}
        />

        {/* Divider */}
        <LineDivider />

        {/* Facebook & Google */}

        <div className={styles.facebookGoogleButtons}>
          <PressableButton
            text="Facebook"
            icon={icons.facebookIcon}
            buttonStyle={{
              width: "100%",
              backgroundColor: "#ffffff",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#e5e5e5",
              boxShadow: "0px 4px 0px 0px #e5e5e5",
            }}
            textStyle={{
              color: "#3b5998",
              marginLeft: "10px",
            }}
          />

          <PressableButton
            text="Google"
            icon={icons.googleIcon}
            buttonStyle={{
              width: "100%",
              backgroundColor: "#ffffff",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#e5e5e5",
              boxShadow: "0px 4px 0px 0px #e5e5e5",
            }}
            textStyle={{
              color: "#4285f4",
              marginLeft: "10px",
            }}
          />
        </div>

        {/* Terminos y condiciones */}
        <div className={styles.terminosCondicionesContainer}>
          <div className={styles.terminosPrivacidad}>
            <span>
              Al registrarte en Finny, aceptas nuestros
              <b> Términos</b> y <b>Política de privacidad</b>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
