import React from 'react'
import { resumeAchievements } from "../constants";

const Feedbacks = () => (
  <section id="achievements" className="scroll-mt-20 px-6 py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">05 / Achievements</p>
      <h2 className="text-4xl font-black sm:text-5xl">Beyond the code.</h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resumeAchievements.map((item) => (
          <article key={item.label} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-transparent p-6">
            <p className="text-3xl font-black text-violet-300">{item.value}</p>
            <p className="mt-3 font-bold">{item.label}</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-white/10 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Leadership</p>
          <h3 className="mt-3 text-xl font-bold">Vice Captain · Kabaddi</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">Directed team strategy and physical training for national inter-college tournaments at NIT Silchar (2023–2024).</p>
        </article>
        <article className="rounded-[1.5rem] border border-white/10 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Community</p>
          <h3 className="mt-3 text-xl font-bold">Event Organizer & Anchor</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">Coordinated logistics and stage operations for an institutional event with 350+ attendees.</p>
        </article>
      </div>
    </div>
  </section>
);

export default Feedbacks;