import React from 'react';
import { Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';
import { useTerminal } from '../../hooks/useTerminal';

const TerminalSection = () => {
  const { t, isRTL } = useLanguage();
  const { isDarkMode } = useThemeContext();
  const { history, input, setInput, handleCommand, bodyRef, setHistory } = useTerminal();

  return (
    <section className="py-12 bg-black/5 border-y border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6 max-w-3xl reveal-section">
          <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-slate-900 shadow-2xl shadow-cyan-900/20' : 'bg-slate-800 shadow-2xl shadow-slate-400/50'} border border-slate-700`}>
              {/* Header */}
              <div className="bg-slate-950 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                  <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" onClick={() => setHistory([])}></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono flex items-center gap-2 select-none">
                      <Terminal size={12} /> {t.terminal.title} — bash — 80x24
                  </div>
                  <div className="w-10"></div>
              </div>
              
              {/* Body */}
              <div 
                  ref={bodyRef}
                  className="p-6 font-mono text-sm h-72 overflow-y-auto terminal-scroll bg-[#0f172a] text-slate-300" 
                  onClick={() => document.getElementById('terminal-input')?.focus()}
              >
                  {history.map((entry, idx) => (
                      <div key={idx} className="mb-2 break-words">
                          {entry.type === 'user' && <div className="flex text-cyan-400"><span className="mr-2 opacity-70">user@yasmeen:~$</span><span>{entry.content}</span></div>}
                          {entry.type === 'system' && <div className="text-slate-400 whitespace-pre-wrap">{entry.content}</div>}
                          {entry.type === 'success' && <div className="text-green-400 flex items-center gap-2"><span>➜</span> {entry.content}</div>}
                          {entry.type === 'info' && <div className="text-blue-400">{entry.content}</div>}
                          {entry.type === 'error' && <div className="text-red-400">{entry.content}</div>}
                      </div>
                  ))}
                  <form onSubmit={handleCommand} className="flex items-center">
                      <span className="mr-2 text-cyan-400 select-none">user@yasmeen:~$</span>
                      <input 
                          id="terminal-input"
                          type="text" 
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          className="flex-grow bg-transparent border-none outline-none text-slate-100 font-mono caret-green-500"
                          autoComplete="off"
                          autoFocus
                      />
                  </form>
              </div>
          </div>
          <p className="text-center text-xs font-mono text-slate-500 mt-2 opacity-70">
              {isRTL ? "نصيحة: جرب كتابة 'help' أو 'theme'" : "Tip: Try typing 'help' or 'theme'"}
          </p>
      </div>
    </section>
  );
};

export default TerminalSection;