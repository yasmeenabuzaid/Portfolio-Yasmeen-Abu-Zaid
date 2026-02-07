import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../../context/ThemeContext';

const BackgroundGlow = () => {
  const { isDarkMode } = useThemeContext();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${isDarkMode ? 'rgba(6, 182, 212, 0.07)' : 'rgba(244, 114, 182, 0.15)'}, transparent 40%)`
      }}
    />
  );
};

export default BackgroundGlow;