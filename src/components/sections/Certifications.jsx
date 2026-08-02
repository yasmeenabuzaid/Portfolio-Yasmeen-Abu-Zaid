import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';
import { Award, Eye, X, ChevronRight, ChevronLeft } from 'lucide-react';

const Certifications = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useThemeContext();
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const textMuted = isDarkMode ? "text-slate-400" : "text-slate-600";

  if (!t.certifications) return null;

  const viewButtonText = t.certifications.title === 'الشهادات' ? 'عرض الشهادة' : 'View Credential';

  const openModal = (images) => {
    setActiveImages(images);
    setCurrentIndex(0);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImages([]);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation(); 
    setCurrentIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1));
  };

  return (
    <section id="certifications" className={`py-24 ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
      <div className="container mx-auto px-6 max-w-4xl reveal-section">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyan-400 font-mono text-xl">05.</span>
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            {t.certifications.title}
          </h2>
          <div className={`h-px ${isDarkMode ? 'bg-slate-700' : 'bg-slate-300'} flex-grow max-w-xs`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.certifications.items.map((cert, idx) => (
            <div 
              key={idx} 
              className={`relative p-6 flex flex-col rounded-lg border ${
                isDarkMode 
                  ? 'border-slate-800 bg-slate-900/50 hover:border-cyan-500/50' 
                  : 'border-slate-200 bg-white hover:border-cyan-500/50'
              } transition-all duration-300 group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                  <Award size={24} />
                </div>
                
                {cert.images && cert.images.length > 0 && (
                  <button 
                    onClick={() => openModal(cert.images)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                      isDarkMode 
                        ? 'border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10' 
                        : 'border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-500/30 hover:bg-cyan-50'
                    }`}
                  >
                    {viewButtonText}
                    <Eye size={14} />
                  </button>
                )}
              </div>
              
              <h3 className={`text-lg font-bold mb-2 transition-colors ${
                isDarkMode ? 'text-slate-200 group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-cyan-600'
              }`}>
                {cert.title}
              </h3>
              
              <p className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                {cert.issuer}
              </p>
              
              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/50">
                <span className={`${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>🗓️</span>
                <p className={`font-mono text-sm ${textMuted}`}>{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={closeModal} 
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-300 hover:text-cyan-400 transition-colors bg-black/50 p-2 rounded-full z-50"
            onClick={closeModal}
          >
            <X size={28} />
          </button>

          <div 
            className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={activeImages[currentIndex]} 
              alt={`Credential ${currentIndex + 1}`} 
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
            />

            {activeImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 text-slate-300 hover:text-cyan-400 transition-colors bg-black/50 hover:bg-black/80 p-3 rounded-full"
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 text-slate-300 hover:text-cyan-400 transition-colors bg-black/50 hover:bg-black/80 p-3 rounded-full"
                >
                  <ChevronRight size={32} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-slate-200 px-4 py-1.5 rounded-full text-sm font-mono tracking-widest backdrop-blur-md">
                  {currentIndex + 1} / {activeImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;