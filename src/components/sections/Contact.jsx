import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2, User, AtSign, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';

const Contact = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useThemeContext();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const cardBg = isDarkMode ? "bg-slate-800/40" : "bg-white/60";
  const borderCol = isDarkMode ? "border-slate-700/50" : "border-slate-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-slate-600";
  const headingColor = isDarkMode ? 'text-slate-100' : 'text-slate-800';
  const inputBg = isDarkMode ? "bg-slate-900/50 border-slate-700/50 text-white focus:bg-slate-800/80" : "bg-slate-50 border-slate-200 text-slate-800 focus:bg-white";

  if (!t.contact) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xkopkdgg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 5000); 
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 reveal-section max-w-6xl">
        
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-xl">04.</span>
          <h2 className={`text-4xl md:text-5xl font-bold ${headingColor} mt-2 mb-4 tracking-tight`}>
            {t.contact.title}
          </h2>
          <p className={`text-lg ${textMuted} max-w-2xl mx-auto leading-relaxed`}>
            {t.contact.desc}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          <div className="w-full lg:w-1/3 flex flex-col">
            <div className={`p-8 rounded-3xl border ${borderCol} ${cardBg} backdrop-blur-xl shadow-xl h-full flex flex-col relative overflow-hidden`}>
              
              <h3 className={`text-2xl font-bold ${headingColor} mb-2`}>Get in Touch</h3>
              <p className={`${textMuted} mb-8 text-sm leading-relaxed`}>
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>

              {/* Info Rows */}
              <div className="space-y-6 flex-grow">
                {/* Email */}
                <a href="mailto:yasmeen.m.abuzaid@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${textMuted} mb-1`}>Email</p>
                    <p className={`font-medium ${headingColor} group-hover:text-cyan-400 transition-colors break-all text-sm`}>yasmeen.m.abuzaid@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+962795709238" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${textMuted} mb-1`}>Phone</p>
                    <p className={`font-medium font-mono ${headingColor} group-hover:text-purple-400 transition-colors text-sm`} dir="ltr">+962 79 570 9238</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${textMuted} mb-1`}>Location</p>
                    <p className={`font-medium ${headingColor} text-sm`}>Aqaba, Jordan</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-700/50">
                <p className={`text-xs font-bold uppercase tracking-wider ${textMuted} mb-4`}>Social Profiles</p>
                <div className="flex gap-3">
                  <a href="www.linkedin.com/in/yasmeen-mohammad-abu-zaid-1b492830a" target="_blank" rel="noreferrer" 
                     className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/yasmeenabuzaid" target="_blank" rel="noreferrer" 
                     className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 ${isDarkMode ? 'bg-slate-700 text-slate-300 hover:bg-white hover:text-slate-900' : 'bg-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white'}`}>
                    <Github size={20} />
                  </a>
                </div>
              </div>

            </div>
          </div>


          <div className="w-full lg:w-2/3">
            <div className={`p-8 md:p-10 rounded-3xl border ${borderCol} ${cardBg} backdrop-blur-xl shadow-2xl relative overflow-hidden h-full`}>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="flex flex-col gap-2 relative group">
                    <label htmlFor="name" className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-cyan-500/80' : 'text-cyan-600'}`}>Your Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-cyan-500 transition-colors">
                        <User size={18} />
                      </div>
                      <input 
                        type="text" name="name" id="name" required disabled={isSubmitting}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${inputBg} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder="insert your name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 relative group">
                    <label htmlFor="email" className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-cyan-500/80' : 'text-cyan-600'}`}>Your Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-cyan-500 transition-colors">
                        <AtSign size={18} />
                      </div>
                      <input 
                        type="email" name="email" id="email" required disabled={isSubmitting}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${inputBg} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder="yasmeen@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="message" className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-cyan-500/80' : 'text-cyan-600'}`}>Message</label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 pointer-events-none text-slate-400 group-focus-within:text-cyan-500 transition-colors">
                      <MessageSquare size={18} />
                    </div>
                    <textarea 
                      name="message" id="message" rows="6" required disabled={isSubmitting}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none ${inputBg} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      placeholder="How can I help you ?"
                    ></textarea>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-500 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle size={20} className="shrink-0" />
                    <p className="text-sm font-medium">Message sent successfully! I'll be in touch soon.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-500 animate-in fade-in slide-in-from-bottom-2">
                    <AlertCircle size={20} className="shrink-0" />
                    <p className="text-sm font-medium">Oops! Something went wrong. Please try again later.</p>
                  </div>
                )}

                <div className="pt-2">
                  <button 
                    type="submit" disabled={isSubmitting}
                    className={`w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait hover:translate-y-0' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;