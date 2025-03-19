import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState('|'); 
  const fullText = 'Hi! I am Mansi Joshi, welcome to my portfolio! :)';
  const indexRef = useRef(0); 
  const navigate = useNavigate();
  const [pressed, setPressed] = useState(false);

  // Simulate the typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        const newText = text + fullText[indexRef.current]; 
        setText(newText); 
       // console.log(newText); 

        indexRef.current += 1; 
      } else {
        clearInterval(interval); 
      }
    }, 100); 

    return () => clearInterval(interval); 
  }, [text]); 


  useEffect(() => {
    if (text === fullText) {
      setCursor(' '); 
      setPressed(true); 
    }
    const cursorInterval = setInterval(() => {
      setCursor((prevCursor) => (prevCursor === '|' ? ' ' : '|')); 
    }, 200);

    return () => clearInterval(cursorInterval); 
  }, [text]); 

  useEffect(()=>{
    if (pressed) {
      const timer = setTimeout(()=>{
        navigate('/intro');
      }, 500); 
      return ()=>clearTimeout(timer);
    }
  },[pressed, navigate]);

  return (
    <div className={`terminal-container ${pressed ? 'pressed' : ''}`}>
      <div className="terminal-window">
        <pre className="terminal-text">{text}{cursor}</pre>
      </div>
    </div>
  );
};

export default LandingPage;
