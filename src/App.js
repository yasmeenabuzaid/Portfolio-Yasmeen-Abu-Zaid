import React from 'react'; 
// needed to write components
import { ThemeProvider } from '@mui/material/styles'; 
//needed  to apply themes globally
import { ThemeContextProvider, useThemeContext } from './context/ThemeContext'; 
// our custom theme context for dark/light mode
import { LanguageProvider, useLanguage } from './context/LanguageContext'; 
// context to handle language and RTL/LTR
import { getAppTheme } from './theme/AppTheme'; 
// function that returns the theme based on dark/light
import { useReveal } from './hooks/useRevealOnScroll';
// custom hook to reveal elements on scroll

// Components
import Navbar from './components/common/Navbar'; 
import Footer from './components/common/Footer'; 
import BackgroundGlow from './components/ui/BackgroundGlow'; 
import Hero from './components/sections/Hero'; 
import TerminalSection from './components/sections/TerminalSection'; 
import About from './components/sections/About'; 
import Experience from './components/sections/Experience'; 
import Projects from './components/sections/Projects'; 
import Skills from './components/sections/Skills'; 
import Certifications from './components/sections/Certifications'; 
import Contact from './components/sections/Contact'; 

const AppContent = () => {
  const { isDarkMode } = useThemeContext(); 
  const { isRTL } = useLanguage();
  const theme = getAppTheme(isDarkMode);

  useReveal(); 

  React.useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#020617' : '#f8fafc';
    document.body.style.color = isDarkMode ? '#e2e8f0' : '#334155';
  }, [isDarkMode]);

  const bgMain = isDarkMode ? "bg-slate-950" : "bg-slate-50"; 
  const textMain = isDarkMode ? "text-slate-200" : "text-slate-700"; 

  return (
    <ThemeProvider theme={theme}> 
      <div 
        dir={isRTL ? 'rtl' : 'ltr'} 
        className={`min-h-screen ${bgMain} ${textMain} selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden transition-colors duration-300`}
      >
        <BackgroundGlow />
        <Navbar /> 
        
        <main>
          <Hero />
          <TerminalSection /> 
          <Experience /> 
          <About /> 
          <Projects /> 
          <Skills />
          <Certifications />
          <Contact /> 
          <Footer /> 
        </main>
      </div>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <LanguageProvider> 
      <ThemeContextProvider> 
        <AppContent /> 
      </ThemeContextProvider>
    </LanguageProvider>
  );
};

export default App;