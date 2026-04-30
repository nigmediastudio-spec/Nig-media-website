import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <section className="py-20 bg-zinc-950/50 border-b border-white/5">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block mb-4">{subtitle}</span>
        <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9]">{title}</h1>
      </motion.div>
    </div>
  </section>
);

export const About = () => {
  return (
    <div className="bg-obsidian">
      <PageHeader title="The Studio Story" subtitle="About NIG Media" />

      {/* Story Section */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">The Genesis</span>
              <h2 className="text-4xl font-display leading-tight">About the Founding</h2>
              <p className="text-white/50 text-lg leading-relaxed font-light">
                NIG Media Studio was founded as a creative response to the growing need for high-quality, professional, and impactful visual communication in today’s digital world. The studio was established with a clear vision: to help businesses, ministries, and individuals communicate their message through excellence in video production, photography, graphic design, and branding.
              </p>
              <p className="text-white/40 leading-relaxed font-light">
                From its foundation, NIG Media Studio has been built on the principles of creativity, professionalism, and excellence, positioning itself as a premium creative production hub dedicated to transforming ideas into powerful visual experiences.
              </p>
            </div>
            <div className="aspect-video bg-gold/5 grayscale group hover:grayscale-0 transition-opacity">
               <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-60" alt="Process" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 md:py-40 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center mb-20">
           <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block mb-4">The Visionary</span>
           <h2 className="text-4xl md:text-6xl font-display">Founder & Managing Director</h2>
        </div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-12 space-y-10">
               <div className="space-y-4">
                  <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">The Managing Director</span>
                  <h2 className="text-5xl md:text-7xl font-display font-medium leading-[1.1]">Nathan Irvine Chibuye</h2>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="aspect-[4/5] bg-obsidian overflow-hidden group">
                    <img 
                      src="/founder.jpg" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                      alt="Nathan Irvine Chibuye" 
                    />
                 </div>
                 <div className="space-y-8">
                   <p className="text-xl text-white/70 font-light leading-relaxed italic border-l-2 border-gold pl-6">
                     "The studio is founded and led by Nathan Irvine Chibuye, who serves as the Managing Director (MD)."
                   </p>
                   <p className="text-lg text-white/50 font-light leading-relaxed">
                     He is a creative strategist, media producer, and visionary leader passionate about using media as a tool for influence, storytelling, and transformation. Under his leadership, NIG Media Studio operates with a strong focus on quality, innovation, and client satisfaction.
                   </p>
                   <p className="text-white/40 font-light leading-relaxed">
                     Ensuring that every project reflects both artistic excellence and purpose-driven communication, his direction continues to shape the studio into a trusted brand for clients seeking professional and impactful media solutions.
                   </p>
                   <div className="flex gap-10 border-t border-white/5 pt-10">
                      <div>
                        <h4 className="text-3xl font-display mb-1">Foundational</h4>
                        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Principles of Excellence</span>
                      </div>
                      <div>
                        <h4 className="text-3xl font-display mb-1">Visionary</h4>
                        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Leadership Styling</span>
                      </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold text-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-10 tracking-tight">Ready to Work with Us?</h2>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-black text-gold text-sm font-bold uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-2xl"
          >
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};
