import React from 'react';
import { Link } from "react-router-dom";

import { DATA } from "../constants";
import Navbar from "../components/Navbar";

import cv from "../assets/CV.pdf";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

// Komponen Kecil untuk Kartu Portfolio agar App.jsx tidak kepanjangan
const PortfolioCard = ({ item }) => (
  <div className={`bg-gradient-to-br ${item.gradient} p-[1px] rounded-[35px] group cursor-pointer transition-all duration-500`}>
    <div className="bg-[#12003b]/90 rounded-[34px] p-10 h-full flex flex-col items-center hover:bg-transparent transition duration-500">
      <div className="w-full aspect-video bg-white/5 rounded-2xl mb-8 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition">
        <img src={item.icon} alt={item.title} className="w-[250px] h-full object-contain" />
      </div>
      <div className="flex justify-between items-center w-full">
        <h3 className="text-2xl font-bold">{item.title}</h3>
        <span className="text-2xl bg-white/10 w-10 h-10 flex items-center justify-center rounded-full group-hover:translate-x-2 transition">→</span>
      </div>
    </div>
  </div>
);

function Home() {
  // Memapulkan posisi dan ukuran ikon teknologi sebagai elemen latar belakang yang tersebar di seluruh halaman
 const bgIcons = [
  { tech: 0, top: "10%", left: "5%", size: 60 },
  { tech: 1, top: "15%", left: "80%", size: 60 },
  { tech: 2, top: "35%", left: "8%", size: 60 },
  { tech: 3, top: "70%", left: "82%", size: 30 },
  { tech: 4, top: "89%", left: "10%", size: 40 },
  { tech: 5, top: "20%", left: "55%", size: 60 },
  { tech: 6, top: "80%", left: "78%", size: 60 },
  { tech: 7, top: "65%", left: "45%", size: 60 },
];

// emailjs
const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
          "Service_ID",
          "Template_ID",
          form.current,
          "KEYPUBLIC"
      )
      .then(() => {
          alert("Message sent successfully!");
      })
      .catch((error) => {
          console.log(error);
          alert("Failed to send message.");
      });
  };

  return (
    <div className="min-h-screen relative">

      {/* --- NAVBAR --- */}
       <Navbar />

      {/* --- HERO SECTION --- */}
     <section className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-[1.5fr_1fr] items-center gap-16 relative z-10">
        {/* Background Icons */}
           <div className="absolute inset-0 z-0 pointer-events-none">
            {bgIcons.map((item, i) => (
              <img
                key={i}
                src={DATA.techStack[item.tech].icon}
                alt=""
                className="absolute"
                style={{
                  top: item.top,
                  left: item.left,
                  width: `${item.size}px`,
                  opacity: 0.15,
                }}
              />
            ))}
          </div>
        <div>
          <h1 className="text-5xl font-bold mb-4">Hi! Im {DATA.profile.name}</h1>
          <h2 className="text-xl text-gray-200 mb-6 font-medium">{DATA.profile.role}</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">{DATA.profile.description}</p>
          
          <div className="flex gap-4">
            {DATA.socials.map((soc, i) => {
              const Icon = soc.icon;
            
              return (
                <a
                  key={i}
                  href={soc.link}
                  className={`${soc.color} w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition shadow-lg`}
                >
                  <Icon size={32} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end relative">
          <div className="absolute -inset-10 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="relative h-[520px] rounded-[40px] overflow-hidden">
             <img src={DATA.profile.image} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- ABOUT ME SECTION --- */}
      <section className="min-h-screen max-w-7xl mx-auto px-8 relative z-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-12">
          I am a Junior Web Developer who focuses on backend development, database design, and system structuring.
          I enjoy building efficient logic and ensuring systems run reliably.
        </p>

        {/* Grid Tech Stack */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {DATA.techStack.map((tech, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <img
                src={tech.icon}
                className="w-full h-full object-contain"
                alt={tech.name}
              />
            </div>
          ))}
        </div>

      </section>

      {/* --- PORTFOLIO SECTION --- */}
     <section className="min-h-screen max-w-7xl mx-auto px-8 py-24 relative z-10">
        <h2 className="text-4xl font-bold mb-20 text-center">
            Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Web Development */}
            <Link to="/portfolio#web">
            <div className="cursor-pointer">
                <PortfolioCard item={DATA.homePortfolio[0]} />
            </div>
            </Link>

            {/* Data & Administration */}
            <Link to="/portfolio#data">
            <div className="cursor-pointer">
                <PortfolioCard item={DATA.homePortfolio[1]} />
            </div>
            </Link>

        </div>
        </section>

      {/* --- CONTACT SECTION --- */}
      <section className="max-w-6xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-20 relative z-10">
        <div className='mt-32'>
          <h2 className="text-5xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            I'm open to opportunities. If you're looking for a motivated developer to join your team, feel free to reach out.
          </p>
          <a href={cv}
          target="_blank"
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-blue-700 to-red-600 px-12 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all">
            View my CV
          </a>
        </div>

        <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-xl shadow-2xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your name</label>
              <input type="text" name="name" className="bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Your email
              </label>
              <input type="email" name="email" className="bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
              <textarea name="message" rows="4" className="bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#d1d1d1] text-black py-4 rounded-xl font-bold text-lg hover:bg-white transition flex items-center justify-center gap-2">
              Send <span>➤</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">
        © 2026 {DATA.profile.name}.
      </footer>
    </div>
  );
}

export default Home;