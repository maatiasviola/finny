import React, { useState } from "react";
import StyledInput from "../../components/StyledInput/StyledInput";
import styles from "./Login.module.css";
import PressableButton from "../../components/PressableButton/PressableButton";
import LineDivider from "../../components/LineDivider/LineDivider";
import { icons } from "../../assets/icons";
function Login() {
  /* Modo */
  const [mode, setMode] = useState("login");

  /* Inputs */
  const [edad, setEdad] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  /* Manejo de clicks */
  const handleMode = () => {
    mode === "login" ? setMode("registro") : setMode("login");
  };

  const handleLogin = () => {
    console.log("login");
  };

  const handleRegistro = () => {
    console.log("registro");
  };

  return (
    <div className={styles.container}>
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
