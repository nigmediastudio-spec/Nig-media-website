import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Linkedin,
  Send
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Video Production',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    alert('Thank you for your inquiry. A studio strategist will connect with you shortly.');
  };

  return (
    <div className="bg-obsidian">
       <section className="py-20 bg-zinc-950/50 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold text-[12px] uppercase tracking-[0.4em] font-bold block mb-4">Get in Touch</span>
            <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9]">Let's Connect.</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-4">
                <h2 className="text-4xl font-display font-bold">Studio Details</h2>
                <p className="text-white/40 max-w-sm font-light">
                  We are based in the heart of Lusaka, serving the visionaries of Africa.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Location</h4>
                    <p className="text-lg font-medium">Lusaka, Zambia</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Phone</h4>
                    <p className="text-lg font-medium">+260 972 777 799</p>
                  </div>
                </div>

                <div className="flex gap-6 group text-gold">
                  <div className="w-12 h-12 bg-gold text-black flex items-center justify-center transition-all">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-black/30 font-bold mb-2">WhatsApp</h4>
                    <a href="https://wa.me/260972777799" className="text-lg font-bold underline underline-offset-4">Click to Chat</a>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Email</h4>
                    <p className="text-lg font-medium">nigmediastudio@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-6">Follow Our Journey</h4>
                <div className="flex gap-8">
                  {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="text-white/40 hover:text-gold transition-colors">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-zinc-950 p-10 md:p-20 border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Nathan Irvin"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="hello@company.com"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Interested Service</label>
                  <select 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="Video Production">Video Production</option>
                    <option value="Photography">Photography</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Branding">Branding</option>
                    <option value="Corporate Consulting">Corporate Consulting</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Project Vision</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about the legacy you want to create..."
                    className="w-full bg-transparent border border-white/10 p-6 focus:border-gold outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-gold text-black text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white transition-all duration-500 shadow-2xl"
                >
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-zinc-950 grayscale opacity-40 border-t border-white/5">
        <div className="w-full h-full flex items-center justify-center">
           <MapPin size={48} className="text-gold" />
           <span className="ml-4 text-xs uppercase tracking-[0.4em] font-bold">Lusaka Strategy Office</span>
        </div>
      </section>
    </div>
  );
};
