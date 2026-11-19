import React from 'react';
import { motion } from "framer-motion";
import { resumeData } from "../constants";

const About = () => (
  <section id="about" className="scroll-mt-20 px-6 py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">01 / About</p>
        <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          Engineer by craft.<br />
          <span className="text-slate-500">Builder by mindset.</span>
        </h2>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
          <p className="text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            {resumeData.summary}
          </p>
          <p className="mt-6 leading-7 text-slate-400">
            I turn complex product requirements into reliable, maintainable systems—from polished React interfaces to payment workflows and optimized databases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Full Stack", "Microservices", "Real-time Systems", "Agile CI/CD"].map((item) => (
              <span key={item} className="rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-4 py-2 text-sm text-violet-200">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Education</p>
          <div className="mt-6">
            <p className="text-xl font-bold">NIT Silchar</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">B.Tech — Computer Science & Engineering</p>
            <p className="mt-4 text-3xl font-black text-violet-300">
              7.37 <span className="text-sm font-medium text-slate-400">CGPA</span>
            </p>
            <p className="mt-3 text-sm text-slate-500">Nov 2022 — May 2026</p>
          </div>
          <div className="mt-8 border-t border-white/10 pt-7">
            <p className="font-bold">Sri Chaitanya</p>
            <p className="mt-1 text-sm text-slate-400">Intermediate · 95.6%</p>
            <p className="mt-2 text-sm text-slate-500">2020 — 2022</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
