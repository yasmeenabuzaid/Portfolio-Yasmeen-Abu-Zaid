import React from 'react';
import { Chip } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';

const Experience = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useThemeContext();
  
  const textMuted = isDarkMode ? "text-slate-400" : "text-slate-600";

  if (!t.experience) return null;

  return (
    <section id="experience" className={`py-24 ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
      <div className="container mx-auto px-6 max-w-4xl reveal-section">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyan-400 font-mono text-xl">02.</span>
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{t.experience.title}</h2>
          <div className={`h-px ${isDarkMode ? 'bg-slate-700' : 'bg-slate-300'} flex-grow max-w-xs`}></div>
        </div>

        <div className="space-y-12">
          {t.experience.jobs.map((job, idx) => (
            <div key={idx} className={`relative border-l-2 rtl:border-l-0 rtl:border-r-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-300'} pl-8 rtl:pl-0 rtl:pr-8 ml-4 rtl:ml-0 rtl:mr-4 md:ml-0 group`}>
              <span className={`absolute -left-[9px] rtl:-left-auto rtl:-right-[9px] top-0 w-4 h-4 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-300'} border-2 ${idx === 0 ? 'border-cyan-500 group-hover:bg-cyan-500' : 'border-purple-500 group-hover:bg-purple-500'} transition-colors`}></span>
              
              <div className="mb-2">
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                  {job.role} <span className={idx === 0 ? "text-cyan-400" : "text-purple-400"}>{job.company}</span>
                </h3>
                <p className={`font-mono text-sm ${textMuted} mb-4`}>{job.date}</p>
              </div>
              
              <ul className={`space-y-3 ${textMuted}`}>
                {job.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className={`${idx === 0 ? "text-cyan-400" : "text-purple-400"} mt-1.5 text-xs`}>▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tech.map(tech => (
                  <Chip 
                    key={tech} 
                    label={tech} 
                    size="small"
                    sx={{
                      fontFamily: 'monospace',
                      backgroundColor: idx === 0 ? 'rgba(8,145,178,0.1)' : 'rgba(147,51,234,0.1)',
                      color: idx === 0 ? '#22d3ee' : '#c084fc',
                      border: '1px solid',
                      borderColor: idx === 0 ? 'rgba(8,145,178,0.2)' : 'rgba(147,51,234,0.2)',
                      borderRadius: '4px'
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;