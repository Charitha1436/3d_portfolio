import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";

const links = [
  ["About", "about"], ["Experience", "experience"], ["Skills", "skills"],
  ["Projects", "projects"], ["Achievements", "achievements"], ["Contact", "contact"],
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);

  const goTo = (id) => {
    setActive(id);
    setToggle(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* ✅ Smaller Logo & Bigger Charitha, logo and name side by side */}
        <button onClick={() => goTo("home")} className="flex items-center gap-3 text-left">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-violet-400/40 bg-violet-500/10 text-lg font-black text-violet-300">CN</span>
          <span>
            <span className="block text-base font-bold tracking-tight text-white">Charitha Nalipireddy</span>
            <span className="block text-xs text-slate-400">Full Stack Engineer</span>
          </span>
        </button>

        {/* ✅ Move Navigation to the Top Right Corner */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)} className={`text-sm font-medium transition ${active === id ? "text-violet-400" : "text-slate-300 hover:text-white"}`}>
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <button aria-label="Toggle navigation" onClick={() => setToggle(!toggle)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 md:hidden">
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>
      </div>

      {toggle && (
        <div className="border-t border-white/10 bg-[#050816] px-6 py-4 md:hidden">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)} className="block w-full py-3 text-left text-sm text-slate-200">{label}</button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
