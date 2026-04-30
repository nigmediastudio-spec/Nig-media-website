import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Video, 
  Camera, 
  PenTool, 
  Briefcase, 
  MessageSquare, 
  Play,
  CheckCircle2,
  Quote,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-theme-radial z-10" />
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center opacity-40" 
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1492691523567-6170f0295db6?auto=format&fit=crop&q=80&w=2000)' }}
    ></div>

    <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs md:text-sm uppercase tracking-[0.6em] text-gold font-bold mb-8 block">
          NIG Media Studio • Creation Elevated
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-display font-black leading-[0.9] tracking-tighter mb-8 max-w-5xl mx-auto">
          Create. Capture. <br />
          <span className="text-gold italic">Communicate</span> <br /> Excellence.
        </h1>
        <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-sans mb-12 leading-relaxed font-light">
          NIG Media Studio is a premium creative production hub specializing in video, photography, graphic design, and branding solutions that elevate your message with excellence and impact.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link 
              to="/contact"
              className="group px-10 py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-xs hover:bg-white transition-all duration-500 w-full block text-center"
            >
              Book a Session
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link 
              to="/portfolio"
              className="group px-10 py-5 border border-white/20 text-white font-bold tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-black transition-all duration-500 w-full block text-center"
            >
              View Portfolio
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }} 
            whileTap={{ scale: 0.98 }}
          >
            <a 
              href="https://wa.me/260972777799"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-gold hover:text-white transition-colors"
            >
              <MessageSquare size={16} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
    >
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent opacity-40 mx-auto" />
    </motion.div>
  </section>
);

const AboutPreview = () => (
  <section className="py-24 md:py-40 bg-zinc-950">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video lg:aspect-square bg-gold/10 overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1542204111-970c92277a8c?auto=format&fit=crop&q=80&w=1000" 
            alt="Studio process" 
            className="w-full h-full object-cover opacity-60 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 p-6 bg-gold text-black">
            <span className="text-[10px] font-bold uppercase tracking-widest">Est. Lusaka, Zambia</span>
          </div>
        </motion.div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">The Studio Story</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-[1.1]">Transforming Ideas into Visual Experiences</h2>
          </div>
          <p className="text-lg text-white/50 leading-relaxed font-light">
            We are a creative studio dedicated to transforming ideas into powerful visual experiences. At NIG Media Studio, we help businesses, ministries, and individuals communicate their message with clarity, creativity, and professionalism.
          </p>
          <div className="pt-4">
            <Link 
              to="/about"
              className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#d4af37] border-b border-[#d4af37]/0 hover:border-[#d4af37] py-2 transition-all"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-10 bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 group flex flex-col h-full"
  >
    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-black transition-all">
      <Icon size={20} />
    </div>
    <h3 className="text-xl font-display font-bold mb-4 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow font-light">
      {description}
    </p>
    <Link to="/services" className="text-[11px] font-bold uppercase tracking-widest text-gold/60 group-hover:text-gold flex items-center gap-2">
      View Details <ArrowRight size={12} />
    </Link>
  </motion.div>
);

const ServicesOverview = () => (
  <section className="py-24 md:py-40 bg-obsidian">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">Our Craft</span>
        <h2 className="text-4xl md:text-6xl font-display font-medium">Premium Visual Solutions</h2>
        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={Video}
          title="Cinematic Video Production"
          description="High-end visual storytelling for corporate brands, events, and ministries that tells your story powerfully."
        />
        <ServiceCard 
          icon={Camera}
          title="Professional Photography"
          description="Capturing quality images for events, branding, and corporate shoots with professional detail."
        />
        <ServiceCard 
          icon={PenTool}
          title="Creative Graphic Design"
          description="Eye-catching visuals including posters, social media content, and branding materials."
        />
        <ServiceCard 
          icon={Briefcase}
          title="Brand Identity Development"
          description="Building strong identities including logos and visual systems that define your business image."
        />
        <ServiceCard 
          icon={PenTool}
          title="Company Profiles & Infographics"
          description="Professional company profiles and infographics that present your business clearly and attractively."
        />
        <ServiceCard 
          icon={MessageSquare}
          title="Content Strategy Solutions"
          description="Helping clients plan and structure their content for better engagement, visibility, and impact."
        />
      </div>
    </div>
  </section>
);

