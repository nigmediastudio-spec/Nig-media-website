import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Logo } from './Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-obsidian/90 backdrop-blur-xl py-4 border-white/5' : 'bg-transparent py-8 border-white/0'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <Logo />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-[0.2em] uppercase leading-none">NIG MEDIA</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">STUDIO</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                location.pathname === link.href ? 'text-gold' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/260972777799"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-gold text-black text-[11px] font-bold tracking-widest uppercase hover:bg-gold-light transition-all"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-obsidian z-[60] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button 
              className="absolute top-8 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className="text-2xl uppercase tracking-[0.3em] font-display hover:text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/260972777799"
              className="mt-8 px-10 py-4 bg-gold text-black text-sm font-bold tracking-widest uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
