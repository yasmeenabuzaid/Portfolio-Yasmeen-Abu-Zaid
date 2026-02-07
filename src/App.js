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
import Contact from './components/sections/Contact'; 

const AppContent = () => {
  //-----------------------------------------------
  const { isDarkMode } = useThemeContext(); 
  // get dark mode state from context
  const { isRTL } = useLanguage();
   // get language direction (rtl/ltr) from context
  const theme = getAppTheme(isDarkMode);
 // get the actual MUI theme object
  //-----------------------------------------------

  // run animations when elements come into view
  useReveal(); // triggers scroll animations for sections

  const bgMain = isDarkMode ? "bg-slate-950" : "bg-slate-50"; // main background color
  const textMain = isDarkMode ? "text-slate-200" : "text-slate-700"; // main text color

  //-----------------------------------------------

  return (
    <ThemeProvider theme={theme}> 
    {/* provide the theme to the whole app */}
      <div 
        dir={isRTL ? 'rtl' : 'ltr'} // set text direction based on language
        className={`min-h-screen ${bgMain} ${textMain} selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden transition-colors duration-300`}
      >
        <BackgroundGlow />
        <Navbar /> 
   
        
        <main>
          <Hero />
          <TerminalSection /> 
          <About /> 
          <Experience /> 
          <Projects /> 
          <Skills />
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
        <AppContent /> {/* main content of the app */}
      </ThemeContextProvider>
    </LanguageProvider>
  );
};

export default App; 
// export the whole App so index.jsx can use it