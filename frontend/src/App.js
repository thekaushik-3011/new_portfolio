import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      requestAnimationFrame(() => {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      });
    };

    const animateDot = () => {
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;
      
      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;
      
      requestAnimationFrame(animateDot);
    };

    animateDot();

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
        cursor.classList.add('hover');
      }
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget || (!e.relatedTarget.closest('button') && !e.relatedTarget.closest('a') && e.relatedTarget.tagName !== 'A' && e.relatedTarget.tagName !== 'BUTTON')) {
        cursor.classList.remove('hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="App">
      <div 
        ref={cursorRef}
        className="custom-cursor"
      />
      <div 
        ref={cursorDotRef}
        className="custom-cursor-dot"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
