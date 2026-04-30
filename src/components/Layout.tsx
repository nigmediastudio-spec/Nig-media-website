import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { MessageSquare } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-white overflow-x-hidden">
      <Navigation />
      <main className="flex-grow pt-24 md:pt-32">
        {children}
      </main>
      <Footer />
      
      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/260972777799"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gold text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-gold-light transition-all duration-300 md:hidden"
      >
        <MessageSquare size={24} />
      </a>
      
      {/* Side Navigation accents (Elegant Dark pattern) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 p-8 space-y-8 flex flex-col items-center z-40 hidden xl:flex text-white/20">
        <div className="w-[1px] h-20 bg-white/10"></div>
        <span className="text-[10px] tracking-widest uppercase -rotate-90 origin-center whitespace-nowrap">Excellence Crafted</span>
        <div className="w-[1px] h-20 bg-white/10"></div>
      </div>
    </div>
  );
};
