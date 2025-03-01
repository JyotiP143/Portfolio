"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export default function Home() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="md:min-h-screen bg-[#1a1e23] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00e5ff]/20 pointer-events-none"></div>
      <div className=" px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#232830] rounded-3xl shadow-2xl overflow-hidden my-8 relative">
          <header className="flex justify-between items-center p-8">
            <div className="text-white text-2xl font-bold">Portfolio.</div>
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                <Link
                  href="#"
                  key={item}
                  className={`${
                    item === activeLink ? "text-[#00e5ff]" : "text-white"
                  } hover:text-[#00e5ff] transition-colors`}
                  onClick={() => setActiveLink(item)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </header>
          <main className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-white text-2xl">Hello, It's Me</h2>
              <h1 className="text-white text-5xl md:text-6xl font-bold">John Kendric</h1>
              <h3 className="text-2xl text-white">
                And I'm a <span className="text-[#00e5ff]">Frontend Developer</span>
              </h3>
              <p className="text-gray-400 max-w-lg">
                Passionate about creating interactive applications and experiences on the web.
              </p>
              <div className="flex space-x-4 pt-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <Link
                    href="#"
                    key={index}
                    className="bg-[#232830] border border-[#00e5ff]/30 p-3 rounded-full text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#232830] transition-colors"
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  href="#"
                  className="bg-[#00e5ff] text-[#232830] px-8 py-3 rounded-full font-medium hover:bg-[#00c2d8] transition-colors inline-block"
                >
                  Download CV
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
              <div className="relative w-[320px] h-[370px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#00e5ff]/50 blur-xl transform scale-105 z-0 hexagon"></div>
                <div className="w-full h-full overflow-hidden relative z-10 hexagon">
                <img src="/profile.jpg" alt="Profile" width="400" height="400" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
