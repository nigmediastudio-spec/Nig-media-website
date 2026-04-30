import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  features, 
  highlight = false,
  description 
}: { 
  title: string, 
  price: string, 
  features: string[], 
  highlight?: boolean,
  description: string
}) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-12 flex flex-col h-full border ${
      highlight ? 'bg-gold text-black border-gold scale-105 z-10' : 'bg-white/[0.02] border-white/5 text-white'
    }`}
  >
    <div className="mb-10 min-h-[100px]">
      <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-4 opacity-60">{title}</h3>
      <h4 className="text-4xl md:text-5xl font-display font-black leading-none">{price}</h4>
      <p className={`mt-6 text-sm font-light ${highlight ? 'text-black/70' : 'text-white/40'}`}>
        {description}
      </p>
    </div>

    <div className="flex-grow space-y-4 mb-12">
      {features.map((f, i) => (
        <div key={i} className="flex items-start gap-4">
          <Check size={16} className={`mt-1 flex-shrink-0 ${highlight ? 'text-black' : 'text-gold'}`} />
          <span className={`text-[13px] font-medium ${highlight ? 'text-black/80' : 'text-white/60'}`}>{f}</span>
        </div>
      ))}
    </div>

    <a 
      href="https://wa.me/260972777799"
      className={`w-full py-5 text-center text-xs font-bold uppercase tracking-[0.3em] transition-all ${
        highlight 
          ? 'bg-black text-gold hover:bg-zinc-800' 
          : 'bg-white/5 text-white hover:bg-gold hover:text-black border border-white/10'
      }`}
    >
      Select Package
    </a>
  </motion.div>
);

export const Pricing = () => {
  return (
    <div className="bg-obsidian">
       <section className="py-20 bg-zinc-950/50 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block mb-4">Investment</span>
            <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9]">Premium Packages</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
             <PricingCard 
                title="Starter Package"
                price="ZMW 2,500"
                description="Perfect for individuals or small influencers needing a quick visual refresh."
                features={[
                  "Professional Portrait Session",
                  "2 Cinematic Promo Reels (15s)",
                  "Logo Design (Basic)",
                  "Digital Delivery (48hrs)",
                  "1 Revision Included"
                ]}
             />
             <PricingCard 
                highlight
                title="Standard Package"
                price="ZMW 7,500"
                description="The elite choice for established brands and growing ministries."
                features={[
                  "Cinematic Brand Film (2 mins)",
                  "Full Branding Photography",
                  "Complete Visual Identity System",
                  "Social Media Kit (10 posts)",
                  "3 Revisions & Strategic Consultation",
                  "Priority Delivery"
                ]}
             />
             <PricingCard 
                title="Premium Package"
                price="ZMW 15,000+"
                description="Comprehensive creative direction for corporate dominance."
                features={[
                  "Legacy Documentary Production",
                  "Ongoing Media Strategy",
                  "Corporate Event Coverage",
                  "Interactive Company Profile",
                  "Unlimited Revisions",
                  "Dedicated Creative Director"
                ]}
             />
          </div>
          
          <div className="mt-40 p-20 glass-card flex flex-col md:flex-row justify-between items-center gap-12">
             <div className="space-y-4 text-center md:text-left">
                <h2 className="text-4xl font-display font-bold">Need a Custom Quote?</h2>
                <p className="text-white/40 max-w-xl font-light">
                  Every visionary project has unique requirements. We specialize in bespoke solutions tailored to your specific budget and impact goals.
                </p>
             </div>
             <a 
               href="https://wa.me/260972777799"
               className="flex items-center gap-4 px-12 py-6 bg-gold text-black text-xs font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl"
             >
               Get a Free Quote <ArrowRight size={18} />
             </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 text-center">
         <div className="container mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8 font-bold">Secure Your Slot</p>
            <div className="flex justify-center flex-wrap gap-12 opacity-50 grayscale">
               {[1, 2, 3, 4].map(i => <img key={i} src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200`} className="h-10 transition-all hover:grayscale-0" alt="Partner" />)}
            </div>
         </div>
      </section>
    </div>
  );
};
