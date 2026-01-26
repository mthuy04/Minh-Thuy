// src/components/Contact.js
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "mthuy68.work@gmail.com",
      href: "mailto:mthuy68.work@gmail.com",
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
      value: "thuy-nguyen-518608341",
      href: "https://www.linkedin.com/in/thuy-nguyen-518608341",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="main-container">
        
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-[1.1rem] mb-4">/ Connection</span>
          <h2 className="text-[3.8rem] md:text-[5rem] font-black tracking-tighter text-slate-900 leading-none">
            Let&apos;s <span className="text-blue-600">Connect.</span>
          </h2>
          <p className="mt-8 text-[1.8rem] text-slate-500 font-medium max-w-2xl leading-relaxed">
            I am actively seeking <strong className="text-slate-900">BA Internship</strong> roles for 2026. 
            Let&apos;s discuss how my analytical skills can support your team.
          </p>
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

            {/* LOCATION CARD - Đã fix ảnh Map chuẩn */}
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group min-h-[260px] flex flex-col justify-end">
              <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hanoi City Map" 
                  className="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="relative flex h-8 w-8">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-8 w-8 bg-blue-600 border-[3px] border-white shadow-lg"></span>
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <MapPin size={20} />
                  </div>
                  <p className="text-[0.9rem] font-bold uppercase tracking-[0.4em] text-blue-400">Current Base</p>
                </div>
                <h3 className="text-[2.6rem] font-black mb-2 tracking-tight">Hanoi, Vietnam</h3>
                <p className="text-[1.2rem] text-slate-400 font-medium italic">
                  Available for hybrid/on-site roles at <span className="text-white">VNU-IS</span>.
                </p>
              </div>
            </div>  
          </div>

          {/* CONTACT FORM - Đã sửa Placeholder chuyên nghiệp */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-12 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] flex flex-col justify-center"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[1rem] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-8 py-5 text-[1.4rem] outline-none transition-all font-bold text-slate-900" placeholder="Type your name here..." />
                </div>
                <div className="space-y-3">
                  <label className="text-[1rem] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-8 py-5 text-[1.4rem] outline-none transition-all font-bold text-slate-900" placeholder="your.email@professional.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[1rem] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea rows="4" className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-3xl px-8 py-6 text-[1.4rem] outline-none transition-all font-bold text-slate-900 resize-none" placeholder="Briefly describe your opportunity or project..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white py-6 rounded-2xl font-black text-[1.4rem] flex items-center justify-center gap-4 shadow-xl transition-all duration-500"
              >
                Send Message 
                <Send size={20} strokeWidth={3}/>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}