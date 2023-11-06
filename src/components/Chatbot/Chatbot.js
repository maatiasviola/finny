import styles from "./Chatbot.module.css";
import { useState } from "react";
import { icons } from "../../assets/icons";
import styled from "styled-components";

function Chatbot({ chatbotStyle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [personaje, setPersonaje] = useState("Warren Buffet");
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Icon to open chatbot */}
      <StyledChatbotIcon chatbotStyle={chatbotStyle} onClick={handleOpen}>
        <img
          class={styles.chatbotImage}
          src={icons.warrenBuffetIcon}
          alt={personaje}
        />
      </StyledChatbotIcon>
      {/* Full chat */}
      {isOpen && (
        <StyledChatContainer chatbotStyle={chatbotStyle}>
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
                src={icons.warrenBuffetIcon}
                alt={personaje}
                className={styles.headerImage}
              />
              <span className={styles.onlineIcon} />
            </div>
            {/* Info */}
            <div className={styles.headerUserInfo}>
              <span className={styles.headerUserInfoName}>{personaje}</span>
              <p className={styles.headerUserInfoDescription}>
                CEO de Berkshire Hathaway
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.messagesContainer}></div>

          {/* Footer */}
          <div className={styles.footerContainer}>
            <input
              placeholder="Escribe tu consulta aquí"
              autocomplete="off"
              className={styles.sendInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
