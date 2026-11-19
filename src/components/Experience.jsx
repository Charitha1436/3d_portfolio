import React from 'react'
import { resumeExperience } from "../constants";

const Experience = () => (
  <section id="experience" className="scroll-mt-20 px-6 py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">02 / Experience</p>
      <h2 className="text-4xl font-black sm:text-5xl">Where I've made impact.</h2>

      <div className="mt-14 space-y-5">
        {resumeExperience.map((item, index) => (
          <article key={item.company} className="group grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition hover:border-violet-400/30 hover:bg-violet-400/[0.035] sm:p-9 md:grid-cols-[220px_1fr]">
            <div>
              <div className="mb-5 text-sm font-black text-violet-400">0{index + 1}</div>
              <p className="text-sm font-semibold text-slate-200">{item.date}</p>
              <p className="mt-3 text-xs leading-5 text-slate-500">{item.tech}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-300">{item.company}</p>
              <h3 className="mt-2 text-2xl font-bold">{item.role}</h3>
              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;