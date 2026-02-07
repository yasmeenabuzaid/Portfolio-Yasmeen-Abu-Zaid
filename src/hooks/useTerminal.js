// src/hooks/useTerminal.js
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useThemeContext } from '../context/ThemeContext';

/**
 * useTerminal
 * Custom hook to handle a terminal-like interface.
 * Handles input commands, scrolling, history, and theme toggling.
 */
export const useTerminal = () => {

  // 1. Access contexts
  const { t, isRTL } = useLanguage(); // get translations and RTL state
  const { toggleTheme } = useThemeContext(); // theme control

  // 2. Setup state and refs
  const [history, setHistory] = useState([]);  // terminal message history
  const [input, setInput] = useState('');      // current input value
  const bodyRef = useRef(null);                // ref to terminal body for scrolling

  // 3. Initialize terminal history with intro lines
  useEffect(() => {
    setHistory(t.terminal.intro.map(line => ({ type: 'system', content: line })));
  }, [t]);

  // 4. Auto-scroll to bottom when history changes
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  // 5. Scroll to a page section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // 6. Handle user input commands
  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', content: input }];
    let response = null;

    switch (cmd) {
      case 'help':
        response = { 
          type: 'system', 
          content: isRTL 
            ? 'الأوامر المتاحة:\n- about: الذهاب لنبذة عني\n- projects: عرض المشاريع\n- contact: تواصل معي\n- theme: تغيير الثيم\n- clear: مسح الشاشة' 
            : 'Available commands:\n- about: Go to About section\n- projects: Go to Projects\n- contact: Go to Contact\n- theme: Toggle Dark/Light mode\n- clear: Clear console' 
        };
        break;

      case 'clear':
        setHistory([]); 
        setInput(''); 
        return;

      case 'about':
        scrollToSection('about');
        response = { 
          type: 'success', 
          content: isRTL ? 'جاري الانتقال إلى نبذة عني...' : 'Navigating to About section...' 
        };
        break;

      case 'projects':
      case 'work':
        scrollToSection('projects');
        response = { 
          type: 'success', 
          content: isRTL ? 'جاري الانتقال إلى المشاريع...' : 'Navigating to Projects section...' 
        };
        break;

      case 'contact':
      case 'email':
        scrollToSection('contact');
        response = { 
          type: 'success', 
          content: isRTL ? 'جاري الانتقال إلى التواصل...' : 'Opening communication channels...' 
        };
        break;

      case 'theme':
        toggleTheme();
        response = { 
          type: 'success', 
          content: isRTL ? 'تم تغيير الثيم بنجاح.' : 'Theme toggled successfully.' 
        };
        break;

      case 'yasmeen':
      case 'whoami':
        response = { 
          type: 'info', 
          content: 'Yasmeen Abu Zaid - Full Stack Developer | Security Enthusiast' 
        };
        break;

      default:
        response = { 
          type: 'error', 
          content: isRTL 
            ? `الأمر '${cmd}' غير معروف. اكتب 'help' للمساعدة.` 
            : `Command '${cmd}' not recognized. Type 'help' for available commands.` 
        };
    }

    // 7. Update history and clear input
    if (response) newHistory.push(response);
    setHistory(newHistory);
    setInput('');
  };

  // 8. Return hook API
  return { 
    history, 
    input, 
    setInput, 
    handleCommand, 
    bodyRef, 
    setHistory 
  };
};
