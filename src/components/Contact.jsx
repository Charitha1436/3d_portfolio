import React from 'react'
import { resumeData } from "../constants";

const Contact = () => (
  <section id="contact" className="scroll-mt-20 px-6 pb-12 pt-24 lg:px-10">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-[#090d22] to-cyan-500/10 p-8 sm:p-12 lg:p-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">06 / Contact</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">Have an idea worth<br />building?</h2>
          <p className="mt-5 max-w-xl text-slate-300">I'm open to software engineering opportunities, internships, and meaningful collaborations.</p>
        </div>
        <div className="flex flex-col gap-3">
          <a href={`mailto:${resumeData.email}`} className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-[#090d22] transition hover:-translate-y-1">{resumeData.email}</a>
          <a href={resumeData.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold transition hover:border-violet-300">LinkedIn ↗</a>
          <a href={resumeData.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold transition hover:border-violet-300">GitHub ↗</a>
        </div>
      </div>
    </div>
    <footer className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 px-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Charitha Nalipireddy</p>
      <p>Designed & built with React</p>
    </footer>
  </section>
);

export default Contact;