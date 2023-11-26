import styles from "./Chatbot.module.css";
import { useState } from "react";
import { icons } from "../../assets/icons";
import styled from "styled-components";

function Chatbot({ chatbotStyle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [personaje, setPersonaje] = useState("Warren Buffet");
  const [message, setMessage] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [respuestas, setRespuestas] = useState([{me:false, text: "¡Bienvenido! Mi nombre es Warren Buffet, en qué puedo servirte?"}]);
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState("warren");
  const [title, setTitle] = useState("Warren Buffet");
  const [openSwitch, setOpenSwitch] = useState(false);
  const handlePersonSwitch = (option) => {
      switch(option){
          case 1:
              setPerson("warren");
              setTitle("Warren Buffet");
              setOpenSwitch(false);
              setRespuestas([{me:false, text: "¡Bienvenido! Mi nombre es Warren Buffet, en qué puedo servirte?"}])
              break;
          case 2:
              setPerson("kiyosaki");
              setTitle("Robert Kiyosaki");
              setOpenSwitch(false);
              setRespuestas([{me:false, text: "¡Bienvenido! Mi nombre es Robert Kiyosaki, en qué puedo servirte?"}])
              break;
          case 3:
              setPerson("natoli");
              setTitle("Agustín Natoli");
              setOpenSwitch(false);
              setRespuestas([{me:false, text: "¡Bienvenido! Mi nombre es Agustin Natoli, en qué puedo servirte?"}])
              break;
          
      }
      
  }
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleDownload = async () =>{
    let nuevasRespuestas = [...respuestas, {me:false, text: person}];
    let filename = "downloadtxt.txt";
    const response = await fetch('http://127.0.0.1:3001/downloadtxt',{     
            method: 'POST',
            body: JSON.stringify(nuevasRespuestas),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.blob())
        .then(blob => {
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error("Error downloading the file.", error);
        });
}
  const handleResponse = async () => {
    const ruta = 'http://127.0.0.1:3001/'+person;
    // Hacemos una copia del estado actual de respuestas
    let nuevasRespuestas = [...respuestas, {me:true, text: inputVal}];
    setInputVal("");
    setLoading(true);
    try {
        const response = await fetch(ruta,{     
            method: 'POST',
            body: JSON.stringify({text:inputVal}),
            headers: {
              'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        
        nuevasRespuestas.push({me:false, text: data.outputText});

        setRespuestas(nuevasRespuestas);
        setLoading(false);    
    } catch (error) {
        console.error("Hubo un error al llamar a la API", error);
    }
}
  return (
    <>
      {/* Icon to open chatbot */}
      <StyledChatbotIcon chatbotStyle={chatbotStyle} onClick={handleOpen}>
        <img
          class={styles.chatbotImage}
          src={(person == "warren")?
          icons.warrenBuffetIcon:
          (person == "kiyosaki"? icons.kiyosaki :
          icons.natoli)}
          alt={title}
        />
      </StyledChatbotIcon>
      {/* Full chat */}
      {isOpen && (
        <StyledChatContainer chatbotStyle={chatbotStyle}>
          <div className="switch-modal" style={(openSwitch)?{display: "flex"}:{display: "none"}}>
              <div onClick={()=> handlePersonSwitch(1)}>Warren</div>
              <div onClick={()=> handlePersonSwitch(2)}>Kiyosaki</div>
              <div onClick={()=> handlePersonSwitch(3)}>Natoli</div>
          </div>
          {/* Header */}
          <div className={styles.headerContainer}>
            <img
              onClick={handleOpen}
              src={icons.blackcloseIcon}
              alt="Cerrar"
              className={styles.closeIcon}
            />
            <div className={styles.headerImageContainer}>
              <img
                src={(person == "warren")?
                icons.warrenBuffetIcon:
                (person == "kiyosaki"? icons.kiyosaki :
                icons.natoli)}
                alt={personaje}
                className={styles.headerImage}
                onClick={()=> setOpenSwitch(!openSwitch)}
              />
              <span className={styles.onlineIcon} />
            </div>
            {/* Info */}
            <div className={styles.headerUserInfo}>
              <span className={styles.headerUserInfoName}>{title}</span>
              
              <p className={styles.headerUserInfoDescription}>
                {(person == "warren")?
                "“No ahorres lo que te queda después de gastar, gasta lo que te queda después de ahorrar.”":
                (person == "kiyosaki"? "“Los ricos no trabajan por dinero, hacen que el dinero trabaje para ellos.”" :
                "“Recuerda, no invertir cerca de máximos históricos.”")}
                
              </p>
              <img src={icons.save} style={{width:20}} onClick={handleDownload} className="download"></img>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.messagesContainer}>
              {respuestas.map(x =>{
                        return(<p className={(x.me)?"right":"left"}>{x.text}</p>);
              })}
          </div>

          {/* Footer */}
          <div className={styles.footerContainer}>
            <input
              placeholder="Escribe tu consulta aquí"
              autocomplete="off"
              className={styles.sendInput}
              value={inputVal} 
              onChange={(x)=>{setInputVal(x.target.value)}} onKeyDown={(e) => {
                if (e.code === "Enter") {
                e.preventDefault()
                handleResponse()
                }
            }}
            required
            />
            <div className={styles.sendButtonContainer}>
              <img
                src={icons.sendIcon}
                className={styles.sendButton}
                alt="Enviar"
              />
            </div>
          </div>
        </StyledChatContainer>
      )}
    </>
  );
}

export default Chatbot;

const StyledChatbotIcon = styled.div`
  cursor: pointer;
  position: ${({ chatbotStyle }) =>
    chatbotStyle && chatbotStyle.position ? chatbotStyle.position : "absolute"};
  bottom: 20px;
  right: 20px;
`;

const StyledChatContainer = styled.div`
  display: flex;
  z-index: 10000;
  flex-direction: column;
  height: 400px;
  width: 300px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  position: ${({ chatbotStyle }) =>
    chatbotStyle && chatbotStyle.position ? chatbotStyle.position : "absolute"};
  bottom: 20px;
  right: 20px;
`;
