import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, X, Maximize2 } from 'lucide-react';

const categories = ['All', 'Video', 'Photography', 'Branding', 'Design'];

const projects = [
  { 
    id: 1, 
    title: 'Corporate Brand Film', 
    category: 'Video', 
    img: 'https://images.unsplash.com/photo-1542204111-970c92277a8c?auto=format&fit=crop&q=80&w=800', 
    desc: 'Sovereign Bank global expansion cinematic documentary.',
    caseStudy: {
      challenge: "Sovereign Bank needed to communicate their pan-African expansion to global investors without losing their heritage feel.",
      solution: "We deployed a multi-country production team to capture authentic local growth paired with high-end corporate cinematography.",
      results: "Direct investment inquiries increased by 40% following the film's premiere.",
      feedback: "NIG Media captured the soul of our bank. They didn't just film buildings; they filmed our legacy.",
      client: "Director of Communications, Sovereign Bank",
      beforeImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1542204111-970c92277a8c?auto=format&fit=crop&q=80&w=1000"
    }
  },
  { 
    id: 2, 
    title: 'Heritage Studio Session', 
    category: 'Photography', 
    img: 'https://images.unsplash.com/photo-1520156555610-68097b695726?auto=format&fit=crop&q=80&w=800', 
    desc: 'Premium African indoor studio shoot capturing traditional elegance with modern lighting.',
    caseStudy: {
      challenge: "The client wanted to modernize traditional attire photography without making it look 'costumey'.",
      solution: "Using high-contrast Chiaroscuro lighting and ultra-sharp 85mm lenses, we highlighted textures and dignity.",
      results: "Featured in 3 leading African fashion journals.",
      feedback: "For the first time, I saw my heritage reflected through a truly professional lens.",
      client: "Chief Executive, Heritage Apparel",
      beforeImg: "https://images.unsplash.com/photo-1523240715630-971c08083863?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1520156555610-68097b695726?auto=format&fit=crop&q=80&w=1000"
    }
  },
  { 
    id: 3, 
    title: 'Urban Legend Edit', 
    category: 'Video', 
    img: 'https://images.unsplash.com/photo-1574717024453-354056afd6da?auto=format&fit=crop&q=80&w=800', 
    desc: 'Advanced video editing preview showcasing color grading and sound design precision.',
    caseStudy: {
      challenge: "Raw footage lacked any cinematic 'vibe' and had poor audio quality.",
      solution: "Custom LUT development for color grading and foley-heavy sound design to add depth.",
      results: "Viral reach on TikTok exceeding 1.2M views.",
      feedback: "I didn't think the footage had this much potential. The editing made it a masterpiece.",
      client: "Artist, Urban Legend Crew",
      beforeImg: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1574717024453-354056afd6da?auto=format&fit=crop&q=80&w=1000"
    }
  },
  { id: 4, title: 'Visionary Summit', category: 'Video', img: 'https://images.unsplash.com/photo-1475721027187-40aeae77c9d3?auto=format&fit=crop&q=80&w=800', desc: 'Full event coverage and high-stakes branding for leadership summit.' },
  { id: 5, title: 'Apex Corporate Identity', category: 'Branding', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800', desc: 'Complete visual system refresh for finance giant.' },
  { id: 6, title: 'In-Studio Profile', category: 'Photography', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800', desc: 'Dramatic studio portraiture for African executive leadership.' },
  { id: 7, title: 'Director\'s Cut Previews', category: 'Video', img: 'https://images.unsplash.com/photo-1492691523567-6170f0295db6?auto=format&fit=crop&q=80&w=800', desc: 'Behind-the-scenes editing workflow and multi-cam synchronization.' },
  { id: 8, title: 'Imperial Branding', category: 'Branding', img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800', desc: 'Legacy identity for continental ministry network.' },
];

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-obsidian">
       <section className="py-20 bg-zinc-950/50 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block mb-4">Curated Excellence</span>
            <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9]">Our Portfolio</h1>
          </motion.div>
          
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-white/5 pb-2">
            {categories.map((c) => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={`text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold transition-all py-2 border-b-2 ${
                  filter === c ? 'text-gold border-gold' : 'text-white/30 border-transparent hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative h-[400px] md:h-[600px] overflow-hidden bg-white/5 cursor-pointer"
                >
                   <div 
                    className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-md p-3 rounded-full hover:bg-gold hover:text-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImage(project.img);
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                   <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    onClick={() => setSelectedProject(project)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-4 block">{project.category}</span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h3>
                    <p className="text-white/60 text-sm max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light italic">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-gold group-hover:text-white transition-colors">
                        View Case Study <ArrowRight size={16} />
                      </button>
                      <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-gold transition-colors">
                         <Play size={18} fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Detail Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
              >
                <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
                
                <motion.div 
                   initial={{ opacity: 0, y: 50, scale: 0.9 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: 50, scale: 0.9 }}
                   className="relative w-full max-w-6xl bg-obsidian border border-white/10 overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-8 right-8 z-50 p-4 bg-white/5 hover:bg-gold hover:text-black transition-all"
                  >
                    <ArrowRight className="rotate-180" size={24} />
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-16 space-y-12">
                      <div className="space-y-4">
                        <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">{selectedProject.category} Case Study</span>
                        <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">{selectedProject.title}</h2>
                      </div>

                      {selectedProject.caseStudy ? (
                        <div className="space-y-12">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">The Challenge</h4>
                              <p className="text-white/60 font-light leading-relaxed italic">"{selectedProject.caseStudy.challenge}"</p>
                            </div>
                            <div className="space-y-4">
                              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">The Solution</h4>
                              <p className="text-white/60 font-light leading-relaxed">{selectedProject.caseStudy.solution}</p>
                            </div>
                          </div>

                          <div className="p-8 bg-white/5 border-l-2 border-gold space-y-4">
                             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">The Impact</h4>
                             <p className="text-2xl font-display font-bold">{selectedProject.caseStudy.results}</p>
                          </div>

                          <div className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Client Feedback</h4>
                            <p className="text-xl font-display italic text-white/80">"{selectedProject.caseStudy.feedback}"</p>
                            <p className="text-xs uppercase tracking-widest text-gold">— {selectedProject.caseStudy.client}</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-white/40 italic">Detailed case study coming soon for this project.</p>
                      )}

                      <div className="pt-8">
                        <a href="https://wa.me/260972777799" className="px-10 py-5 bg-gold text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all">Start Your Similar Project</a>
                      </div>
                    </div>

                     <div className="bg-zinc-950 p-8 space-y-8">
                       {selectedProject.category === 'Video' ? (
                         <div className="space-y-4">
                            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Video Preview</span>
                            <div className="aspect-video bg-black overflow-hidden relative group/vid">
                              <iframe 
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${selectedProject.id === 1 ? 'ScMzIvxBSi4' : 'ScMzIvxBSi4'}?autoplay=0&mute=1&controls=1`}
                                title="Video Preview"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                            <p className="text-[10px] text-white/30 italic">Note: High-fidelity production preview enabled.</p>
                         </div>
                       ) : selectedProject.caseStudy && (
                         <div className="space-y-8">
                            <div className="space-y-4">
                              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Before / Concept</span>
                              <div 
                                className="aspect-video bg-obsidian overflow-hidden grayscale cursor-zoom-in group/img relative"
                                onClick={() => setLightboxImage(selectedProject.caseStudy.beforeImg)}
                              >
                                <img src={selectedProject.caseStudy.beforeImg} className="w-full h-full object-cover opacity-60" alt="Before" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40">
                                   <span className="text-[10px] uppercase tracking-widest font-bold">Enlarge View</span>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">After / Final Impact</span>
                              <div 
                                className="aspect-video bg-obsidian overflow-hidden cursor-zoom-in group/img relative"
                                onClick={() => setLightboxImage(selectedProject.caseStudy.afterImg)}
                              >
                                <img src={selectedProject.caseStudy.afterImg} className="w-full h-full object-cover" alt="After" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40">
                                   <span className="text-[10px] uppercase tracking-widest font-bold">Enlarge View</span>
                                </div>
                              </div>
                            </div>
                         </div>
                       )}
                       {!selectedProject.caseStudy && selectedProject.category !== 'Video' && (
                         <div className="h-full relative overflow-hidden group">
                           <img src={selectedProject.img} className="w-full h-full object-cover blur-sm opacity-30" alt="Placeholder" />
                           <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                              <Play size={80} className="text-gold/20" />
                              <p className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-bold">Gallery Item Details Pending</p>
                           </div>
                         </div>
                       )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Lightbox Overlay */}
          <AnimatePresence>
            {lightboxImage && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-20"
                onClick={() => setLightboxImage(null)}
              >
                <button 
                  className="absolute top-10 right-10 z-[120] text-white/50 hover:text-gold transition-colors p-4"
                  onClick={() => setLightboxImage(null)}
                >
                  <X size={40} />
                </button>
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={lightboxImage} 
                    className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/5" 
                    alt="Lightbox View" 
                  />
                  <div className="mt-6 flex justify-between items-center bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                    <div className="space-y-1">
                       <span className="text-gold text-[10px] uppercase tracking-widest font-bold">NIG Media Studio</span>
                       <p className="text-white/40 text-xs font-light tracking-wider">Cinematic Asset Inspection</p>
                    </div>
                    <button 
                      onClick={() => setLightboxImage(null)}
                      className="text-[10px] uppercase tracking-widest font-bold text-white hover:text-gold transition-colors"
                    >
                      Close Gallery
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          
          <div className="mt-40 p-20 glass-card text-center space-y-8">
             <h2 className="text-4xl font-display">Looking for something specific?</h2>
             <p className="text-white/40 max-w-xl mx-auto font-light">
               Our full visual library contains over 100+ projects across various industries. Contact us for detailed case studies.
             </p>
             <a href="https://wa.me/260972777799" className="inline-flex py-4 px-10 border border-gold text-gold text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
               Request similar work
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};
