import React from 'react';
import { Layout, ExternalLink, Users, User, Lock } from 'lucide-react';
import { Chip, Tooltip } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import { useThemeContext } from '../../context/ThemeContext';

const Projects = () => {
    const { t } = useLanguage();
    const { isDarkMode } = useThemeContext();
    const textMuted = isDarkMode ? "text-slate-400" : "text-slate-600";
    const cardBg = isDarkMode ? "bg-slate-800/50" : "bg-white/80 shadow-lg";
    const borderCol = isDarkMode ? "border-slate-800" : "border-slate-200";

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6 reveal-section">
                
                {/* Title Section */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="text-cyan-400 font-mono text-xl">03.</span>
                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{t.projects.title}</h2>
                    <div className={`h-px ${isDarkMode ? 'bg-slate-700' : 'bg-slate-300'} flex-grow max-w-xs`}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.projects.items.map((project, idx) => (
                        <div key={idx} className={`group relative p-6 rounded-xl ${cardBg} border ${borderCol} transition-all hover:-translate-y-2 hover:border-cyan-500/50 flex flex-col h-full`}>
                            
                            {/* Card Header: Icon + Badges */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-2 items-center">
                                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                                        <Layout size={24} />
                                    </div>
                                    
                                    {/* Team/Solo Badge */}
                                    <Tooltip title={project.isTeam ? "Team Collaboration" : "Individual Project"} placement="top">
                                        <div className={`text-[10px] px-2 py-1 rounded-full border ${isDarkMode ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-slate-50'} flex items-center gap-1 ${textMuted} cursor-help`}>
                                            {project.isTeam ? <Users size={12} /> : <User size={12} />}
                                            <span className="font-mono uppercase">{project.isTeam ? "Team" : "Solo"}</span>
                                        </div>
                                    </Tooltip>
                                </div>

                                <div className="flex gap-3">
                                    {/* GitHub / Private Lock */}
                                    {project.isPrivate ? (
                                        <Tooltip title="Private Repository (Company Confidential)" placement="left">
                                            <div className="p-1">
                                                <Lock size={20} className="text-amber-500/70 hover:text-amber-500 cursor-not-allowed transition-colors" />
                                            </div>
                                        </Tooltip>
                                    ) : (
                                        <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label="View Code">
                                            {/* <Github size={20} className={`${textMuted} hover:text-cyan-400 cursor-pointer transition-colors`} /> */}
                                        </a>
                                    )}
                                    
                                    {project.demoLink && project.demoLink !== "#" && (
                                        <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label="View Demo">
                                            <ExternalLink size={20} className={`${textMuted} hover:text-cyan-400 cursor-pointer transition-colors`} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Card Content */}
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'} group-hover:text-cyan-400 transition-colors`}>
                                {project.title}
                            </h3>
                            
                            <div className={`${textMuted} text-sm mb-6 flex-grow`}>
                                <p>{project.desc}</p>
                                {project.isPrivate && (
                                    <p className="mt-3 text-xs text-amber-500/80 italic border-l-2 border-amber-500/30 pl-2">
                                        * Architecture & Contribution shown. Code is proprietary.
                                    </p>
                                )}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tIdx) => (
                                    <Chip 
                                        key={tIdx} 
                                        label={tag} 
                                        size="small"
                                        sx={{ 
                                            fontFamily: 'monospace', 
                                            fontSize: '0.7rem', 
                                            backgroundColor: 'transparent', 
                                            color: isDarkMode ? '#94a3b8' : '#64748b', 
                                            border: '1px solid', 
                                            borderColor: isDarkMode ? '#334155' : '#e2e8f0',
                                            '&:hover': {
                                                borderColor: '#06b6d4',
                                                color: '#06b6d4'
                                            }
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

export default Projects;