// src/components/Contact.js
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin, ExternalLink, Calendar, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "mthuy68.work@gmail.com",
      href: "mailto:mthuy68.work@gmail.com?subject=[BA%20Intern%20Application]%20–%20Nguyễn%20Minh%20Thuý",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Phone size={22} />,
      label: "Phone",
      value: "0373 933 325",
      href: "tel:+84373933325",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "/in/thuy-nguyen-518608341",
      href: "https://www.linkedin.com/in/thuy-nguyen-518608341",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const quickFacts = [
    { icon: <Clock size={16} />, text: "Commitment: 3–6 months" },
    { icon: <Calendar size={16} />, text: "Available: Feb 2026" },
    { icon: <CheckCircle2 size={16} />, text: "Focus: Requirements • Modeling • UAT" }
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="main-container">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-[1.1rem] mb-4">/ Connection</span>
          <h2 className="text-[3.8rem] md:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-none mb-8">
            Let&apos;s <span className="text-blue-600">Connect.</span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-[1.8rem] text-slate-900 font-black leading-tight mb-4 uppercase tracking-tight">
               Business Analyst Intern
            </p>
            <p className="text-[1.5rem] text-slate-500 font-medium leading-relaxed">
               I am seeking opportunities to contribute to tech-driven products. I specialize in requirements engineering and UAT for complex systems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {quickFacts.map((fact, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-[1rem] font-black text-slate-600 uppercase tracking-widest">
                <span className="text-blue-600">{fact.icon}</span> {fact.text}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-stretch">
          
          <div className="flex flex-col gap-8">
            {contactDetails.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="group flex items-center justify-between p-7 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[0.8rem] font-black uppercase tracking-widest text-slate-400 mb-0.5">{info.label}</p>
                    <p className="text-[1.4rem] font-black text-slate-900 leading-none">{info.value}</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
              </motion.a>
            ))}

            <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group min-h-[260px] flex flex-col justify-end">
              <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hanoi City Map" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <p className="text-[0.9rem] font-bold uppercase tracking-[0.4em] text-blue-400">Current Base</p>
                </div>
                <h3 className="text-[2.6rem] font-black mb-2 tracking-tight">Hanoi, Vietnam</h3>
                <p className="text-[1.2rem] text-slate-400 font-medium">
                  Available for <span className="text-white">On-site / Hybrid</span> roles.
                </p>
              </div>
            </div>  
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-12 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)]"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[1rem] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-8 py-5 text-[1.4rem] outline-none transition-all font-bold text-slate-900" placeholder="Your name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[1rem] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-8 py-5 text-[1.4rem] outline-none transition-all font-bold text-slate-900" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[1rem] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea rows="4" className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-3xl px-8 py-6 text-[1.4rem] outline-none transition-all font-bold text-slate-900 resize-none" placeholder="I'd love to discuss how I can support your BA team..."></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button 
                  className="bg-slate-900 hover:bg-blue-600 text-white py-6 rounded-2xl font-black text-[1.3rem] flex items-center justify-center gap-4 transition-all duration-500"
                >
                  Send Message <Send size={20} />
                </motion.button>
                
                <a 
                  href="mailto:mthuy68.work@gmail.com?subject=[BA%20Intern%20Application]%20–%20Nguyễn%20Minh%20Thuý"
                  className="bg-blue-600 hover:bg-slate-900 text-white py-6 rounded-2xl font-black text-[1.3rem] flex items-center justify-center gap-4 transition-all duration-500"
                >
                  Direct Email <Mail size={20} />
                </a>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}