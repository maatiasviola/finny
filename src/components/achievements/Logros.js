import React from "react";
import "./Logros.css";
const ImageWithText = ({ imageUrl, text, achievementName, achievementProgress, streakText }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <img src={imageUrl} alt="Incendio forestal" style={{ width: '50px', height: '50px' }} />
      </div>
      <div>
        <h3>{achievementName}</h3>
        <div>
          <progress  value={achievementProgress} max="100"></progress>
        </div>
        <p>{streakText}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
