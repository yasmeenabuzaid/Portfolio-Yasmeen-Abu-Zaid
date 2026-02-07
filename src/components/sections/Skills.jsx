import React from 'react';
import { Code, Layout, Server, Database, Cpu, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';

const Skills = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useThemeContext();
  
  const textMuted = isDarkMode ? "text-slate-400" : "text-slate-600";
  const cardBg = isDarkMode ? "bg-slate-800/50" : "bg-white/80 shadow-lg";
  const borderCol = isDarkMode ? "border-slate-800" : "border-slate-200";

  if (!t.skills) return null;

  return (
    <section id="skills" className={`py-24 ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
      <div className="container mx-auto px-6 reveal-section">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyan-400 font-mono text-xl">04.</span>
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{t.skills.title}</h2>
          <div className={`h-px ${isDarkMode ? 'bg-slate-700' : 'bg-slate-300'} flex-grow max-w-xs`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} flex items-center gap-2`}>
              <Code className="text-cyan-400" /> {t.skills.techTitle}
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 ${cardBg} rounded-lg hover:-translate-y-1 transition-transform border ${borderCol} hover:border-cyan-500/50`}>
                <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2"><Layout size={16}/> {t.skills.frontend}</h4>
                <p className={`text-sm ${textMuted}`}>React.js, Next.js, Tailwind, Bootstrap, HTML5, CSS3, MUI</p>
              </div>
              <div className={`p-4 ${cardBg} rounded-lg hover:-translate-y-1 transition-transform border ${borderCol} hover:border-cyan-500/50`}>
                <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2"><Server size={16}/> {t.skills.backend}</h4>
                <p className={`text-sm ${textMuted}`}>Node.js, Express.js, PHP, Laravel, C++</p>
              </div>
              <div className={`p-4 ${cardBg} rounded-lg hover:-translate-y-1 transition-transform border ${borderCol} hover:border-cyan-500/50`}>
                <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2"><Database size={16}/> {t.skills.database}</h4>
                <p className={`text-sm ${textMuted}`}>PostgreSQL, MySQL, SQL Server</p>
              </div>
              <div className={`p-4 ${cardBg} rounded-lg hover:-translate-y-1 transition-transform border ${borderCol} hover:border-cyan-500/50`}>
                <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2"><Cpu size={16}/> {t.skills.tools}</h4>
                <p className={`text-sm ${textMuted}`}>Git, GitHub, AWS S3, Figma, WordPress, Secure Coding</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} flex items-center gap-2`}>
              <Award className="text-purple-400" /> {t.skills.eduTitle}
            </h3>
            
            <div className={`${cardBg} p-6 rounded-lg border-l-4 rtl:border-l-0 rtl:border-r-4 border-cyan-500 transition-colors`}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className={`text-lg font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{t.skills.edu1.title}</h4>
                  <p className={textMuted}>{t.skills.edu1.place}</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-900/10 px-2 py-1 rounded">{t.skills.edu1.year}</span>
              </div>
            </div>

            <div className={`${cardBg} p-6 rounded-lg border-l-4 rtl:border-l-0 rtl:border-r-4 border-purple-500 transition-colors`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className={`text-lg font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{t.skills.edu2.title}</h4>
                  <p className={textMuted}>{t.skills.edu2.place}</p>
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-900/10 px-2 py-1 rounded">{t.skills.edu2.year}</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-600 bg-yellow-400/20 px-3 py-1 rounded-full">
                <Award size={14} /> {t.skills.edu2.badge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;