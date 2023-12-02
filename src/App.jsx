import React, { useState } from 'react';

export default function App(){
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [position, setPosition] = useState({ left: -100, top: -100 });

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const getRandomPosition = () => {
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    return { left, top };
  };

  const handleDisplay = () => {
    const newPosition = getRandomPosition();
    setPosition(newPosition);
    setDisplayText(inputText);
  };

  return (
    <div>
      <div id="inputContainer">
      <div class="displayName">
        <h1>5422071 | 正能大雅</h1>
        <h2>日本大学文理学部情報科学科 Webプログラミングの演習課題</h2>
      </div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleDisplay}>Display</button>
      </div>
      <div class="displayArea" style={{ left: position.left, top: position.top }}>
        {displayText}
      </div>
    </div>
  );
}