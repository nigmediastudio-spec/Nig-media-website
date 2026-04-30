import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="py-20 bg-obsidian border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-8">
              <Logo />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-[0.2em] uppercase leading-none">NIG MEDIA</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold">STUDIO</span>
              </div>
            </div>
            <p className="text-[12px] text-white/40 leading-relaxed italic mb-8">
              "We don't just create content — we build visual identities that elevate brands and communicate excellence with impact."
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/20">Production</h5>
              <ul className="space-y-4 text-[13px] text-white/60 font-light">
                <li><Link to="/services" className="hover:text-gold">Cinematography</Link></li>
                <li><Link to="/services" className="hover:text-gold">Photography</Link></li>
                <li><Link to="/services" className="hover:text-gold">Graphic Design</Link></li>
                <li><Link to="/services" className="hover:text-gold">Branding</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/20">Company</h5>
              <ul className="space-y-4 text-[13px] text-white/60 font-light">
                <li><Link to="/about" className="hover:text-gold">The Studio Story</Link></li>
                <li><Link to="/portfolio" className="hover:text-gold">Our Portfolio</Link></li>
                <li><Link to="/pricing" className="hover:text-gold">Pricing Packages</Link></li>
                <li><Link to="/contact" className="hover:text-gold">Contact Us</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/20">Contact</h5>
              <ul className="space-y-4 text-[13px] text-white/60 font-light">
                <li className="flex items-center gap-3"><MapPin size={14} className="text-gold" /> Lusaka, Zambia</li>
                <li className="flex items-center gap-3"><Phone size={14} className="text-gold" /> +260 972 777 799</li>
                <li className="flex items-center gap-3"><Mail size={14} className="text-gold" /> nigmediastudio@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
            © 2026 NIG Media Studio. All rights reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
