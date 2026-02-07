import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';
import profileImg from '../../assets/profile.jpg';

const About = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useThemeContext();
  const textMuted = isDarkMode ? "text-slate-400" : "text-slate-600";
  const borderCol = isDarkMode ? "border-slate-800" : "border-slate-200";

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 reveal-section">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-cyan-400 font-mono text-xl">01.</span>
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{t.about.title}</h2>
              <div className={`h-px ${isDarkMode ? 'bg-slate-700' : 'bg-slate-300'} flex-grow max-w-xs`}></div>
            </div>
            
            <div className={`space-y-4 ${textMuted} text-lg`}>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p className="text-purple-400 font-medium">{t.about.current}</p>
            </div>

            <div className={`mt-8 grid grid-cols-2 gap-4 font-mono text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {t.about.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-cyan-400">▹</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 group">
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg group-hover:bg-transparent transition-colors duration-300 z-10 cursor-pointer"></div>
              <div className={`w-full h-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'} rounded-lg overflow-hidden relative z-0 border ${borderCol}`}>
                <img 
                  src={profileImg} 
                  alt="Yasmeen Abu Zaid" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
