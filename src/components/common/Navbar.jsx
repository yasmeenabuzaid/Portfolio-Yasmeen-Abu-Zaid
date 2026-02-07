import React from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { IconButton, Tooltip } from '@mui/material';
import { useThemeContext } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const { language, toggleLanguage, t } = useLanguage();
  const { activeSection, isScrolled } = useScrollSpy();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = isDarkMode ? "bg-slate-950/80" : "bg-white/80";
  const borderCol = isDarkMode ? "border-slate-800" : "border-slate-200";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? `${navBg} backdrop-blur-md border-b ${borderCol} py-3` : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono cursor-pointer" onClick={() => scrollTo('home')}>
          &lt;Yasmeen /&gt;
        </div>
        
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-sm font-medium transition-colors relative group ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
            >
              <span className="text-cyan-400 mx-1">0{['About', 'Experience', 'Projects', 'Skills', 'Contact'].indexOf(item) + 1}.</span>
              {t.nav[item.toLowerCase()]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Tooltip title={isDarkMode ? "Light Mode" : "Dark Mode"}>
              <IconButton onClick={toggleTheme} color="inherit">
                  {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
              </IconButton>
          </Tooltip>

           <button 
              onClick={toggleLanguage} 
              className={`p-2 rounded-full transition-all flex items-center gap-1 font-mono text-sm ${isDarkMode ? 'text-cyan-400 hover:bg-slate-800' : 'text-cyan-600 hover:bg-slate-200'}`}
          >
              <Languages size={18} /> {language.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;