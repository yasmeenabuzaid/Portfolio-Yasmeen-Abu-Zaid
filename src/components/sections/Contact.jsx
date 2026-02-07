import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';

const Contact = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useThemeContext();

  const cardBg = isDarkMode ? "bg-slate-800/50 hover:bg-slate-800" : "bg-white/50 hover:bg-white shadow-lg";
  const borderCol = isDarkMode ? "border-slate-700" : "border-slate-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-slate-600";
  const headingColor = isDarkMode ? 'text-slate-100' : 'text-slate-800';

  if (!t.contact) return null;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 reveal-section text-center">
        
        <div className="mb-12">
          <span className="text-cyan-400 font-mono text-xl">04.</span>
          <h2 className={`text-4xl md:text-5xl font-bold ${headingColor} mt-2 mb-6`}>
            {t.contact.title}
          </h2>
          <p className={`text-lg ${textMuted} max-w-2xl mx-auto leading-relaxed`}>
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <a href="mailto:yasmeenabuzaid552@gmail.com" 
             className={`group p-8 rounded-2xl border ${borderCol} ${cardBg} transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center gap-4`}>
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
              <Mail size={28} />
            </div>
            <h3 className={`font-bold text-lg ${headingColor}`}>Email Me</h3>
            <span className={`text-xs md:text-sm ${textMuted} break-all`}>yasmeenabuzaid552@gmail.com</span>
          </a>

          <a href="tel:+962795709238" 
             className={`group p-8 rounded-2xl border ${borderCol} ${cardBg} transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center gap-4`}>
            <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
              <Phone size={28} />
            </div>
            <h3 className={`font-bold text-lg ${headingColor}`}>Call Me</h3>
            <span className={`text-sm ${textMuted} font-mono`} dir="ltr">
              +962 79 570 9238
            </span>
          </a>

          <div className={`group p-8 rounded-2xl border ${borderCol} ${cardBg} transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center gap-4`}>
            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
              <MapPin size={28} />
            </div>
            <h3 className={`font-bold text-lg ${headingColor}`}>Location</h3>
            <span className={`text-sm ${textMuted}`}>Aqaba, Jordan</span>
          </div>

          <a href="https://www.linkedin.com/in/yasmeen-abu-zaid-1b492830a" 
             target="_blank" 
             rel="noreferrer"
             className={`group p-8 rounded-2xl border ${borderCol} ${cardBg} transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center gap-4`}>
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Linkedin size={28} />
            </div>
            <h3 className={`font-bold text-lg ${headingColor}`}>LinkedIn</h3>
            <span className={`text-sm ${textMuted}`}>Connect with me</span>
          </a>

        </div>

        <div className={`h-px w-full max-w-xs mx-auto ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>

      </div>
    </section>
  );
};

export default Contact;