const PortfolioHighlights = () => (
  <section className="py-24 md:py-40 bg-zinc-950">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
        <div className="space-y-4">
          <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">Excellence in Action</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium">Portfolio Highlights</h2>
        </div>
        <Link 
          to="/portfolio"
          className="px-8 py-4 border border-white/10 hover:border-gold hover:text-gold transition-all text-xs font-bold uppercase tracking-widest rounded-full"
        >
          View All Works
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {[
          { title: "Legacy Brand Film", category: "Video", img: "https://images.unsplash.com/photo-1492691523567-6170f0295db6?auto=format&fit=crop&q=80&w=800" },
          { title: "Executive Portraiture", category: "Photography", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
          { title: "Ministry Branding", category: "Design", img: "https://images.unsplash.com/photo-1475721027187-40aeae77c9d3?auto=format&fit=crop&q=80&w=800" }
        ].map((item, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden bg-obsidian text-left">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2 block">{item.category}</span>
              <h3 className="text-2xl font-display font-bold leading-tight">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-12 text-center text-white/30 text-sm font-light italic">
        "Explore our creative excellence through real projects that showcase storytelling, branding, and visual impact."
      </p>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-obsidian border-y border-white/5">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">Superior Choice</span>
        <h2 className="text-4xl font-display">Why Discerning Clients Choose Us</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 text-center">
        {[
          "Premium Quality Output",
          "Fast Delivery",
          "Creative Excellence",
          "Professional Communication",
          "Affordable Packages"
        ].map((item, i) => (
          <div key={i} className="space-y-4">
            <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold mx-auto mb-6">
              <CheckCircle2 size={24} />
            </div>
            <p className="text-[11px] uppercase tracking-widest font-bold text-white/70 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  {
    name: "Apostle John M.",
    role: "Senior Visionary, GLC",
    quote: "NIG Media Studio transformed our ministry's digital presence. Their cinematic eyes captured the heart of our mission perfectly."
  },
  {
    name: "Sarah Chiluba",
    role: "CEO, Lifestyle Brands",
    quote: "The level of professionalism and creativity is unmatched. Our brand identity refresh has received incredible feedback from our high-end clients."
  },
  {
    name: "Martin Tembo",
    role: "Event Director, Tech Summit",
    quote: "Their event coverage isn't just a recording; it's a visual experience. The fast delivery of the highlight reel was a game-changer for our marketing."
  }
];

const TestimonialsPreview = () => (
  <section className="py-24 md:py-40 bg-zinc-950">
    <div className="container mx-auto px-6 md:px-12">
       <div className="text-center mb-20 space-y-4">
        <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">Testimonials</span>
        <h2 className="text-4xl md:text-6xl font-display font-medium">The Impact We Leave</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div key={i} className="p-10 glass-card relative">
            <Quote size={40} className="text-gold opacity-10 absolute top-8 right-8" />
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} size={12} className="fill-gold text-gold" />)}
            </div>
            <p className="text-lg font-sans italic mb-8 leading-relaxed text-white/80">
              "{t.quote}"
            </p>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-1">{t.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-gold font-medium">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StudioGallery = () => (
  <section className="py-24 md:py-40 bg-zinc-950">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block">The Inner Sanctum</span>
        <h2 className="text-4xl md:text-6xl font-display font-medium">Studio Gallery</h2>
        <p className="text-white/40 max-w-xl mx-auto font-light">Explore where the magic happens—from premium African indoor sets to our high-precision editing suites.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group aspect-square md:aspect-auto">
          <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-all duration-700" alt="Studio Set" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6">
            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Main Stage</span>
            <h4 className="text-lg font-display">African Indoor Set</h4>
          </div>
        </div>
        <div className="relative overflow-hidden group aspect-square">
          <img src="https://images.unsplash.com/photo-1574717024453-354056afd6da?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-all duration-700" alt="Editing Suite" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Post-Production</span>
            <h4 className="text-sm font-display">Editing Suite A</h4>
          </div>
        </div>
        <div className="relative overflow-hidden group aspect-square">
          <img src="https://images.unsplash.com/photo-1492691523567-6170f0295db6?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-all duration-700" alt="Gear" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Cinema Grade</span>
            <h4 className="text-sm font-display">4K Rig Previews</h4>
          </div>
        </div>
        <div className="md:col-span-2 relative overflow-hidden group aspect-[2/1]">
           <img src="https://images.unsplash.com/photo-1520156555610-68097b695726?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Lighting" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
           <div className="absolute bottom-6 left-6">
            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Atmosphere</span>
            <h4 className="text-lg font-display">Premium Lighting Design</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="py-20 md:py-32 bg-gold text-black">
    <div className="container mx-auto px-6 md:px-12 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
        <h2 className="text-4xl md:text-7xl font-display font-black mb-8 leading-tight">
          Let’s bring your vision to life.
        </h2>
        <p className="text-xl mb-12 opacity-70 max-w-xl mx-auto font-medium">
          Click below to start your project today and experience the difference of cinematic excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://wa.me/260972777799"
            target="_blank"
            rel="noreferrer"
            className="px-12 py-6 bg-black text-gold text-xs font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl rounded-full"
          >
            Start Project on WhatsApp
          </a>
          <Link 
            to="/pricing"
            className="px-12 py-6 border-2 border-black text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-gold transition-all rounded-full"
          >
            View Packages
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <PortfolioHighlights />
      <WhyChooseUs />
      <StudioGallery />
      <TestimonialsPreview />
      <CTABanner />
    </>
  );
};
