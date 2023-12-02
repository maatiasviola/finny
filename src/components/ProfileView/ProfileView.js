import React, { useState } from "react";
import styles from "./ProfileView.module.css";
import PressableButton from "../../components/PressableButton/PressableButton";
import Logro from "../../components/achievements/Logros";
import Cookies from "universal-cookie";
import styleInput from "../StyledInput/StyledInput.module.css";
import StyledInput from "../StyledInput/StyledInput";
import { icons } from "../../assets/icons";
import StatContainer from "../StatContainer";
import { amigos, logros } from "../../constants/quizzes";
import AgregarAmigo from "../AgregarAmigo/AgregarAmigo";

const ProfileView = () => {
  const [redirecting, setRedirecting] = useState(false);
  const [persona, setPersona] = useState({});
  const [personaForUpdate, setPersonaForUpdate] = useState({});
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const cookie = new Cookies();
  const [errorShow, setErrorShow] = useState(false);
  React.useEffect(() => {
    const idPersona = cookie.get("idPersona");
    fetch(`http://localhost:8080/Persona/getPersona/${idPersona}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setPersona(d);
        setEdad(d.edad);
        setNombre(d.nombre);
        setEmail(d.email);
        setPass(d.contrasenia);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(230, 230, 230,0.2)",
          display: redirecting ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 400,
            height: 600,
            backgroundColor: "white",
            borderRadius: 15,
            borderColor: "green",
            border: "1px solid green",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ textAlign: "center", color: "black" }}>
              Editar Perfil
            </h1>
            <h2>{persona ? persona.usuario : ""}</h2>
            <br></br>
            {errorShow ? (
              <h3>Error al actualizar los datos, reintente.</h3>
            ) : null}
            <p>Nombre</p>
            <input
              className={styleInput.input2}
              style={{ borderColor: "black" }}
              placeholder={"Nombre"}
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <p>Edad</p>
            <input
              className={styleInput.input2}
              style={{ borderColor: "black" }}
              placeholder={"Edad"}
              value={edad}
              onChange={(e) => {
                setEdad(e.target.value);
              }}
            />
            <p>Email</p>
            <input
              className={styleInput.input2}
              style={{ backgroundColor: "gray" }}
              placeholder={"Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              disabled
            />
            <p>Contraseña</p>
            <input
              className={styleInput.input2}
              style={{ borderColor: "black" }}
              placeholder={"Contraseña"}
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <div style={{ display: "flex", gap: 10 }}>
              <PressableButton
                text="CERRAR"
                buttonStyle={{
                  backgroundColor: "#DA0D0D",
                  borderRadius: "8px",
                  marginRight: "10px",
                  width: "fit-content",
                  fontSize: "12px",
                }}
                textStyle={{
                  color: "#fff",
                }}
                onClick={async () => {
                  setErrorShow(false);
                  setRedirecting(false);
                }}
              />
              <PressableButton
                text="Actualizar"
                buttonStyle={{
                  backgroundColor: "#007bff",
                  borderRadius: "8px",
                  marginRight: "10px",
                  width: "fit-content",
                  fontSize: "12px",
                }}
                textStyle={{
                  color: "#fff",
                }}
                onClick={async () => {
                  const response = await fetch(
                    `http://localhost:8080/Persona/Update`,
                    {
                      method: "PUT",
                      mode: "cors",
                      headers: {
                        "Content-Type": "application/json",
                        "Accept-Encoding": "gzip, deflate, br",
                      },
                      body: JSON.stringify({
                        usuario: persona.usuario,
                        contrasenia: pass,
                        edad: edad,
                        nombre: nombre,
                        email: email,
                      }),
                    }
                  );
                  const status = await response.status;
                  if (status == 200) {
                    setErrorShow(false);
                    setRedirecting(false);
                    window.location.href = "/profile";
                  }
                  if (status == 400) {
                    setErrorShow(true);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <>
        {/* Profile header */}
        <div className={styles.userInfoContainer}>
          {/* Profile image */}
          <img
            src={icons.profileImageIcon}
            alt="Foto de perfil"
            className={styles.profileImage}
          />

          {/* Profile info */}
          <div className={styles.userInfo}>
            {/* Name & Username */}
            <div className={styles.userInfoUsername}>
              <p className={styles.infoName}>{persona ? persona.nombre : ""}</p>
              <p className={styles.infoUserName}>
                {persona ? persona.usuario : ""}
              </p>
            </div>

            {/* Edit profile */}
            <PressableButton
              text="Editar Perfil"
              icon={icons.editIcon}
              buttonStyle={{
                backgroundColor: "#1CB0F6",
                boxShadow: "0px 4px 0px 0px #1899D6",
                height: "34px",
              }}
              iconStyle={{
                width: "14px",
                height: "14px",
              }}
              textStyle={{
                color: "#fff",
                marginLeft: "10px",
                fontFamily: "Inter",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "14px" /* 138.462% */,
                letterSpacing: "0.8px",
              }}
              onClick={() => {
                setRedirecting(!redirecting);
              }}
            />
          </div>
        </div>

        {/* Estadisticas y logros */}
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            {/* Stats */}
            <p className={styles.title}>Estadisticas</p>
            <div className={styles.statsContainer}>
              <StatContainer
                icon={icons.fireIcon}
                title="4"
                description="Racha de días"
              />
              <StatContainer
                icon={icons.xpIcon}
                title="27"
                description="XP total"
              />
            </div>

            {/* Logros */}
            <div className={styles.logrosContainer}>
              {/* Title */}
              <p className={styles.title}>Logros</p>

              <div className={styles.innerContainer}>
                {logros.map((logro) => {
                  return (
                    <Logro
                      key={logro.idLogro}
                      icon={logro.icon}
                      title={logro.titulo}
                      achievementProgress={25}
                      description={logro.descripcion}
                    />
                  );
                })}

                <div className={styles.verTodosContainer}>
                  <p className={styles.verTodosTitle}>Ver todos</p>
                  <img
                    alt="Ver todos"
                    className={styles.verTodosIcon}
                    src={icons.rightArrowIcon}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Amigos */}
          <div className={styles.rightContainer}>
            <p className={styles.title}>Amigos</p>

            <div className={styles.amigosContainer}>
              {amigos.map((amigo) => {
                return (
                  <AgregarAmigo
                    key={amigo.idAmigo}
                    idAmigo={amigo.idAmigo}
                    icon={amigo.icon}
                    title={amigo.titulo}
                    description={amigo.descripcion}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProfileView;
