import React from 'react';

export const Logo = ({ className = "h-10", showText = false }: { className?: string; showText?: boolean }) => {
  return (
    <div className={`flex flex-col items-center group ${className}`}>
      <svg 
        viewBox="0 0 100 120" 
        className="w-full h-full drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-transform duration-500 group-hover:scale-110"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield Shape */}
        <path 
          d="M50 5 L90 20 L90 60 C90 85 50 110 50 110 C50 110 10 85 10 60 L10 20 L50 5Z" 
          fill="url(#goldGradient)"
          stroke="#B8860B"
          strokeWidth="1"
        />
        
        {/* Shield Inner Inset */}
        <path 
          d="M50 12 L82 24 L82 58 C82 78 50 98 50 98 C50 98 18 78 18 58 L18 24 L50 12Z" 
          fill="#050505"
        />

        {/* NMS Initials */}
        <text 
          x="50" 
          y="65" 
          textAnchor="middle" 
          className="font-black" 
          style={{ fontSize: '32px', fill: 'url(#goldGradient)', letterSpacing: '-2px' }}
        >
          NMS
        </text>

        {/* Definitions for Gradients */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#f4d06f" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
      </svg>
      
      {showText && (
        <div className="mt-2 flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white leading-none">NIG MEDIA</span>
          <span className="text-[8px] tracking-[0.4em] uppercase text-gold">STUDIO</span>
        </div>
      )}
    </div>
  );
};
