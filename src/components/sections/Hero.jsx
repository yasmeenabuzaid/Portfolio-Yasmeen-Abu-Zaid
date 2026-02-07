import React from 'react';
import { Button } from '@mui/material';
import { Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';

const Hero = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useThemeContext();
  
  const textMuted = isDarkMode ? "text-slate-400" : "text-slate-600";
  const textHeading = isDarkMode ? "text-slate-100" : "text-slate-800";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ 
            backgroundImage: `radial-gradient(${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 1px)`, 
            backgroundSize: '24px 24px' 
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl"> 
          
          <p className="text-cyan-400 font-mono mb-5 text-lg animate-fade-in-up">
            {t.hero.greeting}
          </p>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${textHeading}`}>
            Yasmeen Abu Zaid.
          </h1>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${textMuted}`}>
            {t.hero.role}
          </h2>
          
          <p className={`${textMuted} max-w-xl text-lg leading-relaxed mb-12 
             border-l-4 border-cyan-500 pl-6 
             rtl:pl-0 rtl:border-l-0 rtl:border-r-4 rtl:pr-6 
             ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-100/80'} py-4 rounded-r-xl rtl:rounded-r-none rtl:rounded-l-xl backdrop-blur-sm`}>
            {t.hero.desc}
          </p>
          
          <div className="flex flex-wrap gap-4">
   
            
            <Button 
              href="/Yasmeen_AbuZaid_FullStack_Developer_CV.pdf" 
              target="_blank"
              variant="contained"
              size="large"
              sx={{
                fontFamily: 'monospace', 
                py: 1.5, 
                px: 4,
                backgroundColor: isDarkMode ? '#1e293b' : '#e2e8f0',
                color: isDarkMode ? '#e2e8f0' : '#1e293b',
                boxShadow: 'none',
                '&:hover': { backgroundColor: isDarkMode ? '#334155' : '#cbd5e1', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }
              }}
              endIcon={<Download size={18} />}
            >
              {t.hero.downloadCv}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
      
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      
    </section>
  );
};

export default Hero;