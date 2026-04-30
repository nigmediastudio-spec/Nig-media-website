import React from 'react';
import { motion } from 'motion/react';
import { 
  Video, 
  Camera, 
  PenTool, 
  Briefcase, 
  MessageSquare, 
  ArrowRight,
  TrendingUp,
  Target,
  FileText
} from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description, benefits, outcome }: { 
  icon: any, 
  title: string, 
  description: string, 
  benefits: string[], 
  outcome: string 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -15, scale: 1.02 }}
    viewport={{ once: true }}
    className="py-24 border-b border-white/5 last:border-0 transition-all duration-500 ease-out"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="w-16 h-16 bg-gold/10 flex items-center justify-center text-gold">
          <Icon size={32} />
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">{title}</h2>
        <p className="text-xl text-white/50 leading-relaxed font-light">{description}</p>
        <div className="space-y-6 pt-4">
           <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Key Transformations</h4>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold/60 font-semibold italic">
                  <div className="w-1 h-1 bg-gold rounded-full" />
                  {b}
                </div>
              ))}
           </div>
        </div>
      </div>
      <div className="bg-zinc-950 p-12 border border-white/5 space-y-8">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold">The Impact</span>
          <p className="text-2xl font-display italic text-white/80">"{outcome}"</p>
        </div>
        <a 
          href="https://wa.me/260972777799"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-4 w-full justify-center py-6 bg-gold text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-300"
        >
          Book via WhatsApp <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);

export const Services = () => {
  return (
    <div className="bg-obsidian">
       <section className="py-20 bg-zinc-950/50 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block mb-4">Our Expertise</span>
            <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9]">Elevating Your <br /> Message</h1>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12">
        <ServiceItem 
          icon={Video}
          title="Video Production"
          description="We create cinematic and engaging video content for brands, churches, events, and businesses that tells your story powerfully and professionally."
          benefits={["Corporate cinematic films", "Ministry event coverage", "Viral social media content"]}
          outcome="Visionary storytelling that turns viewers into loyal brand advocates."
        />
        <ServiceItem 
          icon={Camera}
          title="Photography"
          description="We capture high-quality images for events, branding, corporate shoots, and personal projects with professional editing and detail."
          benefits={["High-stakes branding sets", "Corporate executive portraits", "Editorial event photography"]}
          outcome="Crystal clear imagery that establishes instant authority and premium perception."
        />
        <ServiceItem 
          icon={PenTool}
          title="Graphic Design"
          description="We design eye-catching visuals including posters, flyers, social media content, and marketing materials that make your brand stand out."
          benefits={["Event promotional posters", "Social media campaign design", "Print & digital marketing"]}
          outcome="Visual assets that separate your brand from the generic marketplace noise."
        />
        <ServiceItem 
          icon={Target}
          title="Branding & Identity"
          description="We build strong brand identities including logos, visual systems, and creative direction that define your business image."
          benefits={["Complete logo systems", "Visual brand guidelines", "Creative direction & consultation"]}
          outcome="A cohesive visual identity that demands respect and builds generational trust."
        />
        <ServiceItem 
          icon={FileText}
          title="Company Profiles & Infographics"
          description="We design professional company profiles and infographics that present your business clearly and attractively."
          benefits={["Interactive PDF profiles", "Data-driven infographics", "Professional pitch decks"]}
          outcome="Business documentation that closes high-ticket deals with ease."
        />
        <ServiceItem 
          icon={TrendingUp}
          title="Media Strategy & Consulting"
          description="We help clients plan and structure their content for better engagement, visibility, and audience impact."
          benefits={["Content release planning", "Audience engagement strategy", "Digital presence audits"]}
          outcome="A strategic roadmap that ensures every visual piece contributes to your bottom line."
        />
      </div>

       <section className="py-24 bg-gold text-black text-center mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-10 tracking-tight">Ready to Start Your Project?</h2>
          <a 
            href="https://wa.me/260972777799"
            className="inline-flex items-center gap-4 px-12 py-6 bg-black text-gold text-sm font-bold uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-2xl"
          >
            WhatsApp Booking <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};